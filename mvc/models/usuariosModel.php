<?php

include($_SERVER['DOCUMENT_ROOT'] . "/mvc/models/database.php");

class usuariosModel extends Database
{

    public function __construct()
    {
        $this->connect_database();
    }

    public function getTableAll()
    {
        $sql = "SELECT
                  id_usuario,
                  login,
                  IF(st_admin = 'A', 'Sim', 'Não')
                FROM USUARIOS_UNI;";

        $st = $this->execute_query($sql);
        $dados = array();

        while ($row = mysqli_fetch_row($st)) {
            $dados[] = $row;
        }

        return $dados;
    }

    public function insert_user($_params)
    {
        $login = $_params["newUserLogin"];
        $senha = $_params["newUserSenha"];
        $admin = $_params["newUserAdmin"];

        $sql = "INSERT INTO USUARIOS_UNI (login, password, st_admin) VALUES ('$login', '$senha', '$admin')";
        $st = $this->execute_query($sql);

        if ($st) {
            return "Usuário cadastrado com sucesso!";

        } else {
            return "Erro ao cadastrar usuário!";
        }
    }

    public function userExists($_params)
    {
        $login = $_params["newUserLogin"];

        $sql = "SELECT * FROM USUARIOS_UNI WHERE login = '$login'";
        $st = $this->execute_query($sql);
        if (mysqli_num_rows($st) > 0) {
            return true;
        }
        return false;
    }
}

