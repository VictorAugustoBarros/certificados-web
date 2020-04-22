<?php

$_controller = $_REQUEST["controller"];
$_action = $_REQUEST["action"];

try {
    $_file_load = $_SERVER['DOCUMENT_ROOT'] . "/mvc/controllers/" . $_controller . ".php";

    if (file_exists($_file_load)) {
        require_once($_file_load);
        $_controller_name = $_controller;
        if (class_exists($_controller_name, false)) {
            $_controller = new $_controller_name();
            if (method_exists($_controller, $_action)) {
                $__r = $_controller->$_action($_REQUEST);
                $json_return = $__r;
            } else
                throw new Exception("Action not found");
        } else
            throw new Exception("Class not found");
    } else
        throw new Exception("File not found");

} catch (Exception $e) {
    $json_return["status"] = 0;
    $json_return["data"] = $e->getMessage();
}

die(json_encode($json_return));
