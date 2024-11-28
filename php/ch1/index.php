<?php

$books = [
    [
        'name' => 'Do androids dream of electric Sheep',
        'author' => 'Phillip K. Dick',
        'releaseYear' => 1968,
        'purchaseUrl' => 'http://example.com'
    ],
    [
        'name' => 'Project Hail Mary',
        'author' => 'Andrew Wier',
        'releaseYear' => 2021,
        'purchaseUrl' => 'http://example.com'
    ],
    [
        'name' => 'The Martian',
        'author' => 'Andrew Wier',
        'releaseYear' => 2021,
        'purchaseUrl' => 'http://example.com'
    ],
];

$filteredBooks = array_filter($books, function ($y) {
    return $y['author'] > 'Andriew Wier';
});

require './index.view.php';