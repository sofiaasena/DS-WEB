 <?php
    abstract class Produto {
        public $nome = "Sapato";
        public $preco = "200";
        public $estoque = "50";

    public function calcularDesconto(){}
  } 

    class Eletronico extends Produto{
        public $nome = "Celular";
        public $preco = "2000";
        public $estoque = "90";
        
    
    public function calcularDesconto(){
        $conta = 2000 - (2000 * 0.10);
    if ($this->estoque<5){$descontoFinal=$conta-(2000*0.10);}
    
    else{$descontoFinal = $conta;} 
    
    return $descontoFinal;
}}

 class Roupa extends Produto{
        public $nome = "Vestido";
        public $preco = "200";
        public $estoque = "4";
        
   
    public function calcularDesconto(){
         $conta2 = 200 - (200 * 0.20);
        if ($this->estoque<5){$descontoFinal2=$conta2-(200*0.10);}
    
    else{$descontoFinal = $conta2;} 
    
    return $descontoFinal2;
    } }
  
    


$Eletronico = new Eletronico();
echo" Celular:";
     echo $Eletronico->calcularDesconto();

     echo"<br>";
     echo"<br>";

    
    $Roupa = new Roupa();
echo"Vestido:";
    echo $Roupa->calcularDesconto();
    
