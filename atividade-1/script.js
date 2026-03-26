function gerarTabuada() {
    //obtendo o numero do input no html
    const numeroInput = document.getElementById('numeroInput');
    let numero = parseInt (numeroInput.value);

    //elemento do html onde o resultdo sera exibido
    const resultadoDiv = document.getElementById('resultadoTabuada');
    resultadoDiv.innerHTML = ''; //limpa o resultado anterior

    //verificar se a entrada é um numero valido
    if (isNaN(numero) || numero === null || numero ==='') {
        resultadoDiv.innerHTML = '<p>Por favor, digite um número válido.</p>';
        return; //este comando sai da função se a entrada for invalida
    }

    //adicionando o titulo da tabuada
    resultadoDiv.innerHTML = `<h2>Tabuada do ${numero}</h2>`;

    //laço de repetição para gerar a tabuada do numero
    for (let i = 1; i <= 10; i++) {
        const resultado = numero * i;
        resultadoDiv.innerHTML += `<p>${numero} x ${i} = ${resultado}</p>`;
    }
}

const botaoGerar = document.getElementById('btnGerar');
botaoGerar.addEventListener('click', gerarTabuada);