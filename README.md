# Futebol Clube
<p>O projeto Futebol Clube consiste na criação de uma API que será consumida por um front-end já disponível. O objetivo é desenvolver um site informativo sobre partidas e classificações de futebol, utilizando Docker Compose para facilitar a integração entre o back-end e o front-end, juntamente com um banco de dados.</p>

![Captura de Tela 2024-09-16 às 14 52 18](https://github.com/user-attachments/assets/1769fcdf-88d4-4b1e-9e46-8b30c937b94a)

<p>Este projeto foi fundamental para entender como funciona a integração entre front-end e back-end, além de configurar a aplicação utilizando Docker Compose. A dockerização dos aplicativos, bem como a modelagem de dados com MySQL através do Sequelize, são aspectos-chave a serem explorados. O projeto Futebol Clube é uma excelente oportunidade para aprender sobre integração de sistemas, dockerização e desenvolvimento de APIs</p>

<h3>O que foi feito?</h3>
<ul>
    <li>Dockerização dos apps, incluindo network e volume.</li>
    <li>Modelagem de dados com MySQL através do Sequelize.</li>
    <li>Criação e associação de tabelas usando models do Sequelize.</li>
    <li>Construção de uma API REST com endpoints para consumir os models criados.</li>
    <li>Implementação de um CRUD com TypeScript, utilizando ORM.</li>
    <li>Desenvolvimento baseado em uma organização de fluxos.</li>
</ul>

<h3>Organização dos Requisitos</h3>
<ul>
    <li><strong>Fluxo 1 - Teams (Times):</strong> 5 requisitos obrigatórios.</li>
    <li><strong>Fluxo 2 - Users & Login (Pessoas usuárias e Autenticação):</strong> 7 requisitos obrigatórios.</li>
    <li><strong>Fluxo 3 - Matches (Partidas):</strong> 9 requisitos obrigatórios.</li>
    <li><strong>Fluxo 4 - Leaderboards (Placares):</strong> 7 requisitos obrigatórios.</li>
</ul>

<h3>Detalhes dos Fluxos</h3>
<ul>
    <li>Fluxo 1: Integração com Sequelize para Teams e testes.</li>
    <li>Fluxo 2: Implementação de usuários e autenticação.</li>
    <li>Fluxo 3: Gerenciamento de partidas e seus requisitos.</li>
    <li>Fluxo 4: Desenvolvimento de tabelas de classificação.</li>
</ul>

<h3>Comandos Úteis</h3>
<ul>
    <li>Limpar o cache do Docker:</li>
    <code>docker system prune -af</code>
    <code>docker image prune -a</code>
</ul>

