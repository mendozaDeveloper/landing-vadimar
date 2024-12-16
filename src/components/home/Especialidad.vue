<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'

import { Navigation } from 'swiper/modules'
import { ref } from 'vue'

const modules = [Navigation]

const activeIndex = ref(0)

const images = [
    {
        image: '/src/assets/img-productos/salmon-atlantico.png',
        link: 'salmon-atlantico'
    },
    {
        image: '/src/assets/img-productos/salmon-ahumado.png',
        link: 'salmon-ahumado-carpaccios'
    },
    {
        image: '/src/assets/img-productos/ovas-salmon.png',
        link: 'ovas-salmon'
    },
    {
        image: '/src/assets/img-productos/atun.png',
        link: 'atun-aleta-amarilla'
    },
    {
        image: '/src/assets/img-productos/trucha.png',
        link: 'trucha-arcoiris-nacional'
    },
    {
        image: '/src/assets/img-productos/paiche-amazonico.png',
        link: 'paiche-amazonico'
    },
    {
        image: '/src/assets/img-productos/mejillones-patagonicos.png',
        link: 'mejillones-patagonicos'
    },
    {
        image: '/src/assets/img-productos/kani-kana.png',
        link: 'kani-kama'
    },
    {
        image: '/src/assets/img-productos/carne-wagyu.png',
        link: 'carne-wagyu'
    },
    {
        image: '/src/assets/img-productos/cordero-patagonico.png',
        link: 'cordero-patagonico'
    },
    {
        image: '/src/assets/img-productos/masa-primavera.png',
        link: 'masa-primavera-spring-roll'
    }
]

const onSlideChange = (swiper) => {
    activeIndex.value = swiper.realIndex
}

const scrollToBlock = (id) => {
    const element = document.getElementById(id)
    if (element) {
        const offset = 100
        const elementPosition = element.getBoundingClientRect().top + window.scrollY
        const offsetPosition = elementPosition - offset

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        })
    }
}

const breakpoints = {
    0: {
        slidesPerView: 1,
        centeredSlides: false
    },
    768: {
        slidesPerView: 2,
        centeredSlides: false
    },
    992: {
        slidesPerView: 3,
        centeredSlides: true
    }
}
</script>

<template>
    <section class="contentPadding">
        <div class="container">
            <div class="row">
                <div class="d-flex flex-column justify-content-center align-items-center">
                    <div class="containerTitles text-center mb-5">
                        <h2 class="mainTit corinthia-bold mt-0 mb-0">La Especialidad</h2>
                        <h4 class="backTit">Nuestros</h4>
                    </div>
                    <div class="containerTitles text-center">
                        <h3 class="secondTit lato-black">
                            Pescados, mariscos, carnes, kani kama y masa rollos primavera
                        </h3>
                        <h4 class="backTit">Productos</h4>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section id="productos-slider" class="contentPadding2 pt-0">
        <div class="container">
            <div class="row">
                <div class="image-slider">
                    <swiper
                        :slides-per-view="3"
                        :centered-slides="true"
                        :space-between="0"
                        :loop="true"
                        :navigation="true"
                        :modules="modules"
                        @slideChange="onSlideChange"
                        :breakpoints="breakpoints"
                    >
                        <swiper-slide
                            v-for="(image, index) in images"
                            :key="index"
                            :class="{ 'active-slide': index === activeIndex }"
                        >
                            <img
                                :src="image.image"
                                :alt="'Image ' + index"
                                class="slider-image"
                                @click="scrollToBlock(image.link)"
                            />
                        </swiper-slide>
                    </swiper>
                </div>
            </div>
        </div>
    </section>
</template>
