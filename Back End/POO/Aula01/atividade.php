<?php
class Garrafa {
    public $marca; //Atributo
    public $cor; //Atributo
    public $modelo; //Atributo
    public $tamanho; //Atributo
    public $estampa; //Atributo

    public function beber(){ //Método
    return " <br>Você bebeu na garrafa de cor: ". $this->cor;

    }
     public function resfriar(){ //Método
    return " <br> A garrafa que resfriou era da marca: " .$this->marca;

    }
     public function armazenar(){ //Método
    return " <br>A garrafa de tamanho". $this->tamanho . "armazenou a água " ;

    }
}
$Garrafa1 = new Garrafa();
$Garrafa1->cor = " azul  " ;
 echo $Garrafa1->beber();

$Garrafa2 = new Garrafa();
$Garrafa2->cor = " Owala  ";
 echo $Garrafa2->resfriar();


$Garrafa3 = new Garrafa();
$Garrafa3->tamanho = " 1 litro  ";
 echo $Garrafa3->armazenar();
echo "<hr>";

class Moletom{
    public $cor; //Atributo
    public $modelo; //Atributo
    public $tamanho; //Atributo
    public $marca; //Atributo
    public $genero; //Atributo

 public function esquentar(){ //Método
    return " <br> O moletom do modelo". $this->modelo . "esquentou melhor" ;

    }
     public function lavar(){ //Método
    return " <br> O moletom da cor" . $this->cor . "foi lavado" ;

    }
     public function sujar(){ //Método
    return " <br> O moletom da marca" . $this->marca ."sujou" ;

    }
   
}
$Moletom1 = new Moletom();
$Moletom1->modelo = " grande  " ;
 echo $Moletom1->esquentar();

$Moletom2 = new Moletom();
$Moletom2->cor = " preta  ";
 echo $Moletom2->lavar();


$Moletom3 = new Moletom();
$Moletom3->marca = " Hugo Boss ";
 echo $Moletom3->sujar();
echo "<hr>";


class Janela{
    public $material; //Atributo
    public $modelo; //Atributo
    public $tamanho; //Atributo
    public $marca; //Atributo
    public $cor; //Atributo

 public function abrir(){ //Método
    return "<br>A janela do tamanho" . $this->tamanho ."foi aberta" ;

    }
     public function fechar(){ //Método
    return "<br>A janela da marca" . $this->marca . "está fechada" ;

    }
     public function Quebrar(){ //Método
    return "<br>O material da janela quebrou: o material era: " . $this->material;

    }
   
}
$Janela1 = new Janela();
$Janela1->tamanho = " grande  " ;
 echo $Janela1->abrir();

$Pincel2 = new Janela();
$Pincel2->marca = " Brimak  ";
 echo $Pincel2->fechar();


$Pincel3 = new Janela();
$Pincel3->material = " Alumínio ";
 echo $Pincel3->Quebrar();
 echo "<hr>";


class Pincel{
    public $modelo; //Atributo
    public $marca; //Atributo
    public $tamanho; //Atributo
    public $funcao; //Atributo
    public $efiencia; //Atributo

 public function maquiar(){ //Método
    return "<br>O pincel da marca" . $this->marca ." é bom para maquiar" ;

    }
     public function pintar(){ //Método
    return "<br>O pincel é eficiente para pintar. Nivel de eficiencia: ". $this->eficiencia;

    }
     public function espalhar(){ //Método
    return " <br>O pincel de tamanho" . $this->tamanho ."é melhor para espalhar" ;

    }
}
$Pincel1 = new Pincel();
$Pincel1->marca = " Ruby Rose  " ;
 echo $Pincel1->maquiar();

$Pincel2 = new Pincel();
$Pincel2->eficiencia = " 10  ";
 echo $Pincel2->pintar();


$Pincel3 = new Pincel();
$Pincel3->tamanho = " grande ";
 echo $Pincel3->espalhar();
 echo "<hr>";



class Tablet{
    public $potencia; //Atributo
    public $marca; //Atributo
    public $modelo; //Atributo
    public $polegada; //Atributo
    public $voltagem; //Atributo

 public function assistir(){ //Método
    return " <br>O Tablet de potencia" . $this->potencia ."foi usado para assitir" ;

    }
     public function usar(){ //Método
    return " <br> O Tablet de voltagem" . $this->voltagem  ."foi usado" ;

    }
     public function estudar(){ //Método
    return "<br> O Tablet da marca" . $this->marca . "foi comprado para estudar" ;

    }
}

$Tablet1 = new Tablet();
$Tablet1->potencia = ": 12GB " ;
 echo $Tablet1->assistir();

$Tablet2 = new Tablet();
$Tablet2->voltagem = " :220 ";
 echo $Tablet2->usar();


$Tablet3 = new Tablet();
$Tablet3->marca = "Apple ";
 echo $Tablet3->estudar();
 
?>