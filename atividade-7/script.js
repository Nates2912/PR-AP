function notas() {
    // 1. Pega a div de resultado e limpa qualquer texto antigo
    const resultadodiv = document.getElementById("resultado");
    resultadodiv.innerHTML = ""; 
    
    // --- VERIFICAÇÃO DA NOTA 1 ---
    const getnota1 = document.getElementById("nota1");
    let nota1 = parseFloat(getnota1.value);

    // Se for vazio, nulo, menor que 0 ou maior que 10...
    if(isNaN(nota1) || nota1 === null || nota1 < 0 || nota1 > 10 ) {
        resultadodiv.innerHTML += "<div class='linha-res' style='color:var(--detalhe-suave); border-left-color: var(--detalhe-suave);'>ERRO: Valor inválido na 1ª Nota!</div>";
        return; // Freia o código aqui
    }

    // --- VERIFICAÇÃO DA NOTA 2 ---
    const getnota2 = document.getElementById("nota2");
    let nota2 = parseFloat(getnota2.value);

    if(isNaN(nota2) || nota2 === null || nota2 < 0 || nota2 > 10 ) {
        resultadodiv.innerHTML += "<div class='linha-res' style='color:var(--detalhe-suave); border-left-color: var(--detalhe-suave);'>ERRO: Valor inválido na 2ª Nota!</div>";
        return;
    }

    // --- VERIFICAÇÃO DA NOTA 3 ---
    const getnota3 = document.getElementById("nota3");
    let nota3 = parseFloat(getnota3.value);

    if(isNaN(nota3) || nota3 === null || nota3 < 0 || nota3 > 10 ) {
        resultadodiv.innerHTML += "<div class='linha-res' style='color:var(--detalhe-suave); border-left-color: var(--detalhe-suave);'>ERRO: Valor inválido na 3ª Nota!</div>";
        return;
    }

    // --- CÁLCULO DA MÉDIA ---
    // Se o código chegou até aqui, significa que as três notas estão perfeitas!
    const media = (nota1 + nota2 + nota3) / 3;
    
    let statusTexto = "";
    let statusCor = "";

    // Verifica a situação do aluno
    if (media >= 7) {
        statusTexto = "APROVADO";
        statusCor = "var(--borda-suave)"; // Verde
    } 
    else if (media >= 5 && media < 7) {
        statusTexto = "EM RECUPERAÇÃO";
        statusCor = "var(--azul-suave)"; // Azul
    } 
    else {
        statusTexto = "REPROVADO";
        statusCor = "var(--detalhe-suave)"; // Coral
    }

    // Mostra o resultado final na tela
    resultadodiv.innerHTML = `
        <div class="linha-res"><strong>MÉDIA:</strong> ${media.toFixed(1)}</div>
        
        <div class="linha-res" style="border-left-color: ${statusCor};">
            <strong>SITUAÇÃO:</strong> 
            <span style="color: ${statusCor}; font-weight: bold;">${statusTexto}</span>
        </div>
    `;
}