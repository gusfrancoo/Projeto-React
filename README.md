<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Documentação do Projeto: Loja Online de Jogos</title>
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
        <li>Exibição e edição de informações do usuário.</li>
        <li>Histórico de compras.</li>
    </ul>

    <h3>1.2. Navegação</h3>
    <p>Navbar dinâmica que altera itens exibidos com base no status de login do usuário.</p>

    <h3>1.3. Catálogo de Jogos</h3>

    <h4>1.3.1. Visualização de Produtos</h4>
    <ul>
        <li>Lista de jogos disponíveis para compra.</li>
        <li>Funcionalidades de filtro e busca.</li>
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
        <li>Esquemas para usuários, jogos, e histórico de compras.</li>
    </ul>

    <h2>5. Testes</h2>
    <ul>
        <li>Testes unitários e de integração para componentes principais.</li>
        <li>Testes de interface para garantir a experiência do usuário.</li>
    </ul>

    <h2>6. Deploy e Manutenção</h2>
    <ul>
        <li>Estratégia de deploy contínuo.</li>
        <li>Monitoramento de performance e bugs.</li>
        <li>Plano de manutenção e atualizações regulares.</li>
    </ul>

</body>
</html>