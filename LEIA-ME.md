#Componente BIZ integrator

a Função do componente é validar o CNPJ informado formatando-o xx.xxx.xxx/xxxx-xx, se o CNPJ estiver correro busca os dados de cliente na API BIZ:

https://cnpj.biz/webservice-api-receita-cnpj-empresa
https://cnpj.biz/app/api
Antes de usar é preciso fazer o cadastro na API e obter a chave de autenticação


#Como instalar
1 - Importar em seu Dynamics a solução Flow e nela obter a url para chamada do flow  (no fonte explico a razão disso).
2 - via cmd navegar até a pasta do projeto e executar o seguinte comando
	npm install

3 - ápós isso logar no seu dynamics via linha de comando
		pac auth create --url https://SUAORG.crm2.dynamics.com

4 - Em seguida criar e publicar a solução no dynamics usando o seguinte comando
		pac pcf push --publisher-prefix SEUPREFIXO

5 - Criar uma nova solução ou adicionar a entidade desejada na solução criada e em seguida mapear os campos conforme imagem na pasta exemplo config.


Ficarei feliz em receber sugestões para resolver o problema com o Cors, com isso remover da solução o Flow ou dicas para melhorar o codigo.