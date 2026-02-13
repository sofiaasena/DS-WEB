function trocarImagem1(){
    document.getElementById("foto")
    .setAttribute("src" , "imagem1.jpg")
    
}
function trocarImagem2(){
    document.getElementById("foto")
    .setAttribute("src" , "imagem2.jpg")

}

function mostrarSrc(){
    let valorSrc = document.getElementById("foto")
    .getAttribute("src")

console.log(valorSrc)
}