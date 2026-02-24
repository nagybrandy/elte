

<!DOCTYPE html>
<html lang="en" data-theme="forest">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="https://cdn.jsdelivr.net/npm/daisyui@4.10.2/dist/full.min.css" rel="stylesheet" type="text/css" />
    <script src="https://cdn.tailwindcss.com"></script>
</head>

<body class="p-0">
    <div class="header w-full text-3xl bg-neutral p-5 font-bold text-neutral-content text-center ">
        Roaster of Team Webprog
        <a class="btn btn-primary font-bold ml-10 mt-1" href="addplayer.php">Add player</a>
    </div>
    <?php 
        include('storage.php');
        $players_str = file_get_contents("players.json");
        $players = json_decode($players_str, true);
        //var_dump($players);
        $playerStorage = new Storage(new JsonIO('players.json'));
        var_dump($playerStorage);
    ?>
    <div
        class="w-[80vw] mx-auto mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-h-[80vh] overflow-y-scroll ">
        
        <?php foreach ($players as $player): ?>
            <div class="card card-side bg-base-300 shadow-xl">
                <figure class="h-full"><img src="./img/<?= $player['img'] ?>.jpg" class="h-full w-48 object-cover" />
                </figure>
                <div class="card-body mx-auto text-center w-full p-3 my-auto">
                    <h2 class="card-title text-center block"><?= $player['name']?></h2>
                    <div class="card-actions mx-auto text-center block">
                        <?php foreach($player['positions'] as $i => $position): ?>
                            <div class="badge <?= $i === 0 ? 'badge-primary' : 'badge-outline' ?> "><?= $position ?></div>
                        <?php endforeach; ?>
                        <div class="stat">
                            <div class="stat-title">Goals this season</div>
                            <div class="stat-value"><?= $player['goals2024'] ?></div>
                            <div class="stat-desc"><?= floor($player['goals2023'] / ($player['goals2024'] === 0 ? 1 : $player['goals2024']) * 100)?>% more than last season</div>
                        </div>
                    </div>
                </div>
            </div>
        <?php endforeach; ?>

    </div>
</body>

</html>