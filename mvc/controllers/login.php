<?php

include($_SERVER['DOCUMENT_ROOT'] . "/mvc/models/loginModel.php");

class Login
{

    public function validaLogin($_params)
    {

        $model_login = new LoginModel($_params["dado_login"], $_params["dado_senha"]);
        $result = $model_login->validaLogin();

        return $result;
    }
}