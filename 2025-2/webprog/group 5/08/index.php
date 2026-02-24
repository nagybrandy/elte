<?php 
    var_dump($_POST);
    echo "=========";

    $name = $_POST['name'] ?? "Anonymus";
    $color = $_POST['color'] ?? "#eee";
    echo $color;

    $data = [];
    $errors = [];

    function is_empty($key) {
        return !isset($_POST[$key]) || strlen($_POST[$key]) === 0;
    }

    var_dump(is_empty('name'));

    function validate(&$errors, &$data) {
       if(is_empty('name')) {
            $errors []= "Enter your name!";
       } 
       else if(strlen($_POST['name']) <= 3) {
            $errors []= "Name should be longer than 3!";
       }
       else {
            $data['name'] = $_POST['name'];
       }

       if(is_empty('email')) {
            $errors []= "Enter your email!";
        } 
        else if(!filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
            $errors []= "Enter a valid email!";
        }
        else {
            $data['email'] = $_POST['email'];
        }
    }

    validate($errors, $data);
    echo "<br>";
    var_dump($errors);
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="https://cdn.jsdelivr.net/npm/daisyui@5" rel="stylesheet" type="text/css" />
<script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
</head>
<body style="background-color: <?= $color ?>" >
    <?php 
        $list = ["Harry Potter- Philosopher's Stone", "Ted", "The Dark Knight", "Inception", "Harry Potter - Chamber of Secrets","Harry Potter - Prisoner of Azkaban" ];
        $list []= "Go!";
        var_dump($list);
    ?>

    <?php foreach($list as $key => $item): ?>
        <?php if(!str_contains($item, "Harry Potter")): ?>
            <h1><?= $key+1 . ". ". $item; ?></h1>
        <?php else: ?>
            <h1>!!!</h1>
        <?php endif; ?>
    <?php endforeach; ?>
    
    <form method="post" action="/" class="bg-base-300 w-md mx-auto p-5 rounded-md" novalidate>
        <h2>Fill out this form!</h2>
         <fieldset class="fieldset">
            <legend class="fieldset-legend">What is your favorite color?</legend>
            <input type="color" name="color" id="" value=<?= $color ?>>
        </fieldset>
       
        <fieldset class="fieldset">
            <legend class="fieldset-legend">What is your name?</legend>
            <input type="text" class="input" placeholder="Type here" name="name" value="<?= $data['name'] ?? '' ?>"/>
        </fieldset>
        <fieldset class="fieldset">
            <legend class="fieldset-legend">What is your email address?</legend>
            <input type="email" class="input" placeholder="Type here" name="email" value="<?= $data['email'] ?? '' ?>"/>
        </fieldset>
        <fieldset class="fieldset">
            <legend class="fieldset-legend">What is your age?</legend>
            <input type="number" class="input " placeholder="Type here" />
        </fieldset>
        
        <input type="submit" value="Send" class="btn btn-primary mt-2">

        <ul class="mt-5 text-red-500">
            <?php foreach($errors as $error): ?>
            <li><?= $error ?></li>
            <?php endforeach; ?>
        </ul>
    </form>
    <h1>Hello <?php echo $name ?></h1>
</body>
</html>