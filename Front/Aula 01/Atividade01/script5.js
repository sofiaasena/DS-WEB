var capital =Number(prompt("Informe o capital"))
var tempo =Number(prompt("Informe o tempo (em meses)"))
var taxa =Number(prompt("Informe o valor da taxa de juros"))
let montante = capital * (1+(taxa/100)) ** tempo
alert(montante.toFixed(2))
