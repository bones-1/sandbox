<?php
class SignupCtr extends Signup
{

    private $uid;
    private $email;
    private $passwd;
    private $reppasswd;

    public function __construct(
        String $uid,
        String $email,
        String $pass,
        String $reppass
    ) {
        $this->uid = $uid;
        $this->email = $email;
        $this->passwd = $pass;
        $this->reppasswd = $reppass;
    }



    public function signupUser()
    {
        if ($this->emptyInput()) {
            header("location: ../index.php?error=emptyInput");
            exit();
        }

        if ($this->invalidUid()) {
            header("location: ../index.php?error=invalidUsername");
            exit();
        }

        if ($this->invalidEmail()) {
            header("location: ../index.php?error=invalidEmail");
            exit();
        }

        if ($this->userExists()) {
            header("location: ../index.php?error=userExists");
            exit();
        }

        if (! $this->passwdMatch()) {
            header("location: ../index.php?error=missmatchPasswd");
            exit();
        }

        $this->setUser($this->uid, $this->passwd, $this->email);
    }

    private function emptyInput()
    {
        if (
            empty($this->uid) ||
            empty($this->email) ||
            empty($this->passwd) ||
            empty($this->reppasswd)
        ) {
            return true;
        }

        return false;
    }

    private function invalidUid()
    {
        if (preg_match("/^[a-zA-Z]+ [a-zA-Z\s]+$/", $this->uid)) {
            return false;
        }

        return true;
    }

    private function invalidEmail()
    {
        if (filter_var($this->email, FILTER_VALIDATE_EMAIL)) {
            return false;
        }

        return true;
    }

    private function passwdMatch()
    {
        return $this->passwd === $this->reppasswd;
    }

    private function userExists()
    {
        return $this->checkUser($this->email, $this->uid);
    }
}
