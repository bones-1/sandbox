<?php
namespace Person;

 class Person {

    private $name;
    private $age;

    public function __construct($name, $age){
        $this -> name = $name;
        $this -> age = $age;
    }

    public function get_person(){
        $person = $this -> name . " is " . $this -> age . " years old.";
        return $person;
    }

}
?>