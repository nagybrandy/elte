<?php
require_once './vendor/autoload.php';

$databaseDirectory = __DIR__ . "/data";
$config = [
    "timeout" => false
];
$newsStore = new \SleekDB\Store("dishes", $databaseDirectory, $config);

$json = json_decode(file_get_contents("dishes.json"), true);

$data = $newsStore->findAll();

?>
<!DOCTYPE html>
<html lang="en" data-theme="cupcake">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <link href="https://cdn.jsdelivr.net/npm/daisyui@4.12.23/dist/full.min.css" rel="stylesheet" type="text/css" />
    <script src="https://cdn.tailwindcss.com"></script>
</head>

<body>
    <!--    <pre>
        <?= $output; ?>
    </pre> -->
    <nav class="bg-primary text-primary-content p-3 font-bold text-xl">
        <h1>International Food Library</h1>
    </nav>
    <div class="mt-5 grid grid-cols-3 w-10/12 mx-auto p-4 gap-5">
        <?php foreach ($data as $dish): ?>
            <div class="card bg-base-100  shadow-xl">
                <div class="card-body">
                    <h2 class="card-title"><?= $dish['name'] ?></h2>
                    <p> <?= $dish['description'] ?></p>
                    <div class="w-full flex justify-end">
                        <div class="badge badge-primary badge-outline"><?= $dish['country'] . ' - ' . $dish['city'] ?></div>
                    </div>
                </div>
            </div>
        <?php endforeach; ?>
    </div>
</body>
</html>