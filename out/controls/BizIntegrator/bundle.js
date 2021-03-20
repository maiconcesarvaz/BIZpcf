var pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./BizIntegrator/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./BizIntegrator/index.ts":
/*!********************************!*\
  !*** ./BizIntegrator/index.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {\n  function adopt(value) {\n    return value instanceof P ? value : new P(function (resolve) {\n      resolve(value);\n    });\n  }\n\n  return new (P || (P = Promise))(function (resolve, reject) {\n    function fulfilled(value) {\n      try {\n        step(generator.next(value));\n      } catch (e) {\n        reject(e);\n      }\n    }\n\n    function rejected(value) {\n      try {\n        step(generator[\"throw\"](value));\n      } catch (e) {\n        reject(e);\n      }\n    }\n\n    function step(result) {\n      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);\n    }\n\n    step((generator = generator.apply(thisArg, _arguments || [])).next());\n  });\n};\n\nvar __generator = this && this.__generator || function (thisArg, body) {\n  var _ = {\n    label: 0,\n    sent: function sent() {\n      if (t[0] & 1) throw t[1];\n      return t[1];\n    },\n    trys: [],\n    ops: []\n  },\n      f,\n      y,\n      t,\n      g;\n  return g = {\n    next: verb(0),\n    \"throw\": verb(1),\n    \"return\": verb(2)\n  }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function () {\n    return this;\n  }), g;\n\n  function verb(n) {\n    return function (v) {\n      return step([n, v]);\n    };\n  }\n\n  function step(op) {\n    if (f) throw new TypeError(\"Generator is already executing.\");\n\n    while (_) try {\n      if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n      if (y = 0, t) op = [op[0] & 2, t.value];\n\n      switch (op[0]) {\n        case 0:\n        case 1:\n          t = op;\n          break;\n\n        case 4:\n          _.label++;\n          return {\n            value: op[1],\n            done: false\n          };\n\n        case 5:\n          _.label++;\n          y = op[1];\n          op = [0];\n          continue;\n\n        case 7:\n          op = _.ops.pop();\n\n          _.trys.pop();\n\n          continue;\n\n        default:\n          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {\n            _ = 0;\n            continue;\n          }\n\n          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {\n            _.label = op[1];\n            break;\n          }\n\n          if (op[0] === 6 && _.label < t[1]) {\n            _.label = t[1];\n            t = op;\n            break;\n          }\n\n          if (t && _.label < t[2]) {\n            _.label = t[2];\n\n            _.ops.push(op);\n\n            break;\n          }\n\n          if (t[2]) _.ops.pop();\n\n          _.trys.pop();\n\n          continue;\n      }\n\n      op = body.call(thisArg, _);\n    } catch (e) {\n      op = [6, e];\n      y = 0;\n    } finally {\n      f = t = 0;\n    }\n\n    if (op[0] & 5) throw op[1];\n    return {\n      value: op[0] ? op[1] : void 0,\n      done: true\n    };\n  }\n};\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.BizIntegrator = void 0;\n\nvar BizIntegrator =\n/** @class */\nfunction () {\n  function BizIntegrator() {}\n\n  BizIntegrator.prototype.init = function (context, notifyOutputChanged, state, container) {\n    var _this_1 = this; // Add control initialization code\n\n\n    this._context = context;\n    this._container = container;\n    this._notifyOutputChanged = notifyOutputChanged;\n    this._textElementChanged = this.cnpjchanged.bind(this);\n    this._cnpjvalue = \"\";\n    this._bairrovalue = \"\"; //Joga o valor do campo cnpj para a variavel _cnpjvalue\n\n    if (context.parameters.CNPJProperty == null) {\n      this._cnpjvalue = \"\";\n    } else {\n      this._cnpjvalue = context.parameters.CNPJProperty.raw == null ? \"\" : context.parameters.CNPJProperty.raw;\n    } //Joga o valor do campo APIkey para a variavel _apiKey\n\n\n    if (context.parameters.apiBIZkey == null) {\n      this._apiKey = \"\";\n    } else {\n      this._apiKey = context.parameters.apiBIZkey.raw == null ? \"\" : context.parameters.apiBIZkey.raw;\n    } //Tive dois problemas aqui:\n    //O primeiro foi relacionado ao CORs, não consegui contornar de nenhuma forma via codigo, \n    //até contactei forencedor do API para verificar se as configurações CORs estavam corretas segundo o mesmo estava liberado (*)\n    //Nesse caso a solução foi incluir a chamada via Flow, contornando assim esse problema.\n    //Assim que inserir o Flow, bati em um bug da MS, o imput aceite cerca de 4mil caracteres, mas devido ao bug está limitado a apenas 160\n    //o que me forcou a segunda solução de contorno, dividir a url em duas (não ficou legal mas....)\n    //ref do bug https://powerusers.microsoft.com/t5/Power-Apps-Pro-Dev-ISV/Problem-with-maximum-length-of-Input-parameters-which-are-of/m-p/290869#M242\n    //Joga o valor do campo APIkey para a variavel _apiKey1\n\n\n    if (context.parameters.flowUrlPart1 == null) {\n      this._flowurlpart1 = \"\";\n    } else {\n      this._flowurlpart1 = context.parameters.flowUrlPart1.raw == null ? \"\" : context.parameters.flowUrlPart1.raw;\n    } //Joga o valor do campo APIkey para a variavel _apiKey2\n\n\n    if (context.parameters.flowUrlPart2 == null) {\n      this._flowurlpart2 = \"\";\n    } else {\n      this._flowurlpart2 = context.parameters.flowUrlPart2.raw == null ? \"\" : context.parameters.flowUrlPart2.raw;\n    } //Preparar o elemento em tela e inclui o evento nele\n\n\n    this._textElement = document.createElement(\"input\");\n\n    this._textElement.setAttribute(\"type\", \"text\");\n\n    this._textElement.addEventListener(\"change\", this._textElementChanged);\n\n    this._textElement.setAttribute(\"value\", this._cnpjvalue);\n\n    this._textElement.setAttribute(\"class\", \"InputText\");\n\n    this._textElement.value = this._cnpjvalue; //Prepara a ação lostfocus\n\n    this._textElement.addEventListener(\"focusin\", function () {\n      _this_1._textElement.className = \"InputTextFocused\";\n    });\n\n    this._textElement.addEventListener(\"focusout\", function () {\n      _this_1._textElement.className = \"InputText\";\n    });\n\n    this._breakElement = document.createElement(\"br\");\n    this._labelElement = document.createElement(\"label\");\n\n    this._labelElement.setAttribute(\"border\", \"2\"); //Manda tudo para o campo que receberá o CNPJ\n\n\n    this._container.appendChild(this._textElement);\n\n    this._container.appendChild(this._breakElement);\n\n    this._container.appendChild(this._labelElement);\n  };\n\n  BizIntegrator.prototype.updateView = function (context) {\n    var readOnly = this._context.mode.isControlDisabled;\n    if (readOnly) this._textElement.readOnly = true;else this._textElement.readOnly = false;\n  };\n\n  BizIntegrator.prototype.getOutputs = function () {\n    return {\n      CNPJProperty: this._cnpjvalue,\n      bairro: this._bairrovalue,\n      cidade: this._cidadeValue,\n      cep: this._cepValue,\n      logradouro: this._logradouroValue,\n      estado: this._estadoValue,\n      pais: this._paisValue,\n      razao_social: this._razaoSocialValue,\n      nome_fantasia: this._nomeFantasiaValue,\n      data_abertura: this._dataAberturaValue,\n      email: this._emailValue,\n      telefoneComercial: this._telefoneValue\n    };\n  };\n\n  BizIntegrator.prototype.destroy = function () {\n    this._textElement.removeEventListener(\"change\", this._textElementChanged);\n  };\n\n  BizIntegrator.prototype.cnpjchanged = function (evt) {\n    this._cnpjvalue = this._textElement.value;\n\n    if (!this.validarCNPJ(this._cnpjvalue)) {\n      this._labelElement.innerText = \"CNPJ INVALIDO!!\";\n      this._textElement.value = \"\";\n    } else {\n      // Formata o cpnj ##.###.###/###-###\n      var exp = /\\-|\\.|\\/|\\(|\\)| /g;\n\n      var auxValue = this._cnpjvalue.replace(exp, \"\");\n\n      this._textElement.value = auxValue.substr(0, 2) + '.' + auxValue.substr(2, 3) + '.' + auxValue.substr(5, 3) + '/' + auxValue.substr(8, 4) + '-' + auxValue.substr(12, 2);\n      this.callBizFlow(this._cnpjvalue);\n    }\n\n    this._notifyOutputChanged();\n  };\n\n  BizIntegrator.prototype.callBizFlow = function (cnpjOriginal) {\n    var _this = this;\n\n    _this._labelElement.innerText = \"Iniciando a Busca..\";\n    var msgBusca = \"\";\n    var data = JSON.stringify({\n      \"cnpj\": cnpjOriginal,\n      \"Biz_key\": this._apiKey\n    });\n    var result = null;\n    var req = new XMLHttpRequest();\n\n    var url = this._flowurlpart1.concat(this._flowurlpart2);\n\n    req.open(\"POST\", url, true);\n    req.setRequestHeader(\"OData-MaxVersion\", \"4.0\");\n    req.setRequestHeader(\"OData-Version\", \"4.0\");\n    req.setRequestHeader(\"Accept\", \"application/json\");\n    req.setRequestHeader(\"Content-Type\", \"application/json; charset=utf-8\");\n\n    req.onreadystatechange = function () {\n      return __awaiter(this, void 0, void 0, function () {\n        return __generator(this, function (_a) {\n          try {\n            if (this.readyState === 4) {\n              req.onreadystatechange = null;\n\n              if (this.status === 200) {\n                result = JSON.parse(this.responseText);\n                _this._labelElement.innerText = \"Busca realizada\";\n                _this._bairrovalue = result.endereco.bairro;\n                _this._cepValue = result.endereco.cep;\n                _this._logradouroValue = result.endereco.logradouro + \",\" + result.endereco.numero;\n                _this._cidadeValue = result.endereco.cidade.nome;\n                _this._estadoValue = result.endereco.estado.nome;\n                _this._paisValue = result.endereco.pais.nome;\n                _this._razaoSocialValue = result.razao_social;\n                _this._nomeFantasiaValue = result.nome_fantasia;\n                _this._dataAberturaValue = result.data_abertura;\n                _this._emailValue = result.email;\n                _this._telefoneValue = result.telefones[0].telefone;\n\n                _this._notifyOutputChanged();\n              } else {\n                _this._labelElement.innerText = \"ERRO:\" + this.responseText;\n              }\n            }\n          } catch (e) {\n            console.log(\"error catch\");\n          }\n\n          return [2\n          /*return*/\n          ];\n        });\n      });\n    };\n\n    req.send(data);\n  };\n\n  BizIntegrator.prototype.validarCNPJ = function (cnpj) {\n    var numeros, digitos, soma, i, resultado, pos, tamanho, digitos_iguais;\n    digitos_iguais = 1;\n    if (cnpj.length < 14 && cnpj.length < 15) return false;\n\n    for (i = 0; i < cnpj.length - 1; i++) if (cnpj.charAt(i) != cnpj.charAt(i + 1)) {\n      digitos_iguais = 0;\n      break;\n    }\n\n    if (!digitos_iguais) {\n      tamanho = cnpj.length - 2;\n      numeros = cnpj.substring(0, tamanho);\n      digitos = cnpj.substring(tamanho);\n      soma = 0;\n      pos = tamanho - 7;\n\n      for (i = tamanho; i >= 1; i--) {\n        soma += numeros.charAt(tamanho - i) * pos--;\n        if (pos < 2) pos = 9;\n      }\n\n      resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;\n      if (resultado != digitos.charAt(0)) return false;\n      tamanho = tamanho + 1;\n      numeros = cnpj.substring(0, tamanho);\n      soma = 0;\n      pos = tamanho - 7;\n\n      for (i = tamanho; i >= 1; i--) {\n        soma += numeros.charAt(tamanho - i) * pos--;\n        if (pos < 2) pos = 9;\n      }\n\n      resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;\n      if (resultado != digitos.charAt(1)) return false;\n      return true;\n    } else return false;\n  };\n\n  return BizIntegrator;\n}();\n\nexports.BizIntegrator = BizIntegrator;\n\n//# sourceURL=webpack://pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad/./BizIntegrator/index.ts?");

/***/ })

/******/ });
if (window.ComponentFramework && window.ComponentFramework.registerControl) {
	ComponentFramework.registerControl('BizNamespace.BizIntegrator', pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad.BizIntegrator);
} else {
	var BizNamespace = BizNamespace || {};
	BizNamespace.BizIntegrator = pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad.BizIntegrator;
	pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad = undefined;
}