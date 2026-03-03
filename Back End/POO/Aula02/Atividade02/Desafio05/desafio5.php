<?php
class Documento {
    private $numero;

    public function getNumero() {
        return $this->numero;
    }

    public function setNumero($n) {
        $this->numero = $n;
    }
}

class CPF extends Documento {

    public function validar() {
        $cpf = preg_replace('/[^0-9]/', '', $this->getNumero());
        if (strlen($cpf) != 11) {
            return false;
        }
        if ($cpf === str_repeat($cpf[0], 11)) {
            return false;
        }
        for ($t = 9; $t < 11; $t++) {
            $soma = 0;
        for ($i = 0; $i < $t; $i++) {
                $soma += $cpf[$i] * (($t + 1) - $i);
            }
        $resto = $soma % 11;
        $digito = ($resto < 2) ? 0 : 11 - $resto;
        if ($cpf[$t] != $digito) {
            return false;
            }
        }

            return true;
    }
}



$doc = new CPF();


$doc->setNumero("553.909.258-90");

if ($doc->validar()) {
    echo "CPF válido";
} else {
    echo "CPF inválido";
}

echo "<br>";
echo "CPF informado: " . $doc->getNumero();

?>