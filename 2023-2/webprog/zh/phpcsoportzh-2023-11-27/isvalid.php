<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Új kutyus érkezett!</title>
    <link rel="stylesheet" href="style.css">
    <title>Mentés</title>
</head>
<body>
<?php
    $errors = [];
?>
<div id="main">
        <h1></h1>
</div>

<?php if ($errors) : ?>
        <ul style="font-size: 25px;color: red;">
        <?php foreach($errors as $error) : ?>
            <li><?= $error ?></li>
            <?php endforeach; ?>
        </ul>
<?php endif; ?>


</body>
</html>