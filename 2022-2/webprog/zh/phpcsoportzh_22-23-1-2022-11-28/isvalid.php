<?php
    $errors = [];
    
    // IDE KÉSZÍTSD EL A VALIDÁLÁST!


    // ITT ADD HOZZÁ A JSON FÁJLHOZ!
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Új kaja érkezett</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/elte-fi/www-assets@19.10.16/styles/mdss.min.css">
    <link rel="stylesheet" href="style.css">
    <title>Mentés</title>
</head>
<body>
   
    <!-- Ez jelenjen meg, ha valid -->
    <h1>Sikeres hozzáadás! 😍</h1>
    <a href='index.php'>Vissza a főoldalra</a>
    
    <!-- Ez pedig, ha nem valid -->
    <h1>Sikertelen hozzáadás! 😢😭</h1>
    <a href='addfood.php'>Új hozzzáadása</a>


<?php if ($errors) : ?>
        <ul style="font-size: 25px;color: red;">
        <?php foreach($errors as $error) : ?>
            <li><?= $error ?></li>
            <?php endforeach; ?>
        </ul>
<?php endif; ?>
</body>
</html>