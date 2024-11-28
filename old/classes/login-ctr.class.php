<?php
class loginCtr extends Login
{

    private $email;
    private $passwd;
    private $userObj;

    public function __construct(String $email, String $passwd)
    {
        $this->email = $email;
        $this->passwd = $passwd;
    }

    public function loginUser()
    {

        if ($this->emptyInput()) {
            header("location: ../index.php?error=emptyInput");
            exit();
        }

        if ($this->invalidEmail()) {
            header("location: ../index.php?error=invalidEmail");
            exit();
        }

        if (!$this->userVerified()) {
            header("location: ../index.php?error=loginFailed");
            exit();
        }

        session_start();
        $_SESSION['username'] = $this -> userObj['user_uid'];
        header("location: ../home.php?error=none");
    }

    private function invalidEmail()
    {
        if (filter_var($this->email, FILTER_VALIDATE_EMAIL)) {
            return false;
        }

        return true;
    }

    private function emptyInput()
    {
        if (
            empty($this->email) ||
            empty($this->passwd)
        ) {
            return true;
        }

        return false;
    }

    private function userVerified()
    {
        $this->userObj = $this->getPasswd($this->email);
        if (password_verify($this->passwd, $this->userObj['user_passwd'])) {
            return true;
        }

        return false;
    }
}
