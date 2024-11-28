<?php

class Dbh
{

    protected function connect()
    {
        try {
            $dbname = 'test';
            $host = 'localhost';
            $user = 'bookorama';
            $password = 'password';
            $dsn = "mysql:dbname=$dbname;host=$host";

            $pdo = new Pdo($dsn, $user, $password);
            $pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
        } catch (PDOException $e) {
            echo "Failed to open connection Database: " . $e->getMessage() . "<br>";
            die();
        }

        return $pdo;
    }
}
