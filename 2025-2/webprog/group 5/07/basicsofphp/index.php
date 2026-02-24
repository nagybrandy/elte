<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<?php $color = "green" ?>
<body style="color: <?php echo $color ?>">
    <h1>Hello World</h1>
    
    <?php 
    $name = "Bendi";
    var_dump($name);

    function greetMe($name) {
        return "Hello " . $name . "!";
    }

    echo  greetMe("bendi");
    ?>
</body>
</html>