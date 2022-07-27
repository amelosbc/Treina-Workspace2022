#  Padrões de Projetos na Prática com Java

Repositório com as implementações dos padrões de projeto explorados no Lab "Explorando Padrões de Projetos na Prática com Java". Especificamente, este projeto explorou alguns padrões usando o Spring Framework, são eles:
- Singleton
- Strategy/Repository
- Facade

# Recursos usados nesse projeto:
Guia para chamadas completas de metodos HTTP obtendo os devidos retornos:
https://jsonplaceholder.typicode.com/guide/

# ESQUEMA PARA TRAZER UM A CLASSE REPRESENTANDO JSON PRONTO DE ALGUM SCHEMA
http://www.Jsonschema2pojo.org

Gera o formado de um endereço em JSON  -   Usar a ferramenta acima para gerar uma classe java após dados json
https://viacep.com.br/


SWAGGER-UI  -  Gerador de documentação de app API. Expões a API de forma automatica. Para isso, segue procedimento:

	1) Acrescentar dependencia no POM:
<!-- OpenAPI/Swagger (adicionado manualmente) -->
<dependency>
	<groupId>org.springdoc</groupId>
	<artifactId>springdoc-openapi-ui</artifactId>
	<version>${openapi.version}</version>
</dependency>

	2) Criar API Rest
	3) Testar aplicação e ver a seguinte interface Swagger para visualizar a documentação da Api:
Localhost:8080/swagger-ui.html
Sera direcionado para uma página com as definições da Api.