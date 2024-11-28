<?php

function urlIs(String $value)
{
    return $_SERVER['REQUEST_URI'] === $value;
}

function dd($value)
{
    print('<pre>');
    print_r($value);
    print('</pre>');

    die();
}

function authorize($condition, $status = Response::FORBIDDEN)
{
    if (!$condition) {
        abort($status);
    }
}