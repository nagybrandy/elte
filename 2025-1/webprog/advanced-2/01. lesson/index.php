<?php
require __DIR__ . '/vendor/autoload.php';
/* 
$json = json_decode(file_get_contents("./data/place.json"), true);
 */
$databaseDirectory = __DIR__ . "/data";

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

use CowSay\Cow;

$bessie = new Cow('Hello, Farm!');

// store the output in a variable
$output = $bessie->say();

// or just echo the object for direct output
echo $bessie;
?>
<!DOCTYPE html>
<html lang="en" data-theme="cupcake">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link href="https://cdn.jsdelivr.net/npm/daisyui@4.12.23/dist/full.min.css" rel="stylesheet" type="text/css" />
    <script src="https://cdn.tailwindcss.com"></script>
    <title>Document</title>

</head>

<body>
    <nav class="bg-green-800 text-left text-white p-4 text-2xl font-bold">
        <h1>Culture Places</h1>
    </nav>
    <div class="my-5 w-10/12 mx-auto gap-5 grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1  p-3">
        <?php foreach ($json as $place): ?>
            <div class="card bg-base-100 w-96 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title"><?= $place['title'] ?></h2>
                    <p><?= $place['description'] ?> </p>
                    <div class="w-full flex justify-end">
                        <div class="badge badge-primary badge-outline"><?= $place['country'] . ' - ' . $place['city'] ?> </div>
                    </div>
                </div>
            </div>
        <?php endforeach; ?>
    </div>
            <pre>
                <?php echo $output; ?>
            </pre>
</body>

</html>