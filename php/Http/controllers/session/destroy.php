<?php

// Log the user out

use Core\Authenticator;

(new Authenticator) -> logout();

header('Location: /');
die();