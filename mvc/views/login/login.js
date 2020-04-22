$(document).ready(function () {
    getView('listar_login', 'mainContent');
});


$(document).ajaxComplete(function () {
    $("#login_form").submit(function (e) {
        e.preventDefault();

        var _frm = $("#login_form");

        $.ajax({
            type: 'POST',
            url: "/routes/" + _frm.data('url'),
            data: _frm.serialize(),
            success: function (data) {
                if (data == 'true'){
                    $("#login_error").hide();
                    window.location.href = '/certificados';

                }else{
                    $("#login_error").show();
                }
            }
        });
    });
});