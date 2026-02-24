<?php echo "Hello!" ?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <?php 
    echo "Hello!";
    $name = "Bendi";
    $color = "green"
    ?>
</head>
<body style="color: <?php echo $color?>" >
    <h1>Hello!</h1>
    <?php 
        function greet($name) {
            return "Hello " . $name . "!";
        }

        echo greet("Bendi");

    ?>
</body>
</html>