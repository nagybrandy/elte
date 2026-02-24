<?php
$databaseDirectory = __DIR__ . "./../data";

$config = [
    "timeout" => false,
];
$newsStore = new \SleekDB\Store("places", $databaseDirectory, $config);

/* 
foreach ($json as $place) {
    $place['id'] = uniqid();
    $newsStore->insert($place);
} */

$json = $newsStore->findAll();

function getPlaces()
{
    global $newsStore;
    return $newsStore->findAll();
}

