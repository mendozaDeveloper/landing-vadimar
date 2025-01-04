<script setup>
import { onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
    let dataViewPort = gsap.matchMedia()

    dataViewPort.add('(min-width: 993px)', () => {
        let textAcerca = gsap.timeline({
            scrollTrigger: {
                trigger: '#textAcerca',
                start: 'top 110%',
                toggleActions: 'play none none reverse',
                ease: 'power3.inOut'
            }
        })

        ////// Animaciones //////

        textAcerca
            .to('#textAcerca', {
                duration: 0.5,
                y: '0%',
                x: '0%',
                willChange: 'transform'
            })
            .to(
                '#imgNosotrosIzq',
                {
                    duration: 0.4,
                    x: '0%',
                    opacity: 1,
                    willChange: 'transform, opacity'
                },
                '+=0'
            )
            .to(
                '#imgNosotrosDer',
                {
                    duration: 0.4,
                    x: '0%',
                    opacity: 1,
                    willChange: 'transform, opacity'
                },
                '<'
            )
            .to('#NosBackTit', {
                duration: 0.3,
                opacity: 0.08,
                x: '0%',
                y: '-50%',
                willChange: 'transform, opacity'
            })
    })
})
</script>

<template>
    <section id="nosotros" class="contentPadding">
        <div class="container pb-4">
            <div class="row">
                <div class="d-flex flex-column justify-content-center align-items-center">
                    <div class="containerTitles">
                        <h4 id="NosBackTit" class="backTit">Historia</h4>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section>
        <div class="blockAboutCont black-background-block">
            <div class="container position-relative">
                <div class="row blockAboutImg">
                    <div class="d-flex">
                        <div class="col-md-4 p-0">
                            <img
                                src="@/assets/nosotros-izq.png"
                                alt="camion vadimar"
                                class="img-fluid w-100"
                                id="imgNosotrosIzq"
                            />
                        </div>
                        <div class="col-md-4"></div>
                        <div class="col-md-4 p-0">
                            <img
                                src="@/assets/nosotros-der.png"
                                alt="almacen frigorifico"
                                class="img-fluid w-100"
                                id="imgNosotrosDer"
                            />
                        </div>
                    </div>
                </div>
                <div id="textAcerca" class="red-background blockAbout">
                    <div>
                        <h2
                            class="mainTit text-white corinthia-bold mb-0 text-center text-md-start"
                        >
                            Acerca de
                        </h2>
                        <h2
                            class="mainTit text-white corinthia-bold mb-4 mb-0 text-center text-md-end"
                        >
                            Nosotros
                        </h2>
                    </div>
                    <div class="text-center text-white">
                        <p>
                            Somos una empresa con más de 25 años en el Perú, importadora y
                            comercializadora de pescados, mariscos, carnes, masa rollo primavera e
                            insumos para la industria alimentaria, de calidad premium.
                        </p>
                        <p>
                            Contamos con almacenes de frío de última generación y nuestra propia
                            cadena logística con los más altos estándares de calidad.
                        </p>
                        <p>
                            Trabajamos con los mejores restaurantes, hoteles, cafeterías,
                            distribuidores y principales cadenas de Supermercados.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
