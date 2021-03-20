# Componente BIZ integrator
A função do componente é validar o CNPJ informado e coloca-lo no padrão: xx.xxx.xxx/xxxx-xx, se estiver correro buscará os dados de cliente na API BIZ:

https://cnpj.biz/app/api

* Antes de usar é preciso fazer o cadastro na API e obter a chave de autenticação


# Instalação
1 - Importar em seu Dynamics a solução Flow e nela obter a url para chamada do flow  (no fonte explico a razão disso).
  
![atl-text](https://github.com/maiconcesarvaz/BIZpcf/blob/master/ExemploConfig/urlFlow.JPG)  

2 - Via cmd navegar até a pasta do projeto e executar o seguinte comando: 

		npm install      
      
3 - Após isso logar no seu dynamics via linha de comando

		auth create --url https://SUAORG.crm2.dynamics.com

4 - Em seguida criar e publicar a solução no dynamics usando o seguinte comando

		pac pcf push --publisher-prefix SEUPREFIXO

5 - Criar uma nova solução ou adicionar a entidade desejada na solução criada e em seguida mapear os campos:

![atl-text](https://github.com/maiconcesarvaz/BIZpcf/blob/master/ExemploConfig/ConfigSolution.gif)

6 - Por ultimo, Salvar e publicar.

  
*Ficarei feliz em receber sugestões para resolver o problema com o Cors e com isso remover da solução o Flow, ou até mesmo dicas para melhorar o codigo.