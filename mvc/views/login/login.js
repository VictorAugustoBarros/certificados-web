$(document).ready(function () {
    getView('listar_login', 'mainContent');
});

function hideErr() {
    $("#login_error").hide();
}

function submitFormLogin() {
    var data = {
        dado_login: $("#dado_login").val(),
        dado_senha: $("#dado_senha").val(),
    }

    var _frm = $("#login_form");

    $.ajax({
        type: 'POST',
        url: "/routes/" + _frm.data('url'),
        data: data,
        success: function (response) {
            if (response == 'true') {
                $("#login_error").hide();
                window.location.href = '/dashboard';

            } else {
                $("#login_error").show();
            }
        }
    });

    return false;
}