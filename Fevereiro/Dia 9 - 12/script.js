const botaoAdicionar = docmuent.getElementBy.Id('btnAdicionar');
const campoTexto = docmuent.getElementBy.Id('novoPersonagem');
const lista = docmuent.getElementBy.Id('listaPersonagems');

botaoAdicionar.addEventListener('click',function() {
    const nome = campoTexto.value;

    if(nome.trim() !==) {
        const novoItem = document.createElement('li');
        novoItem.textContent=nome; 

        lista.appendChild(novoItem);

        campoTexto.value = "";
        campoTexto.focus();
    }else{
        alert("Por favor, Digite um nome.");
    }
    
})