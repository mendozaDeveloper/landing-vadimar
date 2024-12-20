<script setup>
import { ref, watch, onMounted, onBeforeUnmount } from 'vue'

import SideBar from './home/SideBar.vue'

const showMenu = ref(false)

const loading = ref(true)
const percentage = ref(0)
const backgroundColor = ref('#FFF')
const textOpacity = ref(1)
const hideText = ref(false)
const showLogo = ref(false)
const preloaderOpacity = ref(1)
const translateX = ref('translateX(0%)')

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
    } else {
        header.classList.remove('fixed-top')
    }
}

watch(showMenu, (newVal) => {
    document.body.style.overflow = newVal ? 'hidden' : 'auto'
})

onMounted(() => {
    window.addEventListener('scroll', handleScroll)

    // preloader
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
})

onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll)
})
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
                    <div class="col-md-6 text-center">
                        <div
                            v-if="!hideText"
                            class="loading-text bodoni72cregular"
                            :style="{ opacity: textOpacity }"
                        >
                            {{ percentage }}%
                        </div>
                    </div>
                    <div class="col-md-6"></div>
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
        </div>
    </div>
</template>
