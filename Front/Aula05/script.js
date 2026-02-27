//-------------Eventos do mouse---------------------
var area= document.getElementById("area")
var mensagem = document.getElementById("mensagem")


//click
area.addEventListener("click", function(){
mensagem.textContent = "Clique simples detectado!";
});

//dblclick
area.addEventListener("dblclick", function(){
    //VERIFICA A COR ATUAL PARA PODER REALIZAR A MUDANÇA DE COR
    if(area.style.background=="pink"){
        area.style.background = "blue"
    }else
area.style.background = "pink";
});



//Mouse enter
area.addEventListener("mouseenter", function(){
mensagem.textContent = "O mouse entrou na área!";
});


//mouse leave
area.addEventListener("mouseleave", function(){
mensagem.textContent = "O mouse saiu da área!";
});

//mousemove
var posicao = document.getElementById("posicao")
area.addEventListener("mousemove", function(event){
posicao.textContent = "X:" + event.clientX + " Y:"+ event.clientY;
});


//contextmenu
area.addEventListener("contextmenu", function(event){
event.preventDefault();
alert("Botão direito clicado!");
});






//-------------------Eventos do Teclado----------------------
//keydown
/*document.addEventListener("keydown", function(event){
console.log("Tecla pressionada: " + event.key);
});



//keyup
document.addEventListener("keyup", function(event){
console.log("Tecla liberada: " + event.key);
});


//keypress
document.addEventListener("keypress", function(event){
console.log("Caractere digitado: " + event.key);
});*/

document.addEventListener("keydown", function(event){
// Exibe a tecla pressionada
var campo = document.getElementById("resultado");
campo.textContent = "Tecla pressionada: " + event.key;
// Também mostra no console
console.log("Tecla pressionada: " + event.key);
});

//-------------------Eventos do Formulário---------------------




//-------------------Eventos da Janela--------------------------