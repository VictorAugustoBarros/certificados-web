<?php
session_start();

if (!isset($_SESSION['logado'])) {
    require __DIR__ . '/mvc/views/login/login.php';
    exit();
}

if (isset($_SESSION['logado'])) {
    require __DIR__ . '/mvc/views/certificados/certificados.php';
    exit();
}

?>