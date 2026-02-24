<?php 
$form = $_GET;
$data = [];
$errors = [];
session_start();
$user = $_SESSION['user'] ?? false;

if(!$user) {
    header("Location: index.php");
     exit();
}
function validate(&$data, &$errors, &$form) {
    /*
    - Enter a name!
    - Enter a name that is at least 4 characters long!
    - Enter the positions!
    - Enter the positions separated with comas!
    - Enter the number of goals!
    - The number of goals must be integers!
    */
    if(!isset($form['name']) || strlen(trim($form['name'])) === 0) {
        $errors []= "Enter a name!";
    } else if(strlen(trim($form['name'])) < 4) {
        $errors []= "Enter a name that is at least 4 characters long!";
    } else {
        $data['name'] = $form['name'];
    }


    if(!isset($form['goals2024']) || strlen(trim($form['goals2024'])) === 0) {
        $errors []= "Enter the number of goals!";
    } else if(!filter_var($form['goals2024'], FILTER_VALIDATE_INT)) {
        $errors []= "The number of goals must be integers!";
    } else {
        $data['goals2024'] = $form['goals2024'];
    }
    if(!isset($form['positions']) || strlen(trim($form['positions'])) === 0) {
        $errors []= "Enter the positions!";
    } else if(!preg_match('/^([^,]+)(,\s*[^,]+)*$/', $form['positions'])) {
        $errors []= "Enter the positions separated with comas!";
    } else {
        $data['positions'] = $form['positions'];
    }

    if(!isset($form['img'])) {
        $form['img'] = 'benke';
    } 
    
    $data['goals2023'] = 0;
    $data['img'] = $form['img'];
    return count($errors) === 0;
}

$is_valid = validate($data, $errors, $form);

if($is_valid) {
    $file_str = file_get_contents('players.json');
    $players = json_decode($file_str, true);
    $data['positions'] = explode(",", $data['positions']);
    $players []= $data;

    $json = json_encode($players, JSON_PRETTY_PRINT);
    file_put_contents('players.json', $json);

}
?>
<!DOCTYPE html>
<html lang="en" data-theme="forest">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Addplayer</title>
    <link href="https://cdn.jsdelivr.net/npm/daisyui@4.10.2/dist/full.min.css" rel="stylesheet" type="text/css" />
    <script src="https://cdn.tailwindcss.com"></script>
</head>

<body>
    <div class="header w-full text-3xl bg-neutral p-5 font-bold text-neutral-content text-center ">
        Roaster of Team Webprog
        <a class="btn btn-primary font-bold ml-10 mt-1" href="index.php">Main Page</a>
    </div>
    <div class="flex">
        <form action="addplayer.php" method="get" class="mx-auto mt-3 w-3/12 p-10">
            <h1 class="text-3xl  p-5 font-bold">Add a new player</h1>
            <label class="form-control w-full max-w-xs">
                <div class="label">
                    <span class="label-text">Name</span>
                </div>
                <input type="text" name="name" placeholder="Type here" class="input input-bordered w-full max-w-xs" value="<?= $form['name'] ?? '' ?>"/>
            </label>

            <label class="form-control w-full max-w-xs">
                <div class="label">
                    <span class="label-text">Goals</span>
                </div>
                <input type="number" name="goals2024" placeholder="Type here"
                    class="input input-bordered w-full max-w-xs"  value="<?= $form['goals2024'] ?? "" ?>"/>
            </label>

            <label class="form-control w-full max-w-xs">
                <div class="label">
                    <span class="label-text">Positions</span>
                </div>
                <input type="text" name="positions" placeholder="Type here"
                    class="input input-bordered w-full max-w-xs" value="<?= $form['positions'] ?? "" ?>"/>
                <div class="label">
                    <span class="label-text-alt">Write down the positions separated with a coma! ','</span>
                </div>
            </label>

            <select class="select w-full max-w-xs mb-3 select-bordered" name="img">
                <option disabled selected>Select the picture</option>
                <option value="batorini">Batorini</option>
                <option value="benke">Benke</option>
                <option value="carlaise">Carlaise</option>
                <option value="cher">Cher</option>
                <option value="dace">Dace</option>
                <option value="kiss">Kiss</option>
            </select>
            <input type="submit" value="Add new player" class="btn btn-primary font-bold">
        </form>

        <div class="results w-6/12  m-auto p-10">
            <?php if(!$is_valid): ?>
            <div class="errors">

                <h2 class="text-3xl mb-5 font-bold">Failed addition</h2>
                <?php foreach($errors as $error): ?>
                    <div role="alert" class="alert alert-error mb-2">
                        <span><?= $error ?></span>
                    </div>
                <?php endforeach; ?>

            </div>
            <?php else: ?>

            <div class="success">
                <h2 class="text-3xl mb-2 font-bold">Successful addition</h2>
                <a class="btn btn-primary font-bold mt-1" href="index.php">Go back to Main Page</a>
            </div>
            <?php endif; ?>

        </div>
    </div>
</body>

</html>