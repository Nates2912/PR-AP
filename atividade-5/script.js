function calcularCompra() {
    // 1. Pegar a quantidade do input
    // O valor vem como texto, então usamos parseInt para transformar em número inteiro
    const qtd = parseInt(document.getElementById('quantidade').value);
    const painel = document.getElementById('resultado');

    // 2. Validação: Verificar se o número é válido (não vazio e maior que zero)
    if (isNaN(qtd) || qtd <= 0) {
        painel.innerHTML = "<div class='linha-res' style='color:red; border-left-color: red;'>ERRO: Digite uma quantidade válida!</div>";
        return;
    }

    // 3. Definir o preço com base na regra de negócio
    let precoUnitario = 0;

    if (qtd < 12) {
        // Se comprar menos de uma dúzia (11 ou menos)
        precoUnitario = 1.30;
    } else {
        // Se comprar 12 ou mais (pelo menos uma dúzia)
        precoUnitario = 1.00;
    }

    // 4. Calcular o valor total
    const total = qtd * precoUnitario;

    // 5. Exibir o resultado formatado
    // toFixed(2) garante que o valor mostre 2 casas decimais (ex: 12.50)
    // replace('.', ',') troca o ponto pela vírgula (padrão brasileiro)
   // O .innerHTML é uma propriedade que permite "escrever" HTML de verdade dentro de um elemento.
// Usamos as crases ( ` ` ) que chamamos de Template Literals para misturar texto e variáveis.


painel.innerHTML = `
    <div class="linha-res">
        <strong>PREÇO UN.:</strong> R$ ${
            /* O QUE VOCÊ PRECISA SABER:
               1. .toFixed(2): Transforma o número em texto com 2 casas decimais. 
                  Sem isso, R$ 1.30 apareceria como R$ 1.3. Essencial para moedas!
               2. .replace('.', ','): O JavaScript entende números no padrão americano (ponto).
                  Este comando troca o ponto pela vírgula para exibir no padrão brasileiro.
            */
            precoUnitario.toFixed(2).replace('.', ',')
        }
    </div>

    <div class="linha-res" style="border-left-color: var(--borda-suave);">
        <strong>TOTAL:</strong> 
        
        <span style="color: var(--texto-suave); font-weight: bold;">
            R$ ${
                /* O QUE VOCÊ PRECISA SABER:
                   O símbolo ${ } funciona como uma "ponte". Tudo o que estiver dentro 
                   dessas chaves o JavaScript vai calcular ou processar antes de mostrar na tela.
                */
                total.toFixed(2).replace('.', ',')
            }
        </span>
    </div>
`;}