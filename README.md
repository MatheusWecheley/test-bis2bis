<h2>Olá, este é um repositorio referente a vaga de desenvolvedor back end!</h2>

### Para correta instalação e execução desse projeto, é recomendada ter globalmente instalado "node, npm, yarn" (O yarn nas versões mais recentes já suporta a execução do jest sem prévia configuração).

## Instalação
`npm install`

## Execução
`docker-compose build && docker-compose up -d`
# Documentação

<h3>Dependencias</h3>

* **Typescript**
* **NodeJs**
* **MongoDB**
* **Express**
* **Mongoose**
* **Docker**

## Docker

Para que possa iniciar a aplicação, é necessário utilizar o comando abaixo: <br>
`docker-compose build && docker-compose up -d` <br>

Após isso, a aplicação estará em execução. (Utilizando este comando, ele automaticamente executa `npm install && npm run dev`, sendo assim, instalando suas dependencias!)<br>

**IMPORTANTE - Aguarde até que a aplicação tenha seu carregamento concluido para poder fazer as requisições**.<br>

O servidor da aplicação ficará rodando nas variaveis locais informadas no projeto (.env)

## Requisições
 
  * /populate
  
  **Em primeira instância, deve-se acessar a rota /populate para que seja realizado o fetch na API fornecida no teste
  e popule o banco de dados com as informações.**
  
  * /universities <br>
  Nesta rotá onde sera possivel realizar as operações (CRUD) <br>
  
   * `GET` <br>
      Usando GET, retornará as 20 primeiras universidades de cada um dos países populados do banco. 
      * `Filter` <br>
      Permitido filtro de busca por pais e navegação de paginas. (limite de 20 por pagina) 
      Ex: `localhost:3000/universities?country=brazil&page=3` <br>
   * `GET:ID` <br>
      Retornando dados da busca da universidade pelo ID da mesma. Ex: `localhost:3000/universities/32381733823da`<br>
   * `POST` <br>
      Metodo para cadastro de Universidades, permitindo os campos (alpha_two_code, web_pages, name, country, domains, state-province). Não permitindo cadastrar outra         universidade com mesmo nome na mesma collection.
   * `PUT` <br>
      Buscando a universiade pelo ID e permitindo alterar os campos (web_pages, name, domains);
   * `DELETE` <br>
      Buscando a universidade pelo ID e permitindo DELETAR a mesma.    
      
  
  
