<?php
include('storage.php');
session_start();
$user = false;

if(isset($_GET['logout'])) {
    session_destroy();
}

if(isset($_SESSION['user']) && !isset($_GET['logout'])) {
    $user = $_SESSION['user'];
}

if(isset($_POST['username'])) {
    $username = $_POST['username'];
    $password = $_POST['password'];
    $usersStorage = new Storage(new JsonIO('users.json'));
    $user = $usersStorage->findOne(['username' => $username, 'password' => $password]) ?? false;
    if($user) {
        $_SESSION['user'] = $user;
    }
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
        <?php if($user): ?>
            <div class="flex flex-col space-y-3 bg-neutral rounded-xl mx-auto mt-5 p-5">
            <h2 class="font-bold text-2xl">You are logged in as <?=$user['username'] ?></h2>
            <a class="btn btn-primary font-bold mt-1" href="index.php">Main Page</a>
            </div>
            <?php else: ?>
        <form action="login.php" method="post" class="mx-auto mt-3 w-6/12 p-10 bg-neutral rounded-xl">
            <h1 class="text-3xl  pb-5 font-bold">Login</h1>
            <label class="form-control w-full">
                <div class="label">
                    <span class="label-text">Username</span>
                </div>
                <input type="text" name="username" placeholder="Type here" class="input input-bordered w-full" value="<?= $form['name'] ?? '' ?>"/>
            </label>

            <label class="form-control w-full mb-5">
                <div class="label">
                    <span class="label-text">Password</span>
                </div>
                <input type="password" name="password" placeholder="Type here"
                    class="input input-bordered w-full"/>
            </label>

        
            <input type="submit" value="Login" class="btn btn-primary font-bold">
        </form>
        <?php endif; ?>

    </div>
</body>

</html>