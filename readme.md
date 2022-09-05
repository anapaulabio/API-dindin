<h1> Criando API com node.js e express.js </h1>

1. Esta aplicação foi desenvolvida com o intuito de fixar os estudos sobre express, rotas e CRUD. <br>
2. Para testar a API utilizei o extensão do VS code REST client.<br>
3. Exercitei também a arquitetura MVC, organizando os arquivos previamente.

<h2> Passo a passo </h2>
<hr>
<p>Para melhor aprendizado deixo descrito com minhas palavras como entendo o funcionamento de cada função, módulo, objeto global e etc.</p>

- Primeiro foi criado uma estrutura simples .json de cursos, este arquivo está localizado na pasta /database
Como boa prática foi criado um arquivo courses.js na pasta model para gerenciar o arquivo Json. 
Neste arquivo foram criadas funções que representam os métodos **GET**, **POST** e **DELETE** do HTTP.
Utilizei o módulo fs para possibilitar as alterações desejadas no arquivo json.
Utilizei o mótulo path para indicar o caminho do arquivo .json ao módulo fs.
Para gerar IDs universais foi utilizado o randomUUID = require("crypto"). O model será chamado pelo controller
<br><br>
- O **controller** é a camada intermediaria do MVC, que faz a comunicação com o model, o view e as routes. Ele ajuda a controlar os fluxos que acontecem dentro da API, que são as *requisições* e *respostas*.
No controler ficou definido a estrutura para a request e o response de cada rota. O controller será chamado pela rota.
<br>

As requisições (*request*) recebem informação de três formas:
1. **Body** -> sempre que quiser enviar dados para minha aplicação; 
2. **Params** -> /cursos/65401521022; 
3. **Query** -> /cursos/?id=510651502&value=201685323 
<br>

As rotas são os caminhos que as *responses* podem ser direcionadas de acordo com a URL. O arquivo em si indica o caminho de cada response no controller, disparando as suas funções. A rota será chamada pelo servidor (server.js).
