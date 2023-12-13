<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
    <h1>Documentação do Projeto: Loja Online de Jogos</h1>
    <h2>Visão Geral</h2>
    <p>Este projeto consiste em uma loja online responsiva para a venda e compra de jogos. O site oferece funcionalidades como criação de produto, integração com API para comunicação com o banco de dados, sistema de login/cadastro, e um sistema de compra online que vincula as aquisições ao perfil do usuário.</p>
    <h2>1. Funcionalidades</h2>
    <h3>1.1. Sistema de Contas de Usuário</h3>
    <h4>1.1.1. Cadastro</h4>
    <ul>
        <li>Interface para novo usuário criar uma conta.</li>
        <li>Campos: Nome de usuário, email, senha.</li>
        <li>Validação de entrada de dados.</li>
    </ul>
    <h4>1.1.2. Login</h4>
    <ul>
        <li>Interface para acesso à conta.</li>
        <li>Autenticação com nome de usuário e senha.</li>
        <li>Geração de token de autenticação.</li>
    </ul>
    <h4>1.1.3. Logout</h4>
    <ul>
        <li>Opção de sair da conta.</li>
        <li>Remoção do token do armazenamento local.</li>
    </ul>
    <h4>1.1.4. Perfil do Usuário</h4>
    <ul>
        <li>Exibição de informações do usuário.</li>
        <li>Histórico de compras.</li>
    </ul>
    <h3>1.2. Navegação</h3>
    <p>Navbar dinâmica que altera itens exibidos com base no status de login do usuário.</p>
    <h3>1.3. Catálogo de Jogos</h3>
    <h4>1.3.1. Visualização de Produtos</h4>
    <ul>
        <li>Lista de jogos disponíveis para compra.</li>
    </ul>
    <h4>1.3.2. Criação de Produto (para vendedores)</h4>
    <ul>
        <li>Interface para adicionar novos jogos ao catálogo.</li>
        <li>Formulário de submissão com detalhes do jogo.</li>
    </ul>
    <h3>1.4. Sistema de Compra</h3>
    <ul>
        <li>Processo de seleção e compra de jogos.</li>
        <li>Integração com métodos de pagamento online.</li>
        <li>Atualização automática do perfil do usuário com jogos adquiridos.</li>
    </ul>
    <h2>2. Design Responsivo</h2>
    <p>O site é otimizado para diferentes tamanhos de tela, incluindo dispositivos móveis. Layouts flexíveis e adaptáveis. Testes em diversos dispositivos para garantir a compatibilidade.</p>
    <h2>3. API e Banco de Dados</h2>
    <h3>3.1. API</h3>
    <ul>
        <li>A API gerencia a comunicação entre o front-end e o banco de dados.</li>
        <li>Endpoints para usuários, jogos, e transações.</li>
    </ul>
    <h3>3.2. Banco de Dados</h3>
    <ul>
        <li>Armazenamento seguro de dados de usuários e produtos.</li>
        <li>Esquemas para usuários, jogos.</li>
    </ul>
    <h2>4. Testes</h2>
    <ul>
        <li>Testes unitários e de integração para componentes principais.</li>
        <li>Testes de interface para garantir a experiência do usuário.</li>
    </ul>
<h1>Instruções de Execução do Projeto</h1>
    <p>Este documento fornece um guia passo a passo sobre como configurar e executar o projeto da loja online de jogos.</p>
    <h2>Requisitos Preliminares</h2>
    <ul>
        <li>VirtualBox - <a href="https://drive.google.com/file/d/1u2yw_XWb0o2zABNx-tQJfOI8skmwk21k/view?usp=sharing">Clique aqui para baixar a VirtualBox</a></li>
        <li>DBeaver - Ferramenta de gerenciamento de banco de dados</li>
        <li>Node.js e npm - Necessários para executar o projeto</li>
    </ul>
    <h2>Configuração do Ambiente</h2>
    <ol>
        <li>Instale e configure a VirtualBox em seu sistema.</li>
        <li>Abra o DBeaver e configure sua conexão com o banco de dados.</li>
        <li>Baixe e instale o Node.js (que inclui o npm) no seu sistema.</li>
    </ol>
    <h2>Execução do Projeto</h2>
    <ol>
        <li>Clone o repositório do projeto usando Git: <br>
            <code>git clone https://github.com/gusfrancoo/Projeto-API-DevWeb ou acesse o link <a href="https://github.com/gusfrancoo/Projeto-API-DevWeb">Link repositório API</a> </code>
        </li>
        <li>Navegue até o diretório do projeto e instale as dependências: <br>
            <code>cd caminho_para_projeto</code><br>
            <code>npm install</code>
        </li>
        <li>Execute a API e o servidor local: <br>
            <code>npm run dev</code>
        </li>
    </ol>
    <p>Após seguir estes passos, o projeto estará rodando localmente em seu computador, acessível através do navegador.</p>
</body>
</html>