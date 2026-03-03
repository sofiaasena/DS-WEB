<?php
class Pessoa {
            public $nome = "Sofia";
            protected $idade = 20;
           protected $salario = 1000;

        
            
            public function verDados(){
            echo $this->nome . "<br/>";
            echo $this->idade . "<br/>";
            echo $this->salario . "<br/>";
            
            
            }
}

    class Funcionarios extends Pessoa {
         public $nome = "Vini";
         public $idade = 80;
         protected $salario = 1000;

        public function verDados(){
          echo $this->nome . "<br/>";
          echo $this->idade . "<br/>";
         echo $this->salario . "<br/>";
            
        }
        public function calcularBonus(){}
    }


    class Gerente extends Funcionarios{
         public $nome = "Gaby";
         public $idade = 20;
        
    public function verDados(){
        echo $this->nome . "<br/>";
        echo $this->idade . "<br/>";
        

    }
    public function calcularBonus(){
        return  1000 * 1.20;
    }
    }

    class Desenvolvedor extends Funcionarios {
        public $nome = "Enzo";
         public $idade = 60;
    
         public function verDados(){
            echo $this->nome . "<br/>";
            echo $this->idade . "<br/>";
            

            
         }
        public function calcularBonus(){
            return  1000 * 1.10;
        }
    }


    $Sofia = new Pessoa();
    $Sofia->verDados();
   
    
        echo"<br>";

    
    $Vini = new Funcionarios();
    $Vini->verDados();
     echo $Vini->calcularBonus();

     echo"<br>";

    
    $Gaby = new Gerente();
    $Gaby->verDados();
     echo $Gaby->calcularBonus();

     echo"<br>";
     echo"<br>";

    
    $Enzo = new Desenvolvedor();
    $Enzo->verDados();
    echo $Enzo->calcularBonus();
    
    


?>