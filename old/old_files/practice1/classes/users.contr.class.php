<?php
class UsersContr extends Users {
    public function createUser(String $fname, String $lname, String $dob) {
        $this -> setUser($fname, $lname, $dob);
    }
}
?>