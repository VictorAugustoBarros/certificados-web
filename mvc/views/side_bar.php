<ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
    <a class="sidebar-brand d-flex align-items-center justify-content-center" href="/dashboard">
        <div>
            <img src="/images/logo.png" style="height: 100px;width: 100px" alt="">
        </div>
    </a>

    <hr class="sidebar-divider">
    <li class="nav-item">
        <a class="nav-link" href="/dashboard">
            <span>Dashboard</span></a>
    </li>

    <hr class="sidebar-divider">
    <li class="nav-item">
        <a class="nav-link" href="/certificados">
            <span>Certificados</span></a>
    </li>

    <?php
    if ($_SESSION['adm'] == true) {
        include("side_bar_admin.php");
    }
    ?>
</ul>
