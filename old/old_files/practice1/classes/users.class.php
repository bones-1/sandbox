<?php

// The Model. Only class that runs actual queries on the database

class Users extends Dbh
{

    protected function getUser(String $name)
    {
        $query = 'SELECT * FROM test_table WHERE first_name = :first';
        try {
            $pdo = $this->connect()->prepare($query);
            $pdo->execute([':first' => $name]);
        } catch (Exception) {
            echo "Class: Users: Failed to run query statement.";
            die();
        }

        $results = $pdo->fetchAll();
        return $results;
    }

    protected function setUser(String $fname, String $lname, String $dob)
    {
        $query = 'INSERT IGNORE INTO test_table (first_name, last_name, birthday) VALUES(:first,:last,:dob)';
        try {
            $pdo = $this->connect()->prepare($query);
            $pdo->execute([':first' => $fname, ':last' => $lname, ':dob' => $dob]);
        } catch (Exception) {
            echo "Class: Users: Failed to add new entry.";
            return false;
        }
        return true;
    }
}
