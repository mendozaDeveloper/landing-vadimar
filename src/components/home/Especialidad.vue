<script setup>
import { Swiper, SwiperSlide } from "swiper/vue"

import "swiper/css"
import "swiper/css/navigation"

import { Navigation } from 'swiper/modules'
import { ref } from "vue";

const modules = [Navigation]

const activeIndex = ref(0)

const images = [
    "/src/assets/img-productos/productos1.png",
    "/src/assets/img-productos/productos1.png",
    "/src/assets/img-productos/productos1.png",
    "/src/assets/img-productos/productos1.png"
]

const onSlideChange = (swiper) => {
    activeIndex.value = swiper.realIndex
}

</script>

<template>
    <section class="contentPadding">
        <div class="container">
            <div class="row">
                <div class="d-flex flex-column justify-content-center align-items-center">
                    <div class="containerTitles text-center">
                        <h2 class="mainTit corinthia-bold mt-5 mb-0">La Especialidad</h2>
                        <h3 class="secondTit lato-black">Pescados, mariscos, carnes, kani kama y masa rollos primavera
                        </h3>
                        <h4 class="backTit">Nuestros<br>Productos</h4>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="contentPadding2 pt-0 black-background-block">
        <div class="container">
            <div class="row">
                <div class="image-slider">
                    <swiper :slides-per-view="3" :centered-slides="true" :space-between="0" :loop="true"
                        :navigation="true" :modules="modules" @slideChange="onSlideChange">
                        <swiper-slide v-for="(image, index) in images" :key="index"
                            :class="{ 'active-slide': index === activeIndex }">
                            <img :src="image" :alt="'Image ' + index" class="slider-image" />
                        </swiper-slide>
                    </swiper>
                </div>
            </div>
        </div>
    </section>
</template>