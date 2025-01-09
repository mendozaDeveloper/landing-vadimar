<script setup>
import { ref, watch, onMounted, onBeforeUnmount } from 'vue'

import SideBar from './home/SideBar.vue'
import PoliticasPrivacidad from './home/PoliticasPrivacidad.vue'

const showMenu = ref(false)
const showScrollTopButton = ref(false)

const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
}

const handleScroll = () => {
    const header = document.getElementById('header')
    if (window.scrollY > 30) {
        header.classList.add('fixed-top')
        showScrollTopButton.value = true
    } else {
        header.classList.remove('fixed-top')
        showScrollTopButton.value = false
    }
}

watch(showMenu, (newVal) => {
    document.body.style.overflow = newVal ? 'hidden' : 'auto'
})

onMounted(() => {
    window.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
    <div>
        <div class="main-content">
            <SideBar :showMenu="showMenu" @closeMenu="showMenu = false"></SideBar>

            <header id="header">
                <div class="container">
                    <div class="row">
                        <div class="d-flex justify-content-between">
                            <button
                                @click="showMenu = true"
                                class="btnMenu lato-bold btn d-flex justify-content-center align-items-center"
                            >
                                Me<br />nu
                            </button>
                            <RouterLink
                                to="#contacto"
                                class="btnCustom btn d-flex justify-content-center align-items-center"
                                >CONTACTO</RouterLink
                            >
                        </div>
                    </div>
                </div>
            </header>

            <slot></slot>

            <button v-show="showScrollTopButton" @click="scrollToTop" class="scroll-top-button">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    class="bi bi-chevron-up"
                    viewBox="0 0 16 16"
                >
                    <path
                        fill-rule="evenodd"
                        d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708z"
                    />
                </svg>
            </button>
        </div>
    </div>

    <div
        class="modal fade"
        id="videoModal"
        tabindex="-1"
        aria-labelledby="videoModalLabel"
        aria-hidden="true"
    >
        <div class="modal-dialog modal-dialog-centered custom-modal-width">
            <div class="modal-content">
                <div class="modal-header">
                    <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                    ></button>
                </div>
                <div class="modal-body">
                    <div id="videoContainer"></div>
                </div>
            </div>
        </div>
    </div>

    <PoliticasPrivacidad />
</template>

<style scoped>
#videoContainer {
    min-height: 400px;
}
</style>
