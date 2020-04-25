<?php

include($_SERVER['DOCUMENT_ROOT'] . "/mvc/models/database.php");

class LoginModel extends Database
{
    public function __construct($login, $senha)
    {
        $this->login = $login;
        $this->senha = $senha;
        $this->connect_database();
    }

    public function validaLogin()
    {
        session_start();

        $sql = "SELECT * FROM USUARIOS_UNI WHERE login = '$this->login' and password = '$this->senha'";
        $st = $this->execute_query($sql);

        $row = mysqli_fetch_assoc($st);
        if ($row){
            $_SESSION['id'] = $row["id_usuario"];
            $_SESSION['user'] = $row["login"];
            $_SESSION['adm'] = false;
            $_SESSION['logado'] = true;

            if ($row["st_admin"] == "A"){
                $_SESSION['adm'] = true;
            }

            return true;

        }else {
            return false;
        }
    }
}

