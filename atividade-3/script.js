// Cria a função 'calcular'. Ela fica "dormindo" até o botão no HTML ser clicado.
function calcular() {
    
    // --- PASSO 1: PEGAR OS DADOS DIGITADOS ---
    
    // document.getElementById('nota1') -> Vai lá no HTML e pega o elemento com ID 'nota1'
    // .value -> Pega o valor exato (o número) que o usuário digitou dentro desse campo
    // parseFloat() -> Transforma esse texto digitado em um número decimal verdadeiro para o computador fazer contas
    // const n1 = -> Salva esse número final numa caixinha (variável constante) chamada n1
    const n1 = parseFloat(document.getElementById('nota1').value);
    const n2 = parseFloat(document.getElementById('nota2').value);
    const n3 = parseFloat(document.getElementById('nota3').value);
    
    // Aqui pegamos a div vazia lá do HTML pelo ID dela ('resultado') e guardamos na variável 'painel'
    const painel = document.getElementById('resultado');


    // --- PASSO 2: CONFERIR SE O USUÁRIO DEIXOU EM BRANCO ---
    
    // isNaN significa "Is Not a Number" (Não é um número).
    // O símbolo || significa "OU" em programação.
    // Lendo a linha abaixo: "Se n1 estiver vazio OU n2 estiver vazio OU n3 estiver vazio..."
    if (isNaN(n1) || isNaN(n2) || isNaN(n3)) {
        // Se a condição acima for verdadeira, ele injeta esse HTML com erro vermelho dentro do nosso painel
        painel.innerHTML = "<div class='linha-res' style='color:red; border-left-color: red;'>ERRO: Preencha as três notas!</div>";
        // O comando 'return' aborta a missão. Ele faz o JavaScript parar de ler o código aqui e não tenta fazer as contas
        return; 
    }


    // --- PASSO 3: CONFERIR SE AS NOTAS SÃO REAIS (ENTRE 0 E 10) ---
    
    // Lendo a linha abaixo: "Se n1 for menor que 0 OU n1 for maior que 10 OU n2 menor que 0..." e assim por diante
    if (n1 < 0 || n1 > 10 || n2 < 0 || n2 > 10 || n3 < 0 || n3 > 10) {
        // Se alguma nota for impossível (tipo -2 ou 15), ele avisa o usuário com um erro vermelho
        painel.innerHTML = "<div class='linha-res' style='color:red; border-left-color: red;'>ERRO: As notas devem ser entre 0 e 10!</div>";
        // Novamente, o 'return' cancela o resto da função para não dar resultados errados
        return; 
    }


    // --- PASSO 4: MATEMÁTICA E LÓGICA ---
    
    // Agora que temos certeza que os números estão corretos, calculamos a média.
    // Primeiro somamos n1 + n2 + n3 (entre parênteses para fazer primeiro) e depois dividimos (/) por 3
    const media = (n1 + n2 + n3) / 3;
    
    // Usamos 'let' em vez de 'const' porque o valor dessas variáveis vai mudar dependendo se ele passou ou não
    let statusTexto = "";
    let statusCor = "";

    // SE (if) a média for menor que 7...
    if (media < 7) {
        statusTexto = "REPROVADO"; // O texto vira reprovado
        statusCor = "var(--detalhe-suave)"; // Pegamos aquela cor coral (vermelha) lá do nosso arquivo CSS
    } 
    // SENÃO (else) - ou seja, se for 7 ou maior...
    else {
        statusTexto = "APROVADO"; // O texto vira aprovado
        statusCor = "var(--borda-suave)"; // Pegamos a cor verde do nosso CSS
    }


    // --- PASSO 5: MOSTRAR O RESULTADO NA TELA ---
    
    // painel.innerHTML = altera o conteúdo da nossa div de resultado lá no HTML.
    // Usamos a crase (` `) para criar um texto especial que permite "injetar" nossas variáveis dentro dele usando ${ }
    // media.toFixed(1) pega a nota (ex: 6.66666) e arredonda para uma casa decimal (ex: 6.7)
    painel.innerHTML = `
        <div class="linha-res"><strong>MÉDIA:</strong> ${media.toFixed(1)}</div>
        
        <div class="linha-res" style="border-left-color: ${statusCor};">
            <strong>STATUS:</strong> 
            <span style="color: ${statusCor}; font-weight: bold;">${statusTexto}</span>
        </div>
    `;
}