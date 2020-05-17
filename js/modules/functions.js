var icone_loading = "<div class=\"spinner\">\n" +
    "  <div class=\"rect1\"></div>\n" +
    "  <div class=\"rect2\"></div>\n" +
    "  <div class=\"rect3\"></div>\n" +
    "  <div class=\"rect4\"></div>\n" +
    "  <div class=\"rect5\"></div>\n" +
    "</div>";

function getView(ref, view, subdir = "", parms = []) {
    $(".loading-icon").show();
    var dir = getRoutes(view);
    parametros = {
        modulo: view,
        params: parms ? parms : null
    };
    jQuery.ajax({
        url: 'mvc/view/' + dir + '/' + (subdir ? subdir + '/' : '') + view + '.php',
        type: "POST",
        data: parametros,
        success: function (data) {
            $(".loading-icon").hide();
            $("#" + ref).html(data);
        }
    });
}

function btnAdicionar(ref, modal, idReferencia) {
    idReferencia ? idReferencia : '';
    var view = ref.split("_")[1];
    var modal = $("#mainModal");

    modal.find('.modal-body').html(icone_loading);
    modal.modal('show');

    $.ajax({
        url: '/mvc/views/' + view + '/' + ref + '.html',
        type: 'GET',
        data: {
            'view': view,
            'idReferencia': idReferencia
        },
        success: function (html) {
            modal.find('.modal-body').html(html);
            modal.find('.btn-submit').attr("disabled", false);
        }
    });
}

function btnAdicionar(ref, modal, idReferencia) {
    idReferencia ? idReferencia : '';
    var view = ref.split("_")[1];
    var modal = $("#mainModal");

    modal.find('.modal-body').html(icone_loading);
    modal.modal('show');

    $.ajax({
        url: '/mvc/views/' + view + '/' + ref + '.html',
        type: 'GET',
        data: {
            'view': view,
            'idReferencia': idReferencia
        },
        success: function (html) {
            modal.find('.modal-body').html(html);
            modal.find('.btn-submit').attr("disabled", false);
        }
    });
}

function alert_confirm(_msg, _callback_s = false, _callback_n = false, _validar_delete=false, _params={}) {
    _callback_s ? _callback_s : false
    _callback_n ? _callback_n : false
    _params ? _params : {}
    alert(_validar_delete);

    $.alertable.confirm(_msg).then(function () {
        if (_validar_delete) {
            window[_validar_delete](_params, _callback_s);
        } else if (_callback_s)
            window[_callback_s](_params);
    }, function () {
        if (_callback_n)
            window[_callback_n](_params);
    });
}

function loadTable(_table, _params) {
    try {
        var dir = getRoutes(_table);
        $('#' + _params.table).dynatable({
            dataset: {
                ajax: true,
                ajaxDataType: 'json',
                ajaxCache: null,
                ajaxMethod: 'POST',
                ajaxUrl: 'mvc/routes/' + dir + '/getListTable',
                ajaxOnLoad: true,
                ajaxData: _params,
                records: []
            }
        });
    } catch (e) {
        setNotification(e, 0);
    }
}