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
 