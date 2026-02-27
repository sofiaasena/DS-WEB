const box1 = document.getElementById("box1");
const box2 = document.getElementById("box2");
const box3 = document.getElementById("box3");
const box4 = document.getElementById("box4");
var mensagem = document.getElementById("mensagem")
var mensagem2 = document.getElementById("mensagem2")
var mensagem3 = document.getElementById("mensagem3")
var mensagem4 = document.getElementById("mensagem4")




box1.addEventListener("click", function(){
    box1.querySelector("img").src = "imagem1.jpg";
    box1.querySelector("img").style.width = "300px";
    box1.querySelector("img").style.height = "150px";
});
 box1.addEventListener("click", function(){
mensagem.textContent = "Você escolheu a Hello Kitty!";})
box1.addEventListener("dblclick", function(){
    box1.style.backgroundImage = "url('back.jpg')";
    
});






box2.addEventListener("click", function(){
    box2.querySelector("img").src = "imagem2.jpg";
    box2.querySelector("img").style.width = "300px";
    box2.querySelector("img").style.height = "150px";
});
box2.addEventListener("click", function(){
mensagem2.textContent = "Você escolheu o Snoopy!";})
box2.addEventListener("dblclick", function(){
    box2.style.backgroundImage = "url('back2.jpg')";
});







box3.addEventListener("click", function(){
    box3.querySelector("img").src = "imagem3.jpg";
    box3.querySelector("img").style.width = "300px";
    box3.querySelector("img").style.height = "150px";

});
box3.addEventListener("click", function(){
mensagem3.textContent = "Você escolheu o Garfield!";})
box3.addEventListener("dblclick", function(){
    box3.style.backgroundImage = "url('back3.jpg')";
   
});







box4.addEventListener("click", function(){
    box4.querySelector("img").src = "imagem4.jpg";
    box4.querySelector("img").style.width = "300px";
    box4.querySelector("img").style.height = "150px";
});
box4.addEventListener("click", function(){
mensagem4.textContent = "Você escolheu a Kuromi!";})
box4.addEventListener("dblclick", function(){
    box4.style.backgroundImage = "url('back4.jpg')";
    
});

const imagens = document.querySelectorAll("img");



