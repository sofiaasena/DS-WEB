const form = document.getElementById("formulario");

form.addEventListener("submit", function(event){
    event.preventDefault(); // impedir recarregamento da página

    let valido = true;

    // Pegar valores
    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("senha").value;
    const confirmaSenha = document.getElementById("confirma-senha").value;
    const cpf = document.getElementById("cpf").value.trim();
    const telefone = document.getElementById("telefone").value.trim();
    const cep = document.getElementById("cep").value.trim();
    const data = document.getElementById("data-nascimento").value.trim();
    const valor = document.getElementById("valor").value.trim();
    const url = document.getElementById("url").value.trim();
    const cartao = document.getElementById("cartao").value.trim();



    // Limpar mensagens antigas
    document.querySelectorAll("span").forEach(span => span.textContent = "");
    document.getElementById("resultado").innerHTML = "";

    // Nome
    if(nome.length < 3 || /\d/.test(nome)) {
        document.getElementById("erro-nome").textContent = "Nome inválido (mín 3 letras, sem números)";
        valido = false;
    }

    // E-mail
    if(!email.includes("@") || !email.includes(".")) {
        document.getElementById("erro-email").textContent = "E-mail inválido";
        valido = false;
    }

    // Senha
    if(senha.length < 6 || !/[A-Z]/.test(senha) || !/[a-z]/.test(senha) || !/\d/.test(senha) || !/[^A-Za-z0-9]/.test(senha) || senha !== confirmaSenha) {
        document.getElementById("erro-senha").textContent = "Senha fraca ou não confere";
        valido = false;
    }


    //validar CPF 
    function validarCPF(cpf) {
    cpf = cpf.replace(/\D/g,''); // só números
    if(cpf.length !== 11) return false;
    if (/^(\d)\1{10}$/.test(cpf)) return false;// não pode ser todos iguais

    let soma = 0;
    for(let i = 0; i < 9; i++) soma += parseInt(cpf[i]) * (10 - i);
    let resto = (soma * 10) % 11;
    if(resto === 10) resto = 0;
    if(resto !== parseInt(cpf[9])) return false;

    soma = 0;
    for(let i = 0; i < 10; i++) soma += parseInt(cpf[i]) * (11 - i);
    resto = (soma * 10) % 11;
    if(resto === 10) resto = 0;
    if(resto !== parseInt(cpf[10])) return false;

    return true;
}
    // CPF
    if(!validarCPF(cpf)) {
        document.getElementById("erro-cpf").textContent = "CPF inválido";
        valido = false;
    }
   

    // Telefone
    const telefoneNum = telefone.replace(/\D/g,'');
    if(telefoneNum.length !== 10 && telefoneNum.length !== 11) {
        document.getElementById("erro-telefone").textContent = "Telefone inválido";
        valido = false;
    }

    // CEP
    const cepNum = cep.replace(/\D/g,'');
    if(cepNum.length !== 8) {
        document.getElementById("erro-cep").textContent = "CEP inválido";
        valido = false;
    }


    //validar Data no formato DD/MM/AAAA 
    function validarData(data) {
    const partes = data.split("/");
    if (partes.length !== 3) return false;
    const dia = parseInt(partes[0],10);
    const mes = parseInt(partes[1],10);
    const ano = parseInt(partes[2],10);
    const dataObj = new Date(ano, mes-1, dia);
    return dataObj && 
           dataObj.getDate() === dia && 
           dataObj.getMonth() === mes-1 && 
           dataObj.getFullYear() === ano;
}

    // Data
    if(!validarData(data)) {
        document.getElementById("erro-data-nascimento").textContent = "Data inválida";
        valido = false;
    
    }
   
    // URL
    if(!url.startsWith("http://") && !url.startsWith("https://")) {
        document.getElementById("erro-url").textContent = "URL inválida";
        valido = false;
    }

    // Valor
    const valorNum = parseFloat(valor.replace(/\./g,'').replace(',','.'));
    if(isNaN(valorNum) || valorNum < 0 || valorNum > 1000000) {
        document.getElementById("erro-valor").textContent = "Valor inválido";
        valido = false;
    }

    // Cartão de crédito
    const numeroCartao = cartao.replace(/\D/g,'');
    if(numeroCartao.length !== 16) {
        document.getElementById("erro-cartao").textContent = "Cartão inválido";
        valido = false;
    }
    let bandeira = "Desconhecida";
    if(numeroCartao.startsWith("4")) bandeira = "Visa";
    else if(numeroCartao.startsWith("5")) bandeira = "Mastercard";
    else if(numeroCartao.startsWith("3")) bandeira = "American Express";

    // Mostrar resultado
    if(valido){
        document.getElementById("resultado").innerHTML = `Formulário válido<br>
        Nome: ${nome}<br>
        E-mail: ${email}<br>
        Senha: ${senha}<br>
        CPF: ${cpf}<br>
        Telefone: ${telefoneNum}<br>
        CEP: ${cepNum}<br>
        Data: ${data}<br>
        Valor: ${valor}<br>
        URL: ${url}<br>
        Cartão: ${numeroCartao} - Bandeira: ${bandeira}`;
    }
});
