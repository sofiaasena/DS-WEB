var divResposta = document.getElementById("resposta")


// os inputs var inputNome   = document.getElementById("nome")
document.addEventListener('DOMContentLoaded', () => {getItens , carregarCategoria(),alterarStatus()})
document.getElementById('botaoEnviar').addEventListener('click', postItens)

async function getItens() {
 var requisicao = await fetch("http://localhost/meus-planos-api/itens")
    var resposta = await requisicao.json()

    console.log(resposta)

    // Gera as linhas automaticamente para todos os itens do array
    const linhas = resposta.data.map(item => `
        <tr>
            <td>${item.nome}</td>
             <td><input type="checkbox"${item.feito == 1 ? "checked" : ""} onchange="alterarStatus(${item.id}, this.checked)"></td>
            <td>${item.categoria_nome}</td>
            <td><button onclick="deleteItens(${item.id})">Deletar</button></td>
        </tr>
    `).join("");
    
    console.log(linhas)
    divResposta.innerHTML = `
        <table class="sua-classe">
            <thead>
                <tr>
                    <th colspan="4" ><center>Itens Cadastrados</center></th>
                </tr>
                <tr>
                    
                    <th>Nome</th>
                    <th>Status</th>
                    <th>Categoria</th>
                    <th>Opções</th>
                </tr>
            </thead>
            <tbody>
                ${linhas}
            </tbody>
        </table>
    `;

}
async function carregarCategoria() {
    const resposta = await fetch("http://localhost/meus-planos-api/categorias");
    const resultado = await resposta.json();

    const select = document.getElementById("categoria");

    let options = '<option value="">Selecione...</option>';

    resultado.data.forEach(cat => {
        options += `<option value="${cat.id}">${cat.nome}</option>`;
    });

    select.innerHTML = options;
}

var inputNome = document.getElementById("nome")
var inputCategoria = document.getElementById("categoria")

async function postItens() {
    var requisicao = await fetch("http://localhost/meus-planos-api/itens", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            nome: inputNome.value,
            categoria_id: inputCategoria.value
        })
    });

    var resposta = await requisicao.json()
    console.log(resposta)

    inputNome.value = ""
    inputCategoria.value = ""

    getItens()
}
     

async function alterarStatus(id, feito) {
    await fetch("http://localhost/meus-planos-api/itens/" + id, {
        method: "PUT",
        body: JSON.stringify({
            feito: feito ? 1 : 0
        })
    });
 getItens()
}
   

async function deleteItens(id) {
    var requisicao = await fetch("http://localhost/meus-planos-api/itens/" + id, {
        method: "DELETE"
    })
 
    var resposta = await requisicao.json()
    console.log(resposta)
 
    getItens()
}



