<?php
class Pessoa{
    public $nome;
    public $idade;

public function __construct($novoNome, $novoIdade){
    $this->nome=$novoNome;
    $this->idade=$novoIdade;
        }
public function exibirDados(){
    return "O nome é ". $this->nome ." e a idade é ". $this->idade;    
        }
public function alterarDados($novoNome, $novoIdade){
    $this->nome=$novoNome;
    $this->idade=$novoIdade;
        }
}

$pessoa = new Pessoa("Sofia",17);
    echo $pessoa->exibirDados();

$pessoa->alterarDados("Gaby",16);
echo "<br>";
echo $pessoa->exibirDados();
?>