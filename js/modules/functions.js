var icone_loading = "<div class=\"spinner\">\n" +
    "  <div class=\"rect1\"></div>\n" +
    "  <div class=\"rect2\"></div>\n" +
    "  <div class=\"rect3\"></div>\n" +
    "  <div class=\"rect4\"></div>\n" +
    "  <div class=\"rect5\"></div>\n" +
    "</div>";

function getView(ref, div) {
    var view = ref.split("_")[1];

    $.ajax({
        url: '/mvc/views/' + view + '/' + ref + '.html',
        type: "POST"

    }).done(function (data) {
        $("#" + div).html(data);

    }).fail(function (data) {
        console.log("error");
        console.log(data);
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

function loadTable(ref, divTable, _validar_delete, filtro) {
    _validar_delete = _validar_delete || false
    filtro = filtro || {}


    var view = ref.split("_")[1];
    $('#' + divTable + ' > tbody').html('');

    var icone_edit = $('#' + divTable).data('edit') == false ? '' : '<a style="cursor:pointer;" class="table-actions" id="edit" > <i class="fas fa-external-link-alt" title="Editar"></i></a>';
    var icone_delete = $('#' + divTable).data('delete') == false ? '' : '<a style="cursor:pointer;padding-left: 40px;padding-right: 30px" class="table-actions" id="remove"> <i class="fas fa-trash-alt" title="Excluir"></i></a>';
    var icone_view = $('#' + divTable).data('view') == true ? '<a style="cursor:pointer;" class="table-actions" id="view"> <i class="fas fa-search" title="View"></i></a>' : '';

    var table = $('#' + divTable).DataTable({
        "destroy": true,
        "cache": false,
        "oLanguage": {
            "sInfo": "Visualizando _START_ até _END_ de _TOTAL_ registros",
            "sLoadingRecords": icone_loading,
            "sEmptyTable": "Nenhum registro encontrado",
            "sSearch": "Buscar:",
            "sLengthMenu": 'Listar <select>' +
            '<option value="10">10</option>' +
            '<option value="25">25</option>' +
            '<option value="50">50</option>' +
            '<option value="100">100</option>' +
            '<option value="-1">Todos</option>' +
            '</select> registros',
            "oPaginate": {
                "sPrevious": "Anterior",
                "sNext": "Próximo",
            }
        },
        "columnDefs": [{
            "targets": -1,
            "orderable": false,
            "defaultContent": icone_edit +
            icone_delete +
            icone_view
        }],
        "ajax": {
            "url": '/routes/' + view + "/getListTable",
            type: 'POST',
            data: {
                'table': divTable,
                'filtro': filtro
            },
            "success": function (result) {
                table.rows.add(result).draw();
                $('#' + divTable).find('th:last').css('width', '140px');
            }
        }
    });

    $('#' + divTable + ' tbody').on('click', 'a', function () {
        var data = table.row($(this).parents('tr')).data();

        ($(this).data('save') === false) ? $(".btn-submit").hide() : $(".btn-submit").show();

        if (this.id == 'remove') {
            alert_confirm('Deseja realmente remover o registro?', 'btnDeletar', false, _validar_delete ? 'validarDelete' : 'Delete', _params = {
                id: data[0],
                table: table,
                ref: ref
            });

        } else if (this.id == 'edit') {
            btnAdicionar(ref, divTable, data[0]);
        }
    });
}