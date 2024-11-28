<?php
class UsersView extends Users
{

    public function showUser($name)
    {
        $result = $this->getUser($name);

        print_r($result);
    }
}
