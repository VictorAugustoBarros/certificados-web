$(document).ready(function () {
    getView('listar_usuarios', 'usuariosContent');
});

function submitForm() {
    var admin = "N"
    if ($('#newUserAdmin').is(':checked')) {
        admin = "A"
    }

    var data = {
        newUserLogin: $("#newUserLogin").val(),
        newUserSenha: $("#newUserSenha").val(),
        newUserAdmin: admin
    }

    var _frm = $("#user_form");

    $.ajax({
        type: 'POST',
        url: "/routes/" + _frm.data('url'),
        data: data,
        success: function (response) {
            alert(response);
        }
    });
}

function userExists() {
    var data = {
        newUserLogin: $("#newUserLogin").val()
    }

    $.ajax({
        type: 'POST',
        url: "/routes/usuarios/userExists",
        data: data,
        success: function (response) {
            if (response){

            }
        }
    });
}