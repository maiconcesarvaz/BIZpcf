# Componente BIZ integrator
A função do componente é validar o CNPJ informado e colocá-lo no padrão: xx.xxx.xxx/xxxx-xx, se estiver correto buscará os dados de cliente na API BIZ:

https://cnpj.biz/microsoft-dynamics-365-integracao-dados-empresas-cnpj

* Antes de usar é preciso fazer o cadastro na API e obter a chave de autenticação


# Instalação no Dynamics 365

1 - Baixar a solução disponível no link abaixo, em seguida importar em seu Dynamics.
	https://github.com/maiconcesarvaz/BIZpcf/blob/master/CnpjBiz_2_2_0_managed.zip

2 - Criar uma nova solução ou adicionar a tabela desejada em uma solução criada, e em seguida mapear os campos conforme passos abaixo:
![atl-text](https://github.com/maiconcesarvaz/BIZpcf/blob/master/ExemploConfig/ConfigSolution.gif)

3- Por último, Salvar e publicar.
  


# Usando o projeto
1 - Via cmd navegar até a pasta do projeto e executar o seguinte comando: 

		npm install      
      
2 - Após isso logar no seu dynamics via linha de comando:

		auth create --url https://SUAORG.crm2.dynamics.com

3 - Em seguida criar e publicar a solução no dynamics usando o seguinte comando

		pac pcf push --publisher-prefix SEUPREFIXO
  
*Ficarei feliz em receber sugestões para resolver o problema com o Cors e com isso remover da solução o Flow, ou até mesmo dicas para melhorar o código.
