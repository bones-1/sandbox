<?php

// Class that connects to the database and is only accessible by Users

class Dbh
{
    private $host = 'localhost';
    private $db_name = 'test';
    private $user = 'bookorama';
    private $passwd = 'password';

    protected function connect()
    {
        $dsn = 'mysql:host=' . $this->host . ';dbname=' . $this->db_name;

        try {
            $pdo = new PDO($dsn, $this->user, $this->passwd);
        } catch (Exception) {
            print "Failed to open the database.";
            die();
        }
        $pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
        return $pdo;
    }
}
