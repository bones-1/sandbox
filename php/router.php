<?php

$uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
$routes = require('./routes.php');

routeToController($uri, $routes);


function routeToController(String $uri, array $routes)
{
    if (! array_key_exists($uri, $routes)) {
        abort(404, $routes["/404"]);
    }

    require($routes[$uri]);
}

function abort(Int $code)
{
    global $routes;
    http_response_code($code);
    require($routes["/{$code}"]);

    die();
}
