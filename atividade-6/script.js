function verificarAposentadoria() {
    
    // --- PASSO 1: PEGAR OS DADOS DIGITADOS ---
    const codigo = document.getElementById('codigo').value;
    const anoNasc = parseInt(document.getElementById('anoNasc').value);
    const tempoTrab = parseInt(document.getElementById('tempoTrab').value);
    
    const painel = document.getElementById('resultado');

    // --- PASSO 2: CONFERIR SE O USUÁRIO DEIXOU EM BRANCO ---
    // Verifica se o código está vazio ou se os números digitados são inválidos
    if (codigo.trim() === "" || isNaN(anoNasc) || isNaN(tempoTrab)) {
        painel.innerHTML = "<div class='linha-res' style='color:var(--detalhe-suave); border-left-color: var(--detalhe-suave);'>ERRO: Preencha todos os campos!</div>";
        return;
    }

    // --- PASSO 3: CÁLCULO E LÓGICA DE APOSENTADORIA ---
    
    // Pega o ano atual automaticamente pelo sistema do computador
    const anoAtual = new Date().getFullYear(); 
    
    // Calcula a idade do empregado
    const idade = anoAtual - anoNasc;
    
    let statusTexto = "";
    let statusCor = "";

    // SE a idade for maior ou igual a 65 OU (||) o tempo de trabalho for maior ou igual a 30...
    if (idade >= 65 || tempoTrab >= 30) {
        statusTexto = "Requerer aposentadoria";
        statusCor = "var(--borda-suave)"; // Cor verde do CSS para aprovação
    } 
    // SENÃO...
    else {
        statusTexto = "Não requerer aposentadoria";
        statusCor = "var(--detalhe-suave)"; // Cor coral do CSS para negação
    }

    // --- PASSO 4: MOSTRAR O RESULTADO NA TELA ---
    painel.innerHTML = `
        <div class="linha-res"><strong>MATRÍCULA:</strong> ${codigo}</div>
        
        <div class="linha-res"><strong>IDADE:</strong> ${idade} anos</div>
        
        <div class="linha-res"><strong>TEMPO DE TRABALHO:</strong> ${tempoTrab} anos</div>
        
        <div class="linha-res" style="border-left-color: ${statusCor};">
            <strong>SITUAÇÃO:</strong> 
            <span style="color: ${statusCor}; font-weight: bold;">${statusTexto}</span>
        </div>
    `;
}