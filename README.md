## ***Backlog do Produto - Aplicação Web de Instruções para Desenvolvimento de Projetos Ágeis (SCRUM)***

**Cadastro de Usuário**

> Como cliente, desejo que meus colaboradores se cadastrem na plataforma
> fornecendo o nome completo e e-mail para acessar os recursos
> disponíveis.

**Autenticação de Usuário**

> Como cliente, desejo que meus colaboradores façam login utilizando
> apenas o e-mail para acessar os recursos da plataforma.

**Navegação no Portal**

> Como cliente, desejo que meus colaboradores tenham acesso a um menu de
> navegação que permita acessar as diferentes seções do portal de forma
> intuitiva.

**Instruções sobre Princípios e Valores do Scrum**

> Como usuário, desejo acessar informações sobre os princípios e valores
> que fundamentam o Scrum para compreender sua filosofia e abordagem de
> desenvolvimento ágil.

**Instruções sobre Papéis do Scrum**

> Como usuário, desejo acessar informações sobre os diferentes papéis
> dentro do Scrum, incluindo Product Owner, Scrum Master e Time de
> Desenvolvimento, para compreender suas responsabilidades e interações.

**Instruções sobre Artefatos do Scrum**

> Como usuário, desejo acessar informações sobre os artefatos do Scrum,
> como o Backlog do Produto, Backlog da Sprint e Incremento de Produto,
> para entender como são utilizados no gerenciamento do trabalho e na
> manutenção da transparência do processo.

**Instruções sobre Eventos do Scrum**

> Como usuário, desejo acessar informações sobre os diferentes eventos
> do Scrum, como Sprint Planning, Daily Scrum, Sprint Review e Sprint
> Retrospective, para compreender seus propósitos e contribuições para o
> sucesso do projeto.

**Instruções sobre Framework de Trabalho do Scrum**

> Como usuário, desejo acessar informações sobre como o Scrum funciona
> como um framework de trabalho iterativo e incremental, e como as
> equipes podem utilizá-lo para desenvolver produtos de forma eficaz.

**Instruções sobre Técnicas e Ferramentas do Scrum**

> Como usuário, desejo acessar informações sobre as técnicas e
> ferramentas comumente utilizadas no Scrum, como estimativa do tamanho
> do backlog, técnicas de facilitação de reuniões e ferramentas de
> gestão de projetos ágeis.

**Instruções sobre Cultura e Mindset Ágil**

> Como usuário, desejo acessar informações sobre a cultura e mindset
> ágil, para desenvolver uma mentalidade ágil e compreender a
> importância da colaboração, adaptação, transparência e foco no valor
> do cliente para o sucesso do Scrum.

**Cadastro de Questões**

> Como cliente, desejo que a equipe de desenvolvimento cadastre 50 questões
> com apenas uma alternativa correta, dentre duas opções, referentes aos
> temas abordados no portal.

**Geração de Página com Questões Aleatórias**

> Como cliente, desejo que a equipe de desenvolvimento gere uma página
> com 20 questões aleatórias obtidas no banco de dados após meus
> colaboradores efetuarem o login.

**Avaliação do Usuário**

> Como cliente, desejo que meus colaboradores recebam um score baseado
> nas respostas fornecidas.

**Feedback de Score**

> Como cliente, desejo que meus colaboradores tenham a opção de reiniciar
> a avaliação se o score deles for inferior a 70%.

**Certificado de Conclusão**

> Como cliente, desejo que meus colaboradores recebam um certificado de
> conclusão quando o score deles for igual ou superior a 70%.

**Persistência de Dados**

> Como equipe de desenvolvimento, desejo persistir os dados da aplicação
> em um SGBD PostgreSQL para garantir a integridade e segurança dos
> dados dos usuários.

**Documentação no GitHub**

> Como equipe de desenvolvimento, desejo documentar o projeto no GitHub
> conforme especificado, para manter um registro claro do progresso e
> das funcionalidades implementadas.

**Integração entre Trello e GitHub**

> Como equipe de desenvolvimento, desejo integrar o Trello e o GitHub
> conforme especificado, para facilitar o gerenciamento do backlog do
> produto e acompanhar o progresso das tarefas de desenvolvimento.

**Prototipação de Telas no Figma**

> Como equipe de desenvolvimento, desejo criar protótipos de telas no
> Figma para visualizar e validar a interface do usuário antes da
> implementação.

**Visual Responsivo sem Frameworks de Estilização**

> Como equipe de desenvolvimento, desejo implementar uma interface
> visual responsiva utilizando CSS media queries sem o uso de frameworks
> de estilização para garantir uma experiência consistente em diferentes
> dispositivos.

| Prioridade | Task                                      | User Story                                                   | Critérios de Aceitação                                                                                                                                                                     |
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
