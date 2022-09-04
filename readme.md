<h1> Criando API com node.js e express.js </h1>

<p> Esta aplicação foi desenvolvida com o intuito de fixar os estudos sobre express, rotas e CRUD. </p>
<p> Para testar a API utilizei o extensão do VS code REST client</p>
<p> Exercitei também a arquitetura MVC, organizando os arquivos previamente. </p>

<h2> Passo a passo </h2>
<hr>
<p>Para melhor aprendizado deixo descrito com minhas palavras como entendo o funcionamento de cada função, módulo, objeto global e etc.</p>

<p>Primeiro foi criado uma estrutura simples .json de cursos, este arquivo está localizado na pasta /database
Como boa prática foi criado um arquivo courses.js na pasta model para gerenciar o arquivo Json. 
Neste arquivo foram criadas funções que representam os métodos GET, POST e DELETE do HTTP.
Utilizei o módulo fs para possibilitar as alterações desejadas no arquivo json.
Utilizei o mótulo path para indicar o caminho do arquivo .json ao módulo fs.
Para gerar IDs universais foi utilizado o randomUUID = require("crypto").
<br>


As requisições (request) recebem informação de três formas:
<li>Body - sempre que quiser enviar dados para minha aplicação; </li>
<li>Params - /cursos/65401521022; </li>
<li>Query - /cursos/?id=51065
1502&value=201685323 </li>

</p>