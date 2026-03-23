function calcular() {
    // Busca os elementos de input pelo ID e pega o valor (.value)
    // parseFloat converte o texto do input em número decimal
    const n1 = parseFloat(document.getElementById('num1').value);
    const n2 = parseFloat(document.getElementById('num2').value);
    
    // Referência da div de resultados para podermos "escrever" nela
    const painel = document.getElementById('resultado');

    // Validação: isNaN verifica se o resultado da conversão NÃO é um número
    if (isNaN(n1) || isNaN(n2)) {
        painel.innerHTML = "<div class='linha-res' style='color:red'>ERRO: Preencha os dois campos!</div>";
        return; // Sai da função para não calcular nada errado
    }

    // Processamento dos dados
    const soma = n1 + n2;
    const media = soma / 2;
    const produto = n1 * n2;
    const maior = Math.max(n1, n2); // Retorna o maior entre os dois
    const menor = Math.min(n1, n2); // Retorna o menor entre os dois

    // Inserção dos dados no HTML
    // Usamos += se quiséssemos acumular, mas o = limpa o anterior e mostra o novo
    painel.innerHTML = `
        <div class="linha-res"><strong>MÉDIA:</strong> ${media}</div>
        <div class="linha-res"><strong>SOMA:</strong> ${soma}</div>
        <div class="linha-res"><strong>PRODUTO:</strong> ${produto}</div>
        <div class="linha-res"><strong>MAIOR:</strong> ${maior}</div>
        <div class="linha-res"><strong>MENOR:</strong> ${menor}</div>
    `;
}