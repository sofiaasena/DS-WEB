var divResposta = document.getElementById("resposta")

var botaoHello = document.getElementById("botaoHello")
botaoHello.addEventListener("click", requisicaoHello)

 async function requisicaoHello(){
    var requisicao = fetch('http://localhost/primeira-api/hello')
    var resposta = (requisicao).json()
    console.log(resposta)

}