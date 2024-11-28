<?php

namespace Calculator;

class Calc
{

    public $oper;
    public $num1;
    public $num2;

    public function __construct(String $oper, Int $num1, Int $num2)
    {
        $this->oper = $oper;
        $this->num1 = $num1;
        $this->num2 = $num2;
    }

    public function calculate() {
        switch ($this -> oper) {
            case 'add':
                return $this -> num1 + $this -> num2;
                break;

            case 'sub':
                return $this->num1 - $this->num2;
                break;

            case 'div':
                return $this->num1 / $this->num2;
                break;

            case 'mul':
                return $this->num1 * $this->num2;
                break;
            
            default:
                echo "No operator selected";
                break;
        }
    }
}
