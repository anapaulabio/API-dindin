# Primeiros passos com Node.Js

O NodeJs é o ambiente de execução do JavaScript server-side e possui alta capacidade de escala;
Apenas uma thread é responsável por executar o código JavaScript da aplicação, chamada de Event Loop, e leva esse nome porque cada requisição é tratada como um evento;
O Event Loop fica em execução esperando novos eventos para tratar, e para cada requisição, um novo evento é criado;
As operações de entrada e saída (ex: acesso a banco de dados e leitura de arquivos do sistema) são assíncronas e não bloqueiam a thread. Diferentemente dos servidores tradicionais, a thread não fica esperando que essas operações sejam concluídas para continuar sua execução.

# Vantagens do Node.Js

O NPM (Node Package Manager) é o gerenciador de pacotes do Node.js e também é o maior repositório de softwares do mundo.
O pacote mais conhecido se chama Express.js e é um framework completo para desenvolvimento de aplicações Web.
Tanto sua leveza quanto flexibilidade fazem do Node.JS uma tecnologia indicada para a implementação de serviços e componentes de arquiteturas como a de microsserviços e serverless.
Servidores - protocolo - Cliente
Fazem parte do padrão Cliente/servidor;
Tem a função de dar respostas a solicitações feitas por meio das requisições;
Pode ser utilizado como API: Devolve dados puros para outra aplicação;
O HTTP - Hipertext Transfer Protocol realiza a troca de informações entre cliente e servidor;
Precisamos usar o NPM para gerenciar o nosso projeto. Ele consegue informar o que o projeto precisa para rodar e passar informações. Para iniciar um projeto node usamos o npm init;

Require é uma maneira de chamar módulos nativos do NodeJs. Função require() só funciona com um argumento e o seu argumento é o módulo --> O módulo é uma biblioteca externa. Podemos criar um módulo utilizando objeto global module.exports =

createServer() é utilizada para criar um servidor --> Ele recebe uma requisição e envia a resposta através de uma callback.

Uma função serve para guardar algumas instruções para serem executadas posteriormente. Logo uma API é uma função que vai ser executada assim que ela receber uma requisição HTTP.

request recebe todas as informações do cliente; response fica pré-moldado e montamos a resposta para enviar pro cliente;

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
