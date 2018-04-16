<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Nexus Bar - <?= $titlePage; ?></title>
    <link rel="stylesheet" type="text/css" href="assets/css/reset.css">
    <link rel="stylesheet" type="text/css" href="assets/css/main.css">
    <link rel="stylesheet" type="text/css" href="assets/css/index.css">
</head>
<body>
    <header id="header">
        <img src="assets/img/logo/nexus.jpg" alt="Logo du Nexus Bar">
        <button id="btn-mobile-nav" class="off"><i class="fas fa-bars"></i></button>
        <nav>
            <a href="index.php">Accueil</a>
            <a href="#concept"> Le concept</a>
            <a href="#">Venir au nexus</a>
            <a href="#events">Events</a>
            <a href="groupes.php">CE, BDE & Groupes</a>
            <a href="#"><i class="fab fa-facebook"></i></a>
        </nav>
    </header>

    <main id="<?= $idPage; ?>">