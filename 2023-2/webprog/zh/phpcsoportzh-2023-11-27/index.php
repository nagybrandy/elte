<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Akita ELTEnyészet</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div id="main">
        <h1>Akita ELTEnyészet</h1>
    </div>
    <table>
        <tr>
           <th>
            <form action="index.php" method="get">
                <select name="nem" id="szures">
                    <option>Szűrés</option>
                    <option value="osszes">Összes</option>
                    <option value="kan">Kan</option>
                    <option value="szuka">Szuka</option>
                </select>
                </form>
           </th>
           <th>Név</th>
           <th>Szín</th>
           <th>Születési idő</th>
           <th>Nem</th>
        </tr>
         <?php
            $kutyaszinek = ["vörös","barna-fehér", "szürkésbarna-fehér", "fehér", "sötétbarna", "szürke"];
        ?>
    </table>
    <button onclick="window.location.href='adddoggo.php'">Új kutya érkezett!</button>
    <script>
        let szures = document.querySelector("#szures");
        szures.addEventListener("change", function(){
            if(szures.value == "osszes") window.location.href='index.php';
            else window.location.href='index.php?nem=' + szures.value;
        })
    </script>
</body>
</html>