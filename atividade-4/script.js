// A função só executa quando o usuário clica no botão
function verificarVoto() {
    
    // --- 1. CAPTURA DE DADOS ---
    // Pegamos o valor do input 'idade'. parseInt converte texto em número inteiro.
    const idade = parseInt(document.getElementById('idade').value);
    
    // Pegamos a div de resultado para podermos escrever nela depois
    const painel = document.getElementById('resultado');

    // --- 2. VALIDAÇÃO (SEGURANÇA) ---
    // Se não for um número (NaN) ou for menor que zero, exibimos um erro
    if (isNaN(idade) || idade < 0) {
        painel.innerHTML = "<div class='linha-res' style='color:red; border-left-color: red;'>ERRO: Digite uma idade válida!</div>";
        return; // O 'return' para a execução aqui e não faz o resto
    }

    // Criamos variáveis vazias para preencher de acordo com a idade
    let mensagem = "";
    let corDestaque = "";

    // --- 3. LÓGICA DAS REGRAS (O CORAÇÃO DO SITE) ---
    
    if (idade < 16) {
        // Regra 1: Menores de 16 não podem votar no Brasil
        mensagem = "NÃO PODE VOTAR";
        corDestaque = "var(--texto-suave)";
    } 
    else if (idade >= 16 && idade <= 17) {
        // Regra 2: Entre 16 e 17 o voto é opcional (facultativo)
        mensagem = "VOTO OPCIONAL";
        corDestaque = "var(--azul-suave)";
    } 
    else if (idade >= 18 && idade <= 65) {
        // Regra 3: De 18 até 65 o voto é obrigatório
        mensagem = "VOTO OBRIGATÓRIO";
        corDestaque = "var(--detalhe-suave)";
    } 
    else {
        // Regra 4: Acima de 65 (maiores que 65) não são mais obrigados
        mensagem = "NÃO OBRIGATÓRIO";
        corDestaque = "var(--borda-suave)";
    }

    // --- 4. EXIBIÇÃO DO RESULTADO ---
    // Usamos template strings (com a crase ` `) para montar o HTML final
    // O ${ } serve para colocar os valores das variáveis dentro do texto
    painel.innerHTML = `
        <div class="linha-res" style="border-left-color: ${corDestaque};">
            <strong>SITUAÇÃO:</strong> 
            <span style="color: ${corDestaque}; font-weight: bold;">${mensagem}</span>
        </div>
        <div class="linha-res">
            <small>Idade processada pelo sistema: ${idade} anos</small>
        </div>
    `;
}