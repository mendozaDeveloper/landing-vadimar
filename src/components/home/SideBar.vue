<script setup></script>

<template>
    <section class="sideMenu">
        <div class="container-fluid h-100">
            <div class="row h-100 d-flex">
                <div class="col-md-6 blockMenu">
                    <div class="row h-100">
                        <div class="col-md-4 d-flex align-items-end position-relative">
                            <div class="closeMenu">
                                <div><img src="@/assets/icon-close.svg" alt="" /></div>
                            </div>
                            <div>
                                <div class="d-flex align-items-center gap-4 mb-3">
                                    <div>
                                        <img src="@/assets/icon-marker-white.svg" alt="" />
                                    </div>
                                    <div>Calle Joaquín Capello 545 Miraflores, Lima - Perú</div>
                                </div>
                                <div class="d-flex align-items-center gap-4 mb-3">
                                    <div>
                                        <img src="@/assets/icon-phone-white.svg" alt="" />
                                    </div>
                                    <div class="d-flex align-items-center gap-4">
                                        <span>+511 604 3200</span>
                                    </div>
                                </div>
                                <div class="d-flex align-items-center gap-4 mb-3">
                                    <div>
                                        <img src="@/assets/icon-whatsapp-white.svg" alt="" />
                                    </div>
                                    <div class="d-flex align-items-center gap-4">
                                        <span
                                            >+51 970 076 318<br />
                                            +51 934 568 737<br />
                                            +51 957 514 759</span
                                        >
                                    </div>
                                </div>
                                <div class="d-flex align-items-center gap-4 mb-3">
                                    <div><img src="@/assets/icon-letter.svg" alt="" /></div>
                                    <div>
                                        <a
                                            href="mailto:ventas@vadimarperu.com"
                                            class="text-white text-decoration-none"
                                            >ventas@vadimarperu.com</a
                                        >
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-8">
                            <nav id="navbar_top" class="navbar menu">
                                <ul class="navbar-nav">
                                    <li class="nav-item">
                                        <RouterLink to="#testimonios" class="nav-link"
                                            >Home</RouterLink
                                        >
                                    </li>
                                    <li class="nav-item">
                                        <RouterLink to="#resultados" class="nav-link"
                                            >Acerca de nosotros</RouterLink
                                        >
                                    </li>
                                    <li class="nav-item">
                                        <RouterLink to="#beneficios" class="nav-link"
                                            >Pescados, mariscos, carnes kani kama y masa rollos
                                            primavera</RouterLink
                                        >
                                    </li>
                                    <li class="nav-item">
                                        <RouterLink to="#beneficios" class="nav-link"
                                            >Insumos para la industría alimentaria</RouterLink
                                        >
                                    </li>
                                    <li class="nav-item">
                                        <RouterLink to="#contacto" class="nav-link"
                                            >Contacto</RouterLink
                                        >
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 blockLogo d-flex justify-content-center align-items-end">
                    <div>
                        <img src="@/assets/logo-menu.svg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
