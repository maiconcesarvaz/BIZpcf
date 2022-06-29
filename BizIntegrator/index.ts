import {IInputs, IOutputs} from "./generated/ManifestTypes";

export class BizIntegrator implements ComponentFramework.StandardControl<IInputs, IOutputs> {

	private _labelElement: HTMLLabelElement;
	private _container: HTMLDivElement;
	private _breakElement: HTMLBRElement;
	private _context: ComponentFramework.Context<IInputs>;
	private _notifyOutputChanged: () => void;

	private _textElement: HTMLInputElement;
	private _textElementChanged: EventListenerOrEventListenerObject;

	//Elementos para retorno
	private _cnpjvalue: string;
	private _bairrovalue: string;
	private _cidadeValue: string;
	private _cepValue: string;
	private _logradouroValue: string;
	private _numeroValue: string;
	private _estadoValue: string;
	private _paisValue: string;
	private _razaoSocialValue: string;
	private _nomeFantasiaValue: string;
	private _dataAberturaValue: string;
	private _emailValue: string;
	private _telefoneValue: string;

	private _CnaeCodValue: string;
	private _CnaeDesValue: string;

	private _result: string;
	private _apiKey: string;
	private _flowurlpart1: string;
	private _flowurlpart2: string;

	constructor() {

	}

	public init(context: ComponentFramework.Context<IInputs>, notifyOutputChanged: () => void, state: ComponentFramework.Dictionary, container: HTMLDivElement) {
		// Add control initialization code
		this._context = context;
		this._container = container;
		this._notifyOutputChanged = notifyOutputChanged;
		this._textElementChanged = this.cnpjchanged.bind(this);

		this._cnpjvalue = "";
		this._bairrovalue = "";

		//Joga o valor do campo cnpj para a variavel _cnpjvalue
		if (context.parameters.CNPJProperty == null) {
			this._cnpjvalue = "";
		}
		else {
			this._cnpjvalue = context.parameters.CNPJProperty.raw == null ? "" : context.parameters.CNPJProperty.raw;
		}

		//Joga o valor do campo APIkey para a variavel _apiKey
		if (context.parameters.apiBIZkey == null) {
			this._apiKey = "";
		}
		else {
			this._apiKey = context.parameters.apiBIZkey.raw == null ? "" : context.parameters.apiBIZkey.raw;
		}

		//Tive dois problemas aqui:
		//O primeiro foi relacionado ao CORs, não consegui contornar de nenhuma forma via codigo, 
		//até contactei forencedor do API para verificar se as configurações CORs estavam corretas segundo o mesmo estava liberado (*)
		//Nesse caso a solução foi incluir a chamada via Flow, contornando assim esse problema.

		//Assim que inserir o Flow, bati em um bug da MS, o imput aceite cerca de 4mil caracteres, mas devido ao bug está limitado a apenas 160
		//o que me forcou a segunda solução de contorno, dividir a url em duas (não ficou legal mas....)
		//ref do bug https://powerusers.microsoft.com/t5/Power-Apps-Pro-Dev-ISV/Problem-with-maximum-length-of-Input-parameters-which-are-of/m-p/290869#M242

		//Joga o valor do campo APIkey para a variavel _apiKey1
		if (context.parameters.flowUrlPart1 == null) {
			this._flowurlpart1 = "";
		}
		else {
			this._flowurlpart1 = context.parameters.flowUrlPart1.raw == null ? "" : context.parameters.flowUrlPart1.raw;
		}

		//Joga o valor do campo APIkey para a variavel _apiKey2
		if (context.parameters.flowUrlPart2 == null) {
			this._flowurlpart2 = "";
		}
		else {
			this._flowurlpart2 = context.parameters.flowUrlPart2.raw == null ? "" : context.parameters.flowUrlPart2.raw;
		}


		//Preparar o elemento em tela e inclui o evento nele
		this._textElement = document.createElement("input");
		this._textElement.setAttribute("type", "text");
		this._textElement.addEventListener("change", this._textElementChanged);
		this._textElement.setAttribute("value", this._cnpjvalue);
		this._textElement.setAttribute("class", "InputText");
		this._textElement.value = this._cnpjvalue;
		
		//Prepara a ação lostfocus
		this._textElement.addEventListener("focusin", () => {
			this._textElement.className = "InputTextFocused";
		});
		this._textElement.addEventListener("focusout", () => {
			this._textElement.className = "InputText";
		});
		this._breakElement = document.createElement("br");
		this._labelElement = document.createElement("label");
		this._labelElement.setAttribute("border", "2");

		//Manda tudo para o campo que receberá o CNPJ
		this._container.appendChild(this._textElement);
		this._container.appendChild(this._breakElement);
		this._container.appendChild(this._labelElement);
	}

	public updateView(context: ComponentFramework.Context<IInputs>): void {
		let readOnly = this._context.mode.isControlDisabled;
		
		if (readOnly)
			this._textElement.readOnly = true;
		else
			this._textElement.readOnly = false;
	}

