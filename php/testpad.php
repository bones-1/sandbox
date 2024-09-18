<?php
$string = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil incidunt quod itaque nostrum voluptatibus sunt quasi esse, harum, corrupti ipsa maiores excepturi recusandae perferendis blanditiis asperiores saepe dignissimos odit ut?";

$token = strtok($string, ' ');
$from = ['a', 'e', 'i', 'o', 'u'];
$to = "\u{1F60E}";
while ($token !== false) {
    // foreach ($replace as $vowel) {
    //     $token = strtr($token, $vowel, ":");
    // }

    $token = str_replace($from, $to, $token);
    printf("%s<br>", $token);
    $token = strtok(' ');
}
