<header>
  <nav class="navbar navbar-expand-xxl navbar-dark py-3 mt-3 p-3 p-md-4 ps-lg-5 pe-lg-5">
    <div class="container-fluid p-0">
      <a class="navbar-brand text-primary" href="#">
        <div class="d-none d-sm-none d-md-block">
          <h1><strong>Biblioteca González</strong></h1>
        </div>
        <div class="d-block d-sm-block d-md-none">
          <h1><strong>Biblioteca González</strong></h1>
        </div>
      </a>
      <button class="rounded-2 navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link <?php if ($sec == 3) echo "active"; ?>" href="quienes-somos">Quienes Somos</a>
          </li>
          <li class="nav-item">
            <a class="nav-link <?php if ($sec == 4) echo "active"; ?>" href="archivo">Archivos</a>
          </li>
          <li class="nav-item">
            <a class="nav-link <?php if ($sec == 6) echo "active"; ?>" href="montajes">Montajes</a>
          </li>
          <li class="nav-item">
            <a class="nav-link <?php if ($sec == 7) echo "active"; ?>" href="gato">¿Que dice el gato?</a>
          </li>
          <li class="nav-item">
            <a class="nav-link <?php if ($sec == 66) echo "active"; ?>" href="horacio">Horacio Gonzáles</a>
          </li>
          <li class="nav-item">
            <a class="nav-link <?php if ($sec == 61) echo "active"; ?>" href="mosaicos">Mosaicos</a>
          </li>
          <li class="nav-item">
            <a class="nav-link <?php if ($sec == 2) echo "active"; ?>" href="actividades">Actividades</a>
          </li>
          <li class="nav-item">
            <a class="nav-link <?php if ($sec == 1) echo "active"; ?>" href="portada">Portada</a>
          </li>
          <li class="nav-item">
            <a class="nav-link <?php if ($sec == 15) echo "active"; ?>" href="amigos">Amigxs</a>
          </li>


          <li class="nav-item">
            <a class="nav-link <?php if ($sec == 50) echo "active"; ?>" href="textos">Textos</a>
          </li>
          <li class="nav-item">
            <a class="nav-link <?php if ($sec == 100) echo "active"; ?>" href="patrocinadores">Patrocinadores</a>
          </li>
          <li class="nav-item">
            <a class="nav-link <?php if ($sec == 12) echo "active"; ?>" href="imagenes">Accesos</a>
          </li>

          <li class="nav-item">
            <a class="nav-link text-primary link-primary" target="_blank" href="">Web</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-primary link-primary" href="logout">Cerrar sesión</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</header>