<?php

$request = $_SERVER['REQUEST_URI'];

session_start();
if(!isset($_SESSION['logado']))
{
    require __DIR__ . '/index.php';
    exit;
}

switch ($request) {
    case '/dashboard':
        require __DIR__ . '/mvc/views/dashboard/dashboard.php';
        break;

    case '/certificados':
        require __DIR__ . '/mvc/views/certificados/certificados.php';
        break;

    case '/usuarios':
        require __DIR__ . '/mvc/views/usuarios/usuarios.php';
        break;

    case '/turmas':
        require __DIR__ . '/index_turmas.php';
        break;

    case '/cursos':
        require __DIR__ . '/index_cursos.php';
        break;

    case '/logout':
        session_destroy();
        require __DIR__ . '/index.php';
        break;

    case '/':
        require __DIR__ . '/mvc/views/dashboard/dashboard.php';
        break;

    default:
        require __DIR__ . '/mvc/views/404.php';
        break;
}