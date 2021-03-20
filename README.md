# Componente BIZ integrator
A fun��o do componente � validar o CNPJ informado e coloca-lo no padr�o: xx.xxx.xxx/xxxx-xx, se estiver correro buscar� os dados de cliente na API BIZ:

https://cnpj.biz/app/api

* Antes de usar � preciso fazer o cadastro na API e obter a chave de autentica��o


# Instala��o
1 - Importar em seu Dynamics a solu��o Flow e nela obter a url para chamada do flow  (no fonte explico a raz�o disso).
  
![atl-text](https://github.com/maiconcesarvaz/BIZpcf/blob/master/ExemploConfig/urlFlow.JPG)  

2 - Via cmd navegar at� a pasta do projeto e executar o seguinte comando: 

		npm install      
      
3 - Ap�s isso logar no seu dynamics via linha de comando

		auth create --url https://SUAORG.crm2.dynamics.com

4 - Em seguida criar e publicar a solu��o no dynamics usando o seguinte comando

		pac pcf push --publisher-prefix SEUPREFIXO

5 - Criar uma nova solu��o ou adicionar a entidade desejada na solu��o criada e em seguida mapear os campos:

![atl-text](https://github.com/maiconcesarvaz/BIZpcf/blob/master/ExemploConfig/ConfigSolution.gif)

6 - Por ultimo, Salvar e publicar.

  
*Ficarei feliz em receber sugest�es para resolver o problema com o Cors e com isso remover da solu��o o Flow, ou at� mesmo dicas para melhorar o codigo.