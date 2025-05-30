function criaCartao(categoria, pergunta, resposta) {
    let container = document.getElementById('container')
    let cartao = document.createElement
    cartao.className = 'cartao'

    cartao.innerHTML = `
    <div class="cartao__conteudo">
    <h3>Matemática</h3>
    <div class="cartao__conteudo__pergunta">
        <p>Qual é a expressão para a frase: um número somado com cinco é igual a outro número?</p>
    </div>
    <div class="cartao__conteudo__resposta">
         <p>É x+5=y</p>
    </div>
    </div>
    `
        container.appendChild(cartao)
}