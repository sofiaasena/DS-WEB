<?php
Class Arduino{
    private $porta;

    public function__construct{$porta}{
        $this->porta == $porta;
    }
    $cmd = "echo". $comando . ">" . $this->porta;
    exec($cmd);
}
public function ligar(){
    $this-> enviarcomando("L");
}
public function desligar(){
    $this->enviarcomando("D");
}
public function piscar(){
    $this->enviarcomando("P");
}
<?