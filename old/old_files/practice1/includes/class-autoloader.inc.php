<?php

spl_autoload_register('autoloader_cb');


function autoloader_cb($name)
{
    $path = "classes/";
    $ext = ".class.php";

    $full_path = construct_full_path($name, $ext, $path);

    if (file_exists($full_path)) {
        require_once($full_path);
    }
}

function construct_full_path($name, $ext, $path)
{
    $path = getcwd() . '/' . $path;
    $name = str_replace("\\", "/", $name);
    $name = lcfirst($name);
    $name = preg_replace('/[A-Z]/', '.$0', $name);
    $name = strtolower($name);

    $full_path = $path . $name . $ext;

    return $full_path;
}
