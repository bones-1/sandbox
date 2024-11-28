<?php
class Login extends Dbh {
    protected function getUser(String $email)
    {
        $query =  'SELECT user_uid, user_passwd, user_email FROM Users WHERE user_email = :email';

        try {
            $stmt = $this->connect();
            $stmt = $stmt->prepare($query);
            $stmt->execute([':email' => $email]);
        } catch (PDOException) {
            $stmt = null;
            header("location: ../index.php?error=stmtfailed");
            exit();
        }

        $result = $stmt -> fetch();

        return $result;
    }

    protected function getPasswd(String $email)
    {
        $query =  'SELECT user_passwd, user_uid FROM Users WHERE user_email = :email';

        try {
            $stmt = $this->connect();
            $stmt = $stmt->prepare($query);
            $stmt->execute([':email' => $email]);
        } catch (PDOException) {
            $stmt = null;
            header("location: ../index.php?error=stmtfailed");
            exit();
        }

        $passwd = $stmt->fetch();
        
        return $passwd;
        
    }
}
?>