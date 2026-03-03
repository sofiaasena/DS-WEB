<?php
        class Veiculo {
            public $marca = "Ferrari";
            public $modelo = "La Ferrari";
            private $velocidade = "200km/h";
            
           


    public function getNumero() {
    return $this->velocidade;
    }
    public function setNumero($n) {
    $this->velocidade = $n;
    }
        }
    


    class Carro extends Veiculo {
        public $marca = "Chevrolet";
        public $modelo = "Onix";
        private $velocidade;
    
    public function acelerar(){
        echo "Acelerar com o pé";
    }}

    class Moto extends Veiculo {
         public $marca = "Yamaha";
        public $modelo = "Pop 110i";
        private $velocidade;
        public function acelerar(){
          echo "Acelerar com o guidão";   
        }

    }

$carro = new Carro();
echo "Carro:";
$carro->setNumero("180km/h");
echo $carro->getNumero() . "<br>";
$carro->acelerar();

echo"<br><br>";
echo "Moto:";
$moto = new Moto();
$moto->setNumero("140km/h");
echo $moto->getNumero() . "<br>";
$moto->acelerar();


    
    





    

?>