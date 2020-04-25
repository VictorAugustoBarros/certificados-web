<?php

include($_SERVER['DOCUMENT_ROOT'] . "/mvc/models/usuariosModel.php");

class Usuarios
{

    public function getListTable($_params)
    {
        $_dados_table = array();
        $model_usuarios = new usuariosModel();

        switch ($_params['table']) {
            case 'dataTableUsuarios':
                $_dados_table = $model_usuarios->getTableAll();
                break;
        }
        $_resp = $_dados_table;
        return $_resp;
    }

    public function insertUser($_params)
    {
        $model_usuarios = new usuariosModel();
        $result = $model_usuarios->insert_user($_params);

        return $result;
    }
}