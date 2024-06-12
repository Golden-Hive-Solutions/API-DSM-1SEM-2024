[![Logo Golden Hive Solutions](https://iili.io/JjTNGN1.jpg)](https://iili.io/JjTNGN1.jpg)

<div align="center">
<h1>
<a  href="#bookmark_tabs-entregas-de-sprints">Entrega das Sprints</a> | <a  href="https://trello.com/b/AgDfKI0v/golden-hive-solutions">Trello</a> | <a  href="#bust_in_silhouette-user-stories">User Story</a> | <a  href="#triangular_flag_on_post-backlog-do-produto">Backlog do Produto</a> | <a  href="#chart_with_downwards_trend-gráfico-burndown-das-sprints">Burndown</a> | <a  href="#page_facing_up-wireframe">Wireframe</a> | <a  href="#busts_in_silhouette-equipe">Equipe</a> | <a  href="Requisitos de Cliente 1DSM - 2024-1.pdf">Requisitos</a>
</h1>
</div>

# :pencil: Sobre o Projeto

“Sistema web desenvolvido pela **Golden Hive Solutions**, com o propósito didático de apresentar a metodologia ágil **Scrum**. A aplicação inclui um formulário de avaliação e a geração de certificados. O foco do projeto foi criar uma plataforma intuitiva e acessível, atendendo às necessidades do usuário final.”

### Status do Projeto: Concluído ✔️

# :bookmark_tabs: Entregas de Sprints

Os entregáveis serão realizados conforme as datas previamente acordadas com o cliente, acompanhados de um relatório completo do progresso alcançado durante as sprints.

| Sprint  | Previsão de Entrega   | Status                      | Backlog das Sprints                                       | Retrospectiva das Sprints
| ------- | --------------------- | --------------------------------- | --------------------------------------------------------- | ------------------------------------------------------------- |
| :one:   | :calendar: 17/04/2024 | :green_square: Concluído          | :round_pushpin: [Ver Relatório](./misc/sprintbacklog1.md) | :round_pushpin: [Concluído](./misc/sprintretrospective1.md)   |
| :two:   | :calendar: 15/05/2024 | :green_square: Concluído          | :round_pushpin: [Ver Relatório](./misc/sprintbacklog2.md) | :round_pushpin: [Concluído](./misc/sprintretrospective2.md)   |
| :three: | :calendar: 12/06/2024 | :green_square: Concluído          | :round_pushpin: [Ver Relatório](./misc/sprintbacklog3.md) | :round_pushpin: [Concluído](./misc/sprintretrospective3.md)   |

# :triangular_flag_on_post: Backlog do Produto

| Prioridade | Task                                      | User Story                                                   | Definition of Done                                                                                                                                                                     |
|------------|-------------------------------------------|--------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Alta :red_square:       | Cadastro de Usuário                      | Como cliente, desejo que meus colaboradores possam se cadastrar no sistema fornecendo seus nomes completos e e-mails.   | ► Formulário de cadastro com campos para nome completo e e-mail. <br>► Validação dos campos de entrada. <br>► Armazenamento dos dados do colaborador no banco de dados. <br>► Mensagem de confirmação após o cadastro bem-sucedido. |
| Alta :red_square:       | Login de Usuário                         | Como cliente, desejo que meus colaboradores possam fazer login no sistema usando apenas seus e-mails.                    | ► Campo de entrada para e-mail. <br>► Validação do e-mail. <br>► Verificação da existência do e-mail no banco de dados. <br>► Autenticação bem-sucedida para colaboradores cadastrados.            |
| Alta :red_square:       | Navegação no Portal                     | Como cliente, desejo um mecanismo de navegação comum para que meus colaboradores possam acessar as diferentes seções do portal. | ► Presença de um menu de navegação em todas as páginas. <br>► Links no menu que levam às seções correspondentes.                                                                         |
| Média :yellow_square:       | Cadastro de Questões                    | Como cliente, desejo que a equipe de desenvolvimento cadastre 50 questões com apenas uma alternativa correta, dentre duas opções, referentes aos temas abordados no portal. | ► Formulário para inserção de questões, suas alternativas e a resposta correta. <br>► Armazenamento das questões no banco de dados. <br>► Validar o número exato de 50 questões cadastradas no banco de dados para a avaliação final. |
| Média :yellow_square:       | Geração de Teste Aleatório              | Como cliente, desejo que meus colaboradores possam gerar uma página com 20 questões aleatórias do banco de dados após efetuarem o login. | ► Geração aleatória de 20 questões. <br>► Exibição das questões em uma página dedicada. <br>► Disponibilidade da página apenas para colaboradores autenticados.                               |
| Média :yellow_square:       | Avaliação de Usuário                    | Como cliente, desejo que meus colaboradores possam responder às questões do teste e receber um score correspondente.     | ► Resposta às questões apresentadas. <br>► Cálculo do score baseado nas respostas corretas. <br>► Exibição do score após a conclusão do teste.                                                  |
| Baixa :green_square:       | Feedback de Avaliação                   | Como cliente, desejo que meus colaboradores recebam feedback sobre seu desempenho no teste.                             | ► Feedback imediato após a conclusão do teste. <br>► Opção de reiniciar o teste em caso de score inferior a 70%. <br>► Disponibilização permanente do certificado após obter score igual ou superior a 70%.                                                  |
| Alta :red_square:      | Documentação no GitHub                  | Como equipe de desenvolvimento, desejo documentar o projeto no GitHub conforme as diretrizes estabelecidas.            | ► Criação de repositório contendo código fonte de cada sprint. <br>► Descrição detalhada do projeto. <br>► Link para cada entrega de sprint. <br>► Backlog do produto e de cada sprint. <br>► Requisitos do cliente (user stories). <br>► Prints das telas ou link para o portal. <br>► Burndown de cada sprint. <br>► Tecnologias utilizadas e membros da equipe. |
| Alta :red_square:      | Integração Trello-GitHub                | Como equipe de desenvolvimento, desejo integrar o Trello ao GitHub para gerenciar o backlog do produto.               | ► Utilização do Trello para gerenciar o backlog do produto. <br>► Adição de links para problemas do GitHub em cada cartão no Trello. <br>► Movimentação dos cartões conforme o progresso das tarefas. <br>► Adição de links do pull request ao cartão no Trello. <br>► Monitoramento do progresso das tarefas no Trello. |
| Alta :red_square:      | Tecnologias Utilizadas                  | Como equipe de desenvolvimento, desejo utilizar as tecnologias especificadas para o desenvolvimento do sistema.      | ► Utilização de JavaScript no front end e back end. <br>► Utilização de HTML e CSS para marcação e estilos. <br>► Visual responsivo utilizando CSS media queries. <br>► Prototipação de telas no Figma. <br>► Persistência dos dados no SGBD PostgreSQL. |

# :chart_with_downwards_trend: Gráfico Burndown das Sprints

| Burndown    | Link de Acesso |
|--------------------------------------------|--------------------------------------------------------------|
| :green_square: Sprint 1 (Concluída)        | :round_pushpin: [Ver Relatório](/documentos/GBS1.jpg)        |
| :green_square: Sprint 2 (Concluída)        | :round_pushpin: [Ver Relatório](/documentos/GBS2.jpg)        |
| :green_square: Sprint 3 (Concluída)        | :round_pushpin: [Ver Relatório](/documentos/GBS3.png)        |

# :bust_in_silhouette: User Stories

| Ator                     | Ação                                                                                                                                              | Motivo                                                                                                                                                           |
|--------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Como Cliente quero      | que meus colaboradores acessem um site minimalista que explique de forma didática os princípios e valores do Scrum, os papéis do Scrum, os artefatos do Scrum, os eventos do Scrum, o framework de trabalho do Scrum, as técnicas e ferramentas do Scrum, e a cultura e mindset ágil. | Para que eles compreendam os conceitos fundamentais do Scrum e iniciem o aprendizado sobre essa metodologia ágil de desenvolvimento de software.                          |
| Como Cliente quero      | que meus colaboradores naveguem facilmente entre as diferentes seções do portal através de um menu de navegação presente em todas as páginas.                           | Para que eles acessem rapidamente as informações sobre os diferentes aspectos do Scrum sem dificuldades de navegação.                                         |
| Como Cliente quero      | que meus colaboradores se cadastrem no sistema informando apenas o nome completo e um endereço de e-mail.                                                                               | Para que eles tenham acesso ao conteúdo exclusivo do portal e participem das avaliações sobre os temas abordados no Scrum.                                                   |
| Como Cliente quero      | que meus colaboradores façam login usando apenas o endereço de e-mail.                                                                                                           | Para que eles acessem a conta de forma rápida, sem a necessidade de memorizar outro nome de usuário ou senha.                                                |
| Como Cliente quero      | que meus colaboradores façam um teste com 20 questões aleatórias ("verdadeiro ou falso", com apenas uma única resposta correta) para verificar se entenderam o conteúdo apresentado.                             | Para avaliar o conhecimento deles sobre os princípios e práticas do Scrum e identificar áreas que precisam de reforço ou aprimoramento.              |
| Como Usuário quero      | receber meu score (0 a 100%) após responder as questões.                                                                                          | Para entender o meu desempenho na avaliação e identificar áreas que precisam de mais estudo e compreensão.                                                      |
| Como Usuário quero      | ter a opção de reiniciar a avaliação caso meu score seja inferior a 70%.                                                                         | Para ter uma segunda chance de realizar a avaliação e melhorar meu desempenho, caso não tenha alcançado a pontuação mínima.                                      |
| Como Usuário quero      | ter acesso permanente ao certificado caso meu score seja igual ou superior a 70%.                                                                | Para comprovar minha compreensão dos conceitos do Scrum e utilizar o certificado como prova de meu conhecimento na metodologia.                                 |
| Como Usuário quero      | visualizar permanentemente as questões do teste junto com o valor da correção caso meu score seja igual ou superior a 70%.                          | Para revisar as questões e entender as respostas corretas, reforçando meu aprendizado e preparação para futuras avaliações.                                     |
| Como Professor quero      | que a equipe de desenvolvimento faça um vídeo para apresentar o wireframe do site e suas funcionalidades.                          | Para que eu possa ter uma visão clara e detalhada do layout e das características do site, facilitando o entendimento e a utilização do sistema.                                     |

## :wrench: Tecnologias Utilizadas

![Figma](https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white) ![WhatsApp](https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white) ![VsCode](https://img.shields.io/badge/Visual_Studio-5C2D91?style=for-the-badge&logo=visual%20studio&logoColor=white) ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white) ![Photoshop](https://img.shields.io/badge/adobe%20photoshop-%2331A8FF.svg?style=for-the-badge&logo=adobe%20photoshop&logoColor=white) ![Trello](https://img.shields.io/badge/Trello-0052CC?style=for-the-badge&logo=trello&logoColor=white) ![Github](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white) ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![Postgre](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)

## :page_facing_up: Wireframe

[![Wireframe](./prototipagem/Protótipo%20do%20Wireframe.png)](./prototipagem/Protótipo%20do%20Wireframe.png)
<h2><a  href="/prototipagem/">► Clique Aqui para Acessar Todas as Páginas do Wireframe ◄</a></h2>

## :busts_in_silhouette: Equipe

| Função        | Nome                               | GitHub                                                                                                                                        |
| ------------- | ---------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| Project Owner | Victor Hugo Dantas Carbajo         | [![Github](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Victor-Carbajo)    |
| Scrum Master  | Lucas Roque Alvim Cruz             | [![Github](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/lucasroqe)         |
| Dev Team      | Gabriel Lima Cavalcante de Souza   | [![Github](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/GabrielLimaDSM)    |
| Dev Team      | Kainé Rogers de Moura Sant'anna    | [![Github](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Usahime)           |
| Dev Team      | Vinícius de Luca Fujarra de Souza  | [![Github](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/befujarra)         |
| Dev Team      | Marcos Paulo de Souza              | [![Github](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://www.github.com/marcospaulo27) |
| Dev Team      | Maurício Oliveira Medeiros Cepinho | [![Github](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/maucepinho)        |
| Dev Team      | Gabriel Rodrigues de Paula         | [![Github](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/gabriel0067)       |

##### [:rocket: Voltar ao topo ](#bookmark_tabs-entregas-de-sprints)
