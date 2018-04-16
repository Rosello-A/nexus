<?php
/*
    Page d'accueil
*/
    $titlePage = "Accueil";
    $idPage = "index";

    require_once("mvc/view/header.php");

    require_once("mvc/view/sections/$idPage.php");

    require_once("mvc/view/footer.php");
?>
