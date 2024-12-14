<?php

namespace Core;

use Core\App;
use Core\Database;

class Authenticator
{
    public function attempt(string $email, string $password): bool
    {
        $user = App::resolve(Database::class)->query("select * from users where email = :email", [
            'email' => $email,
        ])->find();

        if ($user) {
            if (password_verify($password, $user['password'])) {
                $this->login($email);

                return true;
            }
        }
        return false;
    }


    public function login($user)
    {
        $_SESSION['user'] = [
            'email' => $user,
        ];

        session_regenerate_id(true);
    }

    public function logout()
    {
        $_SESSION = [];
        session_destroy();

        $params = session_get_cookie_params();
        setcookie("PHPSESSID", '', -1, $params['path'], $params['domain']);
    }
}
