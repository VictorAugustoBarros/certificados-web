<?php

class Database
{
    public $db;
    public $con;

    public function connect_database()
    {
        $this->con = mysqli_connect('192.168.0.9', 'root', 'rootpassword', 'certificados_dev', 6005);
        if (!$this->con){
            die("Falha de conexão ao Banco: " . mysqli_connect_error());
        }
    }

    public function execute_query($sql)
    {
        return mysqli_query($this->con, $sql);
    }
}