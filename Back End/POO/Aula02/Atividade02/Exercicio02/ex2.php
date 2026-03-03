 <?php
    abstract class Animal {
    public function fazerSom(){}
     public function mover(){
     }
     }
    class Sapo extends Animal{
    public function fazerSom() {
    echo "Grapt";}}

    class Cavalo extends Animal {
    public function fazerSom() {
    echo "Potocó Potocó";
    }
     public function mover() {
        return "  - Galopa e anda " . parent::mover();
    }}

     class Tartaruga extends Animal {
    public function fazerSom() {
    echo "zzzz";
    }
    }

    $Sapo = new Sapo();
    $Sapo->fazerSom();
    $Sapo->mover();

    echo"<br>";

    $Cavalo = new Cavalo();
    $Cavalo->fazerSom();
     echo $Cavalo->mover();

    echo"<br>";

    $Tartaruga = new Tartaruga();
    $Tartaruga->fazerSom();
    $Tartaruga->mover();






    ?>