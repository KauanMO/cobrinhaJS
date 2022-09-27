<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cobrinha</title>
    <link rel="stylesheet" href="cobra.css">
    <script type="module" src="/path/to/js.cookie.mjs"></script>
    <script src="cobra.js"></script>
</head>

<body>
    <h1>Jogo da cobrinha</h1>
    <canvas id="jogo"></canvas>
    <br>

<?php
    if (isset($_COOKIE["gameover"])) 
    echo $_COOKIE["gameover"];
?>
</body>

</html>