function mudaCor(){
document.getElementById("conteudo").innerHTML = "<p>Olá mundo</p>";
document.getElementById("conteudo").style.backgroundColor="purple";
var valor = document.getElementById("conteudo").innerHTML;
console.log(valor);
}