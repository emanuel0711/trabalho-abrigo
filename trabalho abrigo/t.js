function exibirmenu(){
 
    console.log("===== ABRIGOS TEMPORÁRIOS =====")
    console.log("1. Cadastrar abrigo")
    console.log("2. Listar abrigos")
    console.log("3. Procurar abrigo")
    console.log("4. Sair")
    
    }

    let escopoglobal = []
    
    let readlineSync = require('readline-sync')
    
    function cadastroAbrigo() {
        console.log('\n ==== CADASTRO  DE ABRIGO ====')
        let nome = readlineSync.question("Nome do abrigo: ")
        let endereco = readlineSync.question("Endereço: ")
        let telefone = readlineSync.question("Telefone: ")
        let capacidade = readlineSync.question("Capacidade de lotação: ")
        let cidade = readlineSync.question('Cidade:')
        
        let abrigo = {
            nome: nome,
            endereco: endereco,
            telefone: telefone,
            capacidade:capacidade,
            cidade: cidade
        }
    }
    
    let pesquisa = readlineSync.question("Qual cidade você esta? ")
    
            //if(pesquisa === ABRIGOS[0].cidade1 || pesuisa === ABRIGOS[1].cidade2 || pesquisa === ABRIGO[2].cidade3 || pesuisa === ABRIGO[3].cidade4 || pesuisa === ABRIGO[4].cidade5){
        
            if(pesquisa.toUpperCase() === ABRIGOS[0].cidade1){ //CANOAS
                console.log("--------------------")
                console.log("LISTAGEM DE ABRIGOS:")
                console.log("--------------------")
                console.log("CÓDIGO |         NOME         |              ENDEREÇO              |   TELEFONE   |  CAPACIDADE | CIDADE")
                console.log("---------------------------------------------------------------------------------------------------------")
                console.log(` ${ABRIGOS[0].codigo1}   |    ${ABRIGOS[0].nome1}   |    ${ABRIGOS[0].endereço1}   | ${ABRIGOS[0].telefone1} |     ${ABRIGOS[0].capacidade1}      | ${ABRIGOS[0].cidade1}`)
                console.log(` ${ABRIGOS[3].codigo4}   |    ${ABRIGOS[3].nome4}     |  ${ABRIGOS[3].endereço4}     | ${ABRIGOS[3].telefone4} |     ${ABRIGOS[3].capacidade4}      | ${ABRIGOS[3].cidade4}`)
                console.log(`\n`)
            }
    function escolha(opçao){
        switch(opçao){
            case '1':
                cadastro(ABRIGOS)
                break;
    
            case '2':
                listagem()
                break
    
            case '3':
               pesquisas()
                break;
    
            case '4':
                console.log('Encerramento')
                return true;
            default:
                console.log()
    
        }
        return false
    }
    
    function main(){
    
    
        let encerrar = false
    
        while (!encerrar){
            exibirmenu()
            let opçao = readlineSync.question('Digite o número da opção desejada: ')
            encerrar = escolha(opçao)
        }
    }
    main()