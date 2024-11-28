<?php

class Signup extends Dbh
{
    protected function checkUser(String $email, String $uid)
    {
        $query =  'SELECT user_id FROM Users WHERE user_email = :email OR user_uid = :uid';

        try {
            $stmt = $this->connect();
            $stmt = $stmt->prepare($query);
            $stmt->execute([':email' => $email, ':uid' => $uid]);
        } catch (PDOException) {
            $stmt = null;
            header("location: ../index.php?error=stmtfailed");
            exit();
        }

        if ($stmt->rowCount()) {
            return true;
        }

        return false;
    }

    protected function setUser(
        String $uid,
        String $pass,
        String $email,
    ) {
        $query =  'INSERT INTO Users (user_uid, user_passwd, user_email) VALUES(:uid, :pass, :email)';

        // Hash the password before inserting to database
        $pass = password_hash($pass, PASSWORD_DEFAULT);

        try {
            $stmt = $this->connect();
            $stmt = $stmt->prepare($query);
            $stmt->execute([':uid' => $uid, ':pass' => $pass, ':email' => $email]);
        } catch (PDOException) {
            header("location: ../index.php?error=signupfailed");
            exit();
        }

        $stmt = null;
    }
}
