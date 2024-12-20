<script setup>
defineProps({
    showMenu: Boolean
})

const emit = defineEmits(['closeMenu'])

const handleLinkClick = () => {
    emit('closeMenu')
}
</script>

<template>
    <transition name="slide">
        <section v-if="showMenu" class="sideMenu">
            <div class="container-fluid h-100">
                <div class="row h-100 d-flex">
                    <div class="blockMenu">
                        <div class="row h-100">
                            <div class="col-md-4 d-flex align-items-end position-relative">
                                <div
                                    class="closeMenu d-none d-md-block"
                                    @click="$emit('closeMenu')"
                                >
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
                                <div
                                    class="closeMenu mt-4 d-block d-md-none"
                                    @click="$emit('closeMenu')"
                                >
                                    <div><img src="@/assets/icon-close.svg" alt="" /></div>
                                </div>
                                <nav id="navbar_top" class="navbar menu">
                                    <ul class="navbar-nav">
                                        <li class="nav-item">
                                            <RouterLink
                                                to="#home"
                                                class="nav-link"
                                                @click="handleLinkClick"
                                                >Home</RouterLink
                                            >
                                        </li>
                                        <li class="nav-item">
                                            <RouterLink
                                                to="#nosotros"
                                                class="nav-link"
                                                @click="handleLinkClick"
                                                >Acerca de nosotros</RouterLink
                                            >
                                        </li>
                                        <li class="nav-item">
                                            <RouterLink
                                                to="#la-especialidad"
                                                class="nav-link"
                                                @click="handleLinkClick"
                                                >Pescados, mariscos, carnes kani kama y masa rollos
                                                primavera</RouterLink
                                            >
                                        </li>
                                        <li class="nav-item">
                                            <RouterLink
                                                to="#industria"
                                                class="nav-link"
                                                @click="handleLinkClick"
                                                >Insumos para la industría alimentaria</RouterLink
                                            >
                                        </li>
                                        <li class="nav-item">
                                            <RouterLink
                                                to="#contacto"
                                                class="nav-link"
                                                @click="handleLinkClick"
                                                >Contacto</RouterLink
                                            >
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                    <div class="blockLogo d-flex justify-content-center align-items-end">
                        <div>
                            <img src="@/assets/logo-menu.svg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </transition>
</template>

<style lang="scss" scoped>
.slide-enter-active,
.slide-leave-active {
    transition: transform 0.5s ease, opacity 0.5s ease;
}

.slide-enter-from {
    transform: translateX(-100%);
    opacity: 0;
}

.slide-leave-to {
    transform: translateX(-100%);
    opacity: 0;
}
</style>
