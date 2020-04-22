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
</div>
</body>

<?php include($_SERVER['DOCUMENT_ROOT'] . "/mvc/views/footer.php"); ?>
</html>

<script type="text/javascript">
    $(document).ready(function () {
        getView('listar_certificados', 'certificadosContent');
    });
</script>