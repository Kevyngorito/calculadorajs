function calculadora () {
    const operacao = Number(prompt('Escolha uma operação:\n 1 - Soma (+) \n 2 - Subtração (-) \n 3 - Multiplicação (*) \n 4 - Divisão real (/)\n 5 - Divisão inteira (%) \n 6 - Potenciação (**)'));


    //verifica se operação é DIFERENTE de number ou operação é  maior ou igual a 7
    if (!operacao || operacao >= 7){
        alert('Erro - OPERAÇÃO INVÁLIDA!');
        calculadora();
    }else{
            //Faz a leitura do teclado do usuário COMO STRING
    //Convertendo a digitação para número, usaremos o NUMBER()
    let n1 = Number(prompt('Insira o primeiro valor: '));
    let n2 = Number(prompt('Insira o segundo valor: '));

        //Verifica se as entradas n1 e n2 são números
    if (!n1 || !n2){
        alert('Erro - Parâmetros inválidos');
    }else {
        let resultado;

        function soma() {
            resultado = n1 + n2;
            //Utilização de templateStrings (``)
            alert(`${n1} + ${n2} = ${resultado}`); 
            novaOperacao();
            }
        
        function subtracao() {
            resultado = n1 - n2;
            //Utilização de templateStrings (``)
            alert(`${n1} - ${n2} = ${resultado}`); 
            novaOperacao();
            }
        
        function multiplicacao() {
            resultado = n1 * n2;
            //Utilização de templateStrings (``)
            alert(`${n1} * ${n2} = ${resultado}`); 
            novaOperacao();
            }
        
        function divisaoReal() {
            resultado = n1 / n2;
            //Utilização de templateStrings (``)
            alert(`${n1} / ${n2} = ${resultado}`); 
            novaOperacao();
            }
        
        function divisaoInteira() {
            resultado = n1 % n2;
            //Utilização de templateStrings (``)
            alert(`O resto da divisão entre ${n1} e ${n2} = ${resultado}`); 
            novaOperacao();
            }
        
        function potenciacao() {
            resultado = n1 ** n2;
            //Utilização de templateStrings (``)
            alert(`${n1} elevado a ${n2} é = ${resultado}`); 
            novaOperacao();
            }
        
    
        function novaOperacao() {
            var opcao = prompt('Deseja fazer outra operação ? \n 1 - sim \n 2 - Não ');
            if(opcao == 1) {
                calculadora();
            }else if (opcao == 2) {
                alert('Até logo, volte sempre.');
            }else{
                alert('Digite uma opção válida!');
                novaOperacao();
            }
        }
    
    }
    
    //validação da variável operação, para chamar a função desejada.

    /* 
    if (operacao == 1){
        soma();
        } else if (operacao == 2) {
            subtracao ();
        } else if (operacao == 3) {
            multiplicacao ();
        } else if (operacao == 4) {
            divisaoReal ();
        } else if (operacao == 5) {
            divisaoInteira ();
        } else if (operacao == 6) {
            potenciacao ();
        }
    }   */
    
    switch (operacao){
        case 1: 
            soma();
        break;
        case 2: 
            subtracao();
        break;
        case 3: 
            multiplicacao();
        break;
        case 4: 
            divisaoReal();
        break;
        case 5: 
            divisaoInteira();
        break;
        case 6: 
            potenciacao();
        break;
    }
  }

}  
calculadora();
