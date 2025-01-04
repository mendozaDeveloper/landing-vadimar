<script setup>
import { ref, watch, onMounted, onBeforeUnmount } from 'vue'

import SideBar from './home/SideBar.vue'
import PoliticasPrivacidad from './home/PoliticasPrivacidad.vue'

const showMenu = ref(false)

const loading = ref(true)
const percentage = ref(0)
const backgroundColor = ref('#FFF')
const textOpacity = ref(1)
const hideText = ref(false)
const showLogo = ref(false)
const preloaderOpacity = ref(1)
const translateX = ref('translateX(0%)')
const showScrollTopButton = ref(false)

// verificar si el preloader debe mostrarse
const lastVisit = localStorage.getItem('lastVisit')
const currentDate = new Date()
const fifteenDaysInMillis = 15 * 24 * 60 * 60 * 1000 // 15 días en milisegundos

// Si la fecha de la última visita no existe o han pasado más de 15 días
const isFirstVisit = ref(!lastVisit || currentDate - new Date(lastVisit) > fifteenDaysInMillis)

const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
}

function interpolateColor(progress) {
    const startColor = { r: 255, g: 255, b: 255 } // Blanco (#FFF)
    const endColor = { r: 225, g: 38, b: 29 } // Rojo (#E1261D)

    const r = Math.floor(startColor.r + (endColor.r - startColor.r) * (progress / 100))
    const g = Math.floor(startColor.g + (endColor.g - startColor.g) * (progress / 100))
    const b = Math.floor(startColor.b + (endColor.b - startColor.b) * (progress / 100))

    return `rgb(${r}, ${g}, ${b})`
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

    // preloader
    if (isFirstVisit.value) {
        // Actualizar la fecha de la última visita
        localStorage.setItem('lastVisit', currentDate.toISOString())

        // Preloader
        const interval = setInterval(() => {
            if (percentage.value < 100) {
                percentage.value += 1

                backgroundColor.value = interpolateColor(percentage.value)
            } else {
                clearInterval(interval)

                // Iniciar la transición del texto
                setTimeout(() => {
                    textOpacity.value = 0
                    setTimeout(() => {
                        hideText.value = true
                        showLogo.value = true
                    }, 1000)
                }, 500)

                // Transición final: slider hacia la izquierda
                setTimeout(() => {
                    translateX.value = 'translateX(-100%)'
                    preloaderOpacity.value = 0
                    setTimeout(() => {
                        loading.value = false
                    }, 1000)
                }, 4000)
            }
        }, 50)
    } else {
        // Si no es la primera visita o han pasado menos de 15 días, no mostrar el preloader
        loading.value = false
    }
})

onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll)
})

// const videoUrl = ref('https://www.youtube.com/embed/26PaWIYYaLg')
</script>

<template>
    <div>
        <!---->
        <div
            v-if="loading"
            class="preloader"
            :style="{
                backgroundColor: backgroundColor,
                transform: translateX,
                opacity: preloaderOpacity
            }"
        >
            <div class="container">
                <div class="row">
                    <div class="col-12 text-center">
                        <div
                            v-if="!hideText"
                            class="loading-text bodoni72cregular"
                            :style="{ opacity: textOpacity }"
                        >
                            {{ percentage }}%
                        </div>
                    </div>
                </div>
            </div>
            <img
                v-if="showLogo"
                class="logo-loading"
                src="@/assets/logo_loader.svg"
                alt="vadimar"
            />
        </div>

        <div v-else class="main-content">
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
