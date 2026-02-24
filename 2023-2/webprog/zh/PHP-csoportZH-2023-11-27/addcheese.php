<?php 
 $errors = [];
 $data = [];
 $input = $_GET;

 $is_valid = validate($data, $errors, $input);
 function validate(&$data, &$errors, $input) {
     // CREATE VALIDATION LOGIC HERE!

     return count($errors) === 0;
 }

  // Itt add hozzá a jsonhöz, ha valid!
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Új sajt érkezett!</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>Új sajt érkezett!</h1>

    <form action="addcheese.php" method="get" novalidate> 
        <h4>Sajt neve</h4>
        <input type="text" name="name">
        
        <h4>Származási hely</h4>
        <select name="origin">
            <option value="gr">Görögország</option>
            <option value="fr">Franciaország</option>
            <option value="it">Olaszország</option>
            <option value="ger">Németország</option>
        </select>
        
        <h4>Típus</h4>
        <input type="text" name="type">
        
        <h4>Lejárati hónap</h4>
        <input type="number" name="age_m">
        
        <input type="submit" value="Küldés">
    </form>
    <div id="results">
        <!-- Ez jelenjen meg, ha valid -->
        <h2>Sikeres hozzáadás! 😍</h2>
        <a href='index.php'>Vissza a főoldalra</a>

        <!-- Ez pedig, ha nem valid -->
        <h2>Sikertelen hozzáadás! 😢😭</h2>
        <ul id="errors">
            <li>Legalább 4 karakter hosszú nevet adj meg szókozök nélkül!</li> <!-- sima -->
            <li>Add meg a típusát!</li> <!-- regex -->
            <li>Add meg, hogy hány hónapos a sajt!</li> <!-- filter_var -->
        </ul>
    </div>

    <ul id="help">
            <li><a href="addcheese.php?name=&origin=gr&type=&age_m=">❌cheesename ❌cheesetype ❌cheeseage</a></li>
            <li><a href="addcheese.php?name=Feta&origin=gr&type=&age_m=">✅cheesename ❌cheesetype ❌cheeseage</a></li>
            <li><a href="addcheese.php?name=Feta&origin=gr&type=fehér&age_m=">✅cheesename ✅cheesetype ❌cheeseage</a></li>
            <li><a href="addcheese.php?name=Feta&origin=gr&type=fehér&age_m=3">✅cheesename ✅cheesetype ✅cheeseage</a></li>
    </ul>
</body>
</html>
