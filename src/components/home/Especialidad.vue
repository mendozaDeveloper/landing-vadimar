<script setup>
import { onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
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

gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
    let dataViewPort = gsap.matchMedia()

    dataViewPort.add('(min-width: 993px)', () => {
        let Espcialidad = gsap.timeline({
            scrollTrigger: {
                trigger: '#la-especialidad',
                start: 'top 80%',
                toggleActions: 'play none none reverse',
                ease: 'power3.inOut'
            }
        })

        ////// Animaciones //////

        Espcialidad.to('#EspBackTit1', {
            duration: 0.6,
            opacity: 0.08,
            y: '-50%',
            x: '0%',
            willChange: 'transform, opacity'
        })
            /*.to(
                '#EspBackTit2',
                {
                    duration: 0.6,
                    opacity: 0.08,
                    y: '-62%',
                    x: '0%',
                    willChange: 'transform, opacity'
                },
                '<'
            )*/
            .to(
                '#EspMainTit',
                {
                    duration: 0.6,
                    opacity: 1,
                    y: '0%',
                    x: '0%',
                    willChange: 'transform, opacity'
                },
                '<'
            )
            .to(
                '#EspSecondTit',
                {
                    duration: 0.6,
                    opacity: 1,
                    scale: 1,
                    willChange: 'scale, opacity'
                },
                '<'
            )
            .to(
                '#productos-slider',
                {
                    duration: 0.6,
                    opacity: 1,
                    y: '0%',
                    willChange: 'transform, opacity'
                },
                '+=0.05'
            )
    })
})
</script>

<template>
    <section id="la-especialidad" class="contentPadding">
        <div class="container">
            <div class="row">
                <div class="d-flex flex-column justify-content-center align-items-center">
                    <div class="containerTitles text-center mb-5">
                        <h2 id="EspMainTit" class="mainTit corinthia-bold mt-0 mb-0">
                            La Especialidad
                        </h2>
                        <h3 id="EspSecondTit" class="secondTit lato-black">
                            Pescados, mariscos, carnes, kani kama y masa rollos primavera
                        </h3>
                        <div>
                            <h4 id="EspBackTit1" class="backTit">Nuestros Productos</h4>
                        </div>
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
