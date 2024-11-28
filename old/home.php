<?php

declare(strict_types=1);
require_once("./includes/class-autoloader.inc.php");
session_start();

require_once("./views/header.view.phtml");

print_r($_SESSION);

require_once("./views/main.view.phtml");

require_once("./views/footer.view.phtml");
