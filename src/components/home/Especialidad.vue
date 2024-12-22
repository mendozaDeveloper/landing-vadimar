<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'

import { Navigation } from 'swiper/modules'

const modules = [Navigation]

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
    <section id="la-especialidad" class="contentPadding">
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
                        :breakpoints="breakpoints"
                    >
                        <swiper-slide>
                            <RouterLink to="#salmon-atlantico">
                                <img
                                    src="@/assets/img-productos/salmon-atlantico.png"
                                    class="slider-image"
                                />
                            </RouterLink>
                        </swiper-slide>
                        <swiper-slide>
                            <RouterLink to="#salmon-ahumado-carpaccios">
                                <img
                                    src="@/assets/img-productos/salmon-ahumado.png"
                                    class="slider-image"
                                />
                            </RouterLink>
                        </swiper-slide>
                        <swiper-slide>
                            <RouterLink to="#ovas-salmon">
                                <img
                                    src="@/assets/img-productos/ovas-salmon.png"
                                    class="slider-image"
                                />
                            </RouterLink>
                        </swiper-slide>
                        <swiper-slide>
                            <RouterLink to="#atun-aleta-amarilla">
                                <img src="@/assets/img-productos/atun.png" class="slider-image" />
                            </RouterLink>
                        </swiper-slide>
                        <swiper-slide>
                            <RouterLink to="#trucha-arcoiris-nacional">
                                <img src="@/assets/img-productos/trucha.png" class="slider-image" />
                            </RouterLink>
                        </swiper-slide>
                        <swiper-slide>
                            <RouterLink to="#paiche-amazonico">
                                <img
                                    src="@/assets/img-productos/paiche-amazonico.png"
                                    class="slider-image"
                                />
                            </RouterLink>
                        </swiper-slide>
                        <swiper-slide>
                            <RouterLink to="#mejillones-patagonicos">
                                <img
                                    src="@/assets/img-productos/mejillones-patagonicos.png"
                                    class="slider-image"
                                />
                            </RouterLink>
                        </swiper-slide>
                        <swiper-slide>
                            <RouterLink to="#kani-kama">
                                <img
                                    src="@/assets/img-productos/kani-kana.png"
                                    class="slider-image"
                                />
                            </RouterLink>
                        </swiper-slide>
                        <swiper-slide>
                            <RouterLink to="#carne-wagyu">
                                <img
                                    src="@/assets/img-productos/carne-wagyu.png"
                                    class="slider-image"
                                />
                            </RouterLink>
                        </swiper-slide>
                        <swiper-slide>
                            <RouterLink to="#cordero-patagonico">
                                <img
                                    src="@/assets/img-productos/cordero-patagonico.png"
                                    class="slider-image"
                                />
                            </RouterLink>
                        </swiper-slide>
                        <swiper-slide>
                            <RouterLink to="#masa-primavera-spring-roll">
                                <img
                                    src="@/assets/img-productos/masa-primavera.png"
                                    class="slider-image"
                                />
                            </RouterLink>
                        </swiper-slide>
                    </swiper>
                </div>
            </div>
        </div>
    </section>
</template>
