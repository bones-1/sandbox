<?php

declare(strict_types=1);
require_once("./includes/class-autoloader.inc.php");

require_once("./views/header.inc.phtml");


echo '<pre>';
$newUser = new UsersContr();
$newUser->createUser('Jane', 'Doe', '1834-05-11');

$test = new UsersView();
$test -> showUser('Jane');
echo '</pre>';


require_once("./views/footer.inc.phtml");
