// Criamos a nossa função principal
function calcular() {
    
    // ==========================================
    // PASSO 1: A ENTRADA (Pegar as notas)
    // ==========================================
    // Vamos pegar o texto que o usuário digitou e transformar em número (parseFloat)
    const n1 = parseFloat(document.getElementById('nota1').value);
    const n2 = parseFloat(document.getElementById('nota2').value);
    const n3 = parseFloat(document.getElementById('nota3').value);
    
    // Vamos pegar a caixa vazia onde o resultado vai aparecer depois
    const painel = document.getElementById('resultado');


    // ==========================================
    // PASSO 2: A VALIDAÇÃO (O controle de qualidade)
    // ==========================================
    // Pergunta 1: Alguma nota está em branco? (isNaN significa "Não é um número")
    if (isNaN(n1) || isNaN(n2) || isNaN(n3)) {
        painel.innerHTML = "ERRO: Preencha todas as três notas!";
        painel.style.color = "red"; // Pinta o texto de vermelho
        return; // O 'return' faz o programa parar aqui e não continuar
    }

    // Pergunta 2: Alguma nota é menor que zero ou maior que dez?
    if (n1 < 0 || n1 > 10 || n2 < 0 || n2 > 10 || n3 < 0 || n3 > 10) {
        painel.innerHTML = "ERRO: As notas precisam ser de 0 a 10!";
        painel.style.color = "red"; // Pinta o texto de vermelho
        return; // Para o programa aqui
    }


    // ==========================================
    // PASSO 3: O PROCESSAMENTO (A matemática)
    // ==========================================
    // Agora que sabemos que os números estão corretos, fazemos a conta de padaria.
    const soma = n1 + n2 + n3;
    const media = soma / 3;


    // ==========================================
    // PASSO 4: A DECISÃO (A encruzilhada)
    // ==========================================
    // Criamos duas caixinhas vazias (let) para guardar o texto e a cor do resultado.
    let textoResultado = "";
    let corResultado = "";

    // O computador faz a pergunta: A média é menor que 7?
    if (media < 7) {
        // Se for menor que 7 (Ex: 5), ele entra aqui:
        textoResultado = "REPROVADO";
        corResultado = "var(--detalhe-suave)"; // Vermelho/Coral
    } else {
        // Se não for menor que 7 (Ex: 8), ele entra aqui:
        textoResultado = "APROVADO";
        corResultado = "var(--borda-suave)";   // Verde
    }


    // ==========================================
    // PASSO 5: A SAÍDA (Mostrar na tela)
    // ==========================================
    // Pegamos aquela caixa vazia (painel) e escrevemos o HTML final dentro dela.
    painel.innerHTML = `
        <div class="linha-res">
            <strong>MÉDIA:</strong> ${media.toFixed(1)}
        </div>
        
        <div class="linha-res" style="border-left-color: ${corResultado};">
            <strong>STATUS:</strong> 
            <span style="color: ${corResultado}; font-weight: bold;">
                ${textoResultado}
            </span>
        </div>
    `;
    
    // Como agora deu certo, garantimos que a cor do painel volte ao normal 
    // (caso estivesse vermelho de algum erro anterior)
    painel.style.color = "var(--texto-suave)";
}