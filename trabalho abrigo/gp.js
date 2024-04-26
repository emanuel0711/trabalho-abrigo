const readline = require('readline-sync');

// Array para armazenar os abrigos
let abrigos = [];

// Função para exibir o menu
function exibirMenu() {
    console.log("================ ABRIGOS TEMPORÁRIOS ================");
    console.log("1. Cadastrar abrigo");
    console.log("2. Listar abrigos");
    console.log("3. Procurar abrigo");
    console.log("4. Sair");
    console.log("=======================================================");
}

// Função para cadastrar um abrigo
function cadastrarAbrigo() {
    console.log("\n===== CADASTRO DE ABRIGO =====");
    let nome = readline.question("Nome do abrigo: ");
    let endereco = readline.question("Endereço: ");
    let telefone = readline.question("Telefone: ");
    let capacidade = readline.question("Capacidade de lotação: ");
    let cidade = readline.question("Cidade: ");
    
    let abrigo = {
        nome: nome,
        endereco: endereco,
        telefone: telefone,
        capacidade: capacidade,
        cidade: cidade
    };
    
    abrigos.push(abrigo);
    console.log("Abrigo cadastrado com sucesso!\n");
}

// Função para listar os abrigos
function listarAbrigos() {
    console.log("\n------------------- LISTAGEM DE ABRIGOS -------------------");
    
    if (abrigos.length === 0) {
        console.log("Nenhum abrigo cadastrado.\n");
    } else {
        for (let i = 0; i < abrigos.length; i++) {
            console.log(`CÓDIGO: ${i} | NOME: ${abrigos[i].nome} | CIDADE: ${abrigos[i].cidade}`);
        }
        console.log("-----------------------------------------------------------\n");
    }
}

// Função para procurar abrigo por cidade
function procurarAbrigoPorCidade() {
    console.log("\n===== PROCURAR ABRIGO POR CIDADE =====");
    let cidade = readline.question("Qual cidade você está? ");
    
    let abrigosEncontrados = [];

    for (let i = 0; i < abrigos.length; i++) {
        if (abrigos[i].cidade.toLowerCase() === cidade.toLowerCase()) {
            abrigosEncontrados.push(abrigos[i]);
        }
    }
    
    if (abrigosEncontrados.length === 0) {
        console.log("Nenhum abrigo encontrado para esta cidade.\n");
    } else {
        console.log("\n------------------- ABRIGOS ENCONTRADOS -------------------");
        
        for (let i = 0; i < abrigosEncontrados.length; i++) {
            console.log(`CÓDIGO: ${i} | NOME: ${abrigosEncontrados[i].nome} | TELEFONE: ${abrigosEncontrados[i].telefone}`);
        }
        
        console.log("-----------------------------------------------------------\n");
    }
}

// Função principal para executar o programa
function main() {
    let continua = true;

    while (continua) {
        exibirMenu();
        let opcao = readline.question("Escolha uma opção: ");
        
        switch (opcao) {
            case '1':
                cadastrarAbrigo();
                break;
            case '2':
                listarAbrigos();
                break;
            case '3':
                procurarAbrigoPorCidade();
                break;
            case '4':
                console.log("Saindo do programa. Até logo!");
                continua = false;
                break;
            default:
                console.log("Opção inválida. Tente novamente.\n");
        }
    }
}

// Executa o programa
main();