	public getOutputs(): IOutputs {
		return {
			CNPJProperty: this._cnpjvalue,
			bairro: this._bairrovalue,
			cidade: this._cidadeValue,
			cep: this._cepValue,
			logradouro: this._logradouroValue,
			numero: this._numeroValue,
			estado: this._estadoValue,
			pais: this._paisValue,
			razao_social: this._razaoSocialValue,
			nome_fantasia: this._nomeFantasiaValue,
			data_abertura: this._dataAberturaValue,
			email: this._emailValue,
			telefoneComercial: this._telefoneValue,
			CNAEcodigo: this._CnaeCodValue,
			CNAEdescricao: this._CnaeDesValue,
		};
	}

	public destroy(): void {
		this._textElement.removeEventListener("change", this._textElementChanged);
	}

	public cnpjchanged(evt: Event): void {
		this._cnpjvalue = this._textElement.value;	
		if (!this.validarCNPJ(this._cnpjvalue)) {
			this._labelElement.innerText = "CNPJ INVALIDO!!"
			this._textElement.value = "";
		}
		else {			
			// Formata o cpnj ##.###.###/###-###
			var exp = /\-|\.|\/|\(|\)| /g
			var auxValue = this._cnpjvalue.replace(exp, "");
			this._textElement.value = auxValue.substr(0, 2) + '.' + auxValue.substr(2, 3) + '.' + auxValue.substr(5, 3) + '/' + auxValue.substr(8, 4) + '-' + auxValue.substr(12, 2);
			this.callBizFlow(this._cnpjvalue);			
		}
		this._notifyOutputChanged();
	}

	private callBizFlow(cnpjOriginal : string): void {
		var _this = this;
		_this._labelElement.innerText = "Iniciando a Busca..";
		var msgBusca: string = "";			
		var data = JSON.stringify(
			{
				"cnpj": cnpjOriginal,
				"Biz_key": this._apiKey
			}			
		);
		var result = null;
		var req = new XMLHttpRequest();
		var url = this._flowurlpart1.concat(this._flowurlpart2);
		req.open("POST", url, true);
		req.setRequestHeader("OData-MaxVersion", "4.0");
		req.setRequestHeader("OData-Version", "4.0");
		req.setRequestHeader("Accept", "application/json");		
		req.setRequestHeader("Content-Type", "application/json; charset=utf-8");
		req.onreadystatechange = async function () {
			try {
				if (this.readyState === 4) {
					req.onreadystatechange = null;
					if (this.status === 200) {
						result = JSON.parse(this.responseText);
						_this._labelElement.innerText = "Busca realizada";
						_this._bairrovalue = result.endereco.bairro;
						_this._cepValue = result.endereco.cep;
						_this._logradouroValue = result.endereco.logradouro;
						_this._numeroValue = result.endereco.numero;
						_this._cidadeValue = result.endereco.cidade.nome;
						_this._estadoValue = result.endereco.estado.nome;
						_this._paisValue = result.endereco.pais.nome;
						_this._razaoSocialValue = result.razao_social;
						_this._nomeFantasiaValue = result.nome_fantasia;
						_this._dataAberturaValue = result.data_abertura;
						_this._emailValue = result.email;
						_this._telefoneValue = result.telefones[0].telefone;

						_this._CnaeCodValue = result.atividades.principal[0].codigo;
						_this._CnaeDesValue = result.atividades.principal[0].nome;

						_this._notifyOutputChanged();
					}
					else {
						_this._labelElement.innerText = "ERRO:" + this.responseText;
					}
				}
			}
			catch (e) {
				console.log("error catch");
			}
		};
		req.send(data);
	}

	private validarCNPJ(cnpj : string) {
	var numeros: any, digitos: any, soma: any, i: any, resultado: any, pos: any, tamanho: any, digitos_iguais: any;
	digitos_iguais = 1;
	var exp = /\-|\.|\/|\(|\)| /g
	var auxValue = cnpj.replace(exp, "");
	if (auxValue.length < 14 && auxValue.length < 15)
		return false;
		for (i = 0; i < auxValue.length - 1; i++)
			if (auxValue.charAt(i) != auxValue.charAt(i + 1)) {
			digitos_iguais = 0;
			break;
		}
	if (!digitos_iguais) {
		tamanho = auxValue.length - 2
		numeros = auxValue.substring(0, tamanho);
		digitos = auxValue.substring(tamanho);
		soma = 0;
		pos = tamanho - 7;
		for (i = tamanho; i >= 1; i--) {
			soma += numeros.charAt(tamanho - i) * pos--;
			if (pos < 2)
				pos = 9;
		}
		resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
		if (resultado != digitos.charAt(0))
			return false;
		tamanho = tamanho + 1;
		numeros = auxValue.substring(0, tamanho);
		soma = 0;
		pos = tamanho - 7;
		for (i = tamanho; i >= 1; i--) {
			soma += numeros.charAt(tamanho - i) * pos--;
			if (pos < 2)
				pos = 9;
		}
		resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
		if (resultado != digitos.charAt(1))
			return false;
		return true;
	} else
		return false;
	}

}