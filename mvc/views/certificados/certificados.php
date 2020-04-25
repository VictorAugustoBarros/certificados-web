<html lang="pt">

<?php include($_SERVER['DOCUMENT_ROOT'] . "/mvc/views/header.php"); ?>

<body>
<div id="wrapper">
    <?php include($_SERVER['DOCUMENT_ROOT'] . "/mvc/views/side_bar.php"); ?>
    <div id="content-wrapper">
        <div>
            <?php include($_SERVER['DOCUMENT_ROOT'] . "/mvc/views/top_bar.php"); ?>

            <div id="certificadosContent">

            </div>
        </div>
    </div>

    <div id="mainModal" class="modal fade bs-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg" style="width: 450px">
            <div class="modal-content">
                <div>
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                    <div class="modal-header container d-block p-2">
                        <div class="row d-block">
                            <div class="col-sm-12">
                                <h4 class="modal-title"><b>Certificado</b></h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-body">

                </div>
                <div class="modal-footer">
                </div>
            </div>
        </div>
    </div>
</div>
</body>

<?php include($_SERVER['DOCUMENT_ROOT'] . "/mvc/views/footer.php"); ?>
</html>

<script type="text/javascript">
    $(document).ready(function () {
        getView('listar_certificados', 'certificadosContent');
    });
</script>