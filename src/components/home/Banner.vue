<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, EffectFade } from 'swiper/modules'

import 'swiper/css/effect-fade'

const modules = [Autoplay, EffectFade]
</script>

<template>
    <section id="home" class="contentBanner">
        <swiper
            :slides-per-view="1"
            :space-between="0"
            :speed="2500"
            :loop="true"
            class="bannerSwiper"
            :lazy="true"
            :modules="modules"
            :autoplay="{
                delay: 2000,
                disableOnInteraction: false
            }"
            :effect="'fade'"
        >
            <swiper-slide class="swiperBg swiperBg1"></swiper-slide>
            <swiper-slide class="swiperBg swiperBg2"></swiper-slide>
            <swiper-slide class="swiperBg swiperBg3"></swiper-slide>
            <swiper-slide class="swiperBg swiperBg4"></swiper-slide>
            <swiper-slide class="swiperBg swiperBg5"></swiper-slide>
            <swiper-slide class="swiperBg swiperBg6"></swiper-slide>
            <swiper-slide class="swiperBg swiperBg7"></swiper-slide>
        </swiper>
        <div class="bannerLogo d-flex justify-content-center align-items-center">
            <div class="text-center">
                <p class="textWelcome corinthia-regular">Bienvenidos a</p>
                <img src="@/assets/logo-vadimar.svg" alt="" class="logoBanner" />
                <p class="textlogoBanner lato-regular">
                    <strong class="lato-black">CALIDAD PREMIUM</strong> EN TODOS NUESTROS PRODUCTOS
                </p>
            </div>
        </div>
        <RouterLink
            to="#nuestros-productos"
            class="blockMouse d-flex justify-content-center align-items-center"
            ><img src="@/assets/mouse.svg" alt=""
        /></RouterLink>
    </section>
</template>
