<?php 
include('storage.php');
session_start();

if(isset($_GET['logout'])) {

    session_destroy();
    var_dump("Logout");
} else {
    session_start();
    $logged_in = $_SESSION['logged_in'] ?? false;
    $username = '';
    
    if(!$logged_in) {
        $username = $_POST['username'] ?? '';
        $password = $_POST['password'] ?? '';
        if(isset($username) && strlen($username) !== 0) {
            var_dump($username);
            $usersStorage = new Storage(new JsonIO('users.json'));
            $user = $usersStorage->findOne(['username' => $username]);
            if($user['password'] === $password) {
                $logged_in = true;
                $_SESSION['logged_in'] = true;
                $_SESSION['username'] = $username;
                var_dump("Logged in!");
            }
        
        }
    } else {
        $username = $_SESSION['username'];
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
        <?php if($logged_in): ?>
            <div class="mx-auto max-w-md p-5 rounded-md bg-neural flex flex-col space-y-2">
                <h2 class="text-3xl font-bold">Logged in as <?=$username ?></h2>
                <a class="btn btn-primary font-bold mt-1" href="index.php">Main Page</a>

            </div>
        <?php else: ?>
        <form action="/login.php" method="post" autocomplete="off" class="mx-auto mt-3 w-6/12 p-10 max-w-md p-5 bg-neutral rounded-md">
            <h1 class="text-3xl  p-5 font-bold">Login</h1>
            <label class="form-control w-full">
                <div class="label">
                    <span class="label-text">Username</span>
                </div>
                <input type="text" name="username" placeholder="Type here" class="input input-bordered w-full"/>
            </label>

            <label class="form-control w-full">
                <div class="label">
                    <span class="label-text">Password</span>
                </div>
                <input type="password" name="password" placeholder="Type here"
                    class="input input-bordered w-full mb-2"  /> 
            </label>
            <input type="submit" value="Login" class="btn btn-primary font-bold">
        </form>
        <?php endif; ?>

    </div>
</body>

</html>