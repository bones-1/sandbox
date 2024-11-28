<?php

$config = require('./config.php');
$db = new Database($config['database']);

$notes = $db -> query('select * from notes;') -> get();

// Present page
$heading = 'My Notes';
require './views/notes/index.view.php';


