<?php

$config = require('./config.php');
$db = new Database($config['database']);

define('CURRENT_USER_ID',  1);


$note = $db->query("select * from notes where id = :id", [':id' => $_GET['id']])->findOrFail();

authorize($note['uid'] === CURRENT_USER_ID);

// Present page
$heading = 'My Notes';
require './views/notes/show.view.php';
