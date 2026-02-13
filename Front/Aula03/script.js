//Criando contador de itens
var contadorItem = 0

function adicionar(){
    //incrementando contador
contadorItem ++
    // crio o item
let novoItem = document.createElement("li")
    //adiciono texto ao meu item
novoItem.textContent=  contadorItem + "-" + prompt("Digite o nome da tarefa")
    //atribuo um ID
novoItem.setAttribute("id", contadorItem)
let botaoRemover = document.createElement("button")
botaoRemover.textContent="Remover"//adiciona o texto ao texto
botaoRemover.setAttribute("onclick",`remover(${contadorItem})`) //adiciona uma função ao botão

novoItem.appendChild(botaoRemover)//adiciona o botao ao novo item
document.getElementById("lista").appendChild(novoItem)

}

function remover(item_lista){
    var item = document.getElementById(item_lista)
    document.getElementById("lista").removeChild(item)
}