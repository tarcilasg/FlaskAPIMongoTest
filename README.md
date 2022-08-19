# Perguntas

## 1) Você acha que este código está estruturado, legível e escalável?

Acredito que a estrutura está confusa, pois os nomes das variáveis são repetidos em contextos diferentes, e em linguagens diferentes, dificultando a compreensão da lógica do código e suas funções para quem nunca utilizou nem software de banco de dados nem o framework escolhidos para esta aplicação.
Facilitaria a legibilidade do mesmo definir responsabilidades únicas para cada módulo da aplicação. O que também diz respeito sobre escalabilidades.
Um modo de escalar a aplicação seria criando uma Classe para instanciar novos objetos que populariam o banco de dados, definindo os atributos recebidos e os tipos de valores de cada chave de cada atributo.

## 2) O que você mudaria nos arquivos e na estrutura de pastas para melhorá-lo nesse sentido?

Como comentado na questão acima, organizar os arquivos conforme suas responsabilidades em módulos e pacotes estruturados facilitam o entendimento e compreensão da aplicação de modo mais eficaz.
Nomear e organizar os pacotes e módulos como já é de uso corrente na comunidade também podem facilitar e agilizar o desenvolvimento da aplicação quando de uso de outros desenvolvedores.
Como já pacificado pela comunidade, a estrutura da aplicação poderia compreender:

- um módulo específico para criar cada classe necessária à criação de tabelas para o banco de dados, suas constraints e validações necessárias tipando os valores a serem retornados por cada atributo do objeto;
- um módulo específico para se ocupar das rotas da API, via client;
- um módulo específico para a lógica em cada requisição HTML, seguindo as regras de CRUD e validando os dados recebidos, alterados, além das permissões para cada método de requisição com uso de tokens;
- um módulo específico para realizar as queries no banco de dados.

Para escalar mais a aplicação, cada módulo pode estar dentro de pacotes (apps) que receberão os módulos correspondentes conforme suas responsabilidades específicas, tendo como orientação os princípios da SOLID.

## 3) Quanto a arquitetura API e sua conteinerização, liste as brechas de segurança que você identificou neste código? Como você as resolveria?

A respeito da segurança, entendo que não é indicado deixar dados de um user do banco de dados exposto no environment. O ideal é criar um arquivo do tipo .env com os atributos obrigatórios para acessar o banco de dados. No arquivo docker-compose, portanto, lista-se apenas os atributos com valores genéricos fornecidos, geralmente, nas documentações disponíveis no hub de criação de imagens do próprio Docker.
Ainda sobre segurança, ter volumes do banco de dados compartilhados pode não ser uma boa estratégia durante o desenvolvimento da aplicação, pois o mesmo apenas garante que as informações nas tabelas do banco de dados se manterão pela conexão local.
Particularmente, não tive certeza se poderia alterar e incluir outras imagens para ver o banco de dados sem baixar um programa específico do Mongo DB. Talvez em um arquivo de texto sugerir libs e/ou frameworks para serem conteinerizados também. 
