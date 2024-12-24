<script setup>
import { onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { RouterLink } from 'vue-router'

gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
    let dataViewPort = gsap.matchMedia()

    // add a media query. When it matches, the associated function will run
    dataViewPort.add('(min-width: 993px)', () => {
        let productCardIzq = gsap.timeline({
            scrollTrigger: {
                trigger: '#nuestros-productos .productCardIzq',
                start: 'top 80%',
                toggleActions: 'play none none reverse',
                ease: 'power3.inOut'
            }
        })

        let productCardDer = gsap.timeline({
            scrollTrigger: {
                trigger: '#nuestros-productos .productCardDer',
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            }
        })

        let ProdTitle = gsap.timeline({
            scrollTrigger: {
                trigger: '#ProdTitle',
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            }
        })

        let ProdSecondTit = gsap.timeline({
            scrollTrigger: {
                trigger: '#ProdSecondTit',
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            }
        })

        let ProdBackTit = gsap.timeline({
            scrollTrigger: {
                trigger: '#ProdBackTit',
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            }
        })

        ////// Animaciones //////

        productCardIzq.to('#nuestros-productos .productCardIzq', {
            duration: 0.6,
            x: '0%',
            opacity: 1,
            willChange: 'transform, opacity'
        })

        productCardDer.to('#nuestros-productos .productCardDer', {
            duration: 0.6,
            x: '0%',
            opacity: 1,
            willChange: 'transform, opacity'
        })

        ProdTitle.to('#ProdTitle', {
            duration: 0.6,
            opacity: 1,
            scale: 1,
            y: '0%',
            willChange: 'transform, opacity, scale'
        })

        ProdSecondTit.to('#ProdSecondTit', {
            duration: 0.6,
            opacity: 1,
            y: '0%',
            willChange: 'transform, opacity'
        })

        ProdBackTit.to('#ProdBackTit', {
            duration: 0.9,
            opacity: 0.08,
            y: '-50%',
            x: '0%',
            willChange: 'transform, opacity'
        })
    })
})
</script>

<template>
    <section id="nuestros-productos" class="contentPadding">
        <div class="container">
            <div class="row">
                <div class="d-flex flex-column justify-content-center align-items-center">
                    <h2 id="ProdTitle" class="mainTit corinthia-bold mt-5 mb-0">Presentamos</h2>
                    <div class="containerTitles">
                        <h3 id="ProdSecondTit" class="secondTit lato-black text-center">
                            Nuestros Productos
                        </h3>
                        <h4 id="ProdBackTit" class="backTit">Vadimar</h4>
                    </div>
                </div>
            </div>
            <div class="row">
                <div
                    class="containerProds d-flex justify-content-between flex-column flex-lg-row gap-5 mt-3 mt-lg-5"
                >
                    <div>
                        <div ref="productCardIzq" class="productCard productCardIzq">
                            <RouterLink to="#la-especialidad">
                                <figure>
                                    <img src="@/assets/img-producto1.png" alt="" />
                                    <figcaption
                                        class="d-flex justify-content-center align-items-end"
                                    >
                                        <p class="lato-bold text-white">
                                            Pescados, mariscos, carnes, masa rollos primavera y kani
                                            kama
                                        </p>
                                    </figcaption>
                                </figure>
                            </RouterLink>
                        </div>
                    </div>
                    <div>
                        <div ref="productCardDer" class="productCard productCardDer">
                            <RouterLink to="#industria">
                                <figure>
                                    <img src="@/assets/img-producto2.png" alt="" />
                                    <figcaption
                                        class="d-flex justify-content-center align-items-end"
                                    >
                                        <p class="lato-bold text-white">
                                            Insumos para la industria alimentaria
                                        </p>
                                    </figcaption>
                                </figure>
                            </RouterLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
