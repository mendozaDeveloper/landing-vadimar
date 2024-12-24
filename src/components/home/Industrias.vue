<script setup>
import { onMounted } from 'vue'
/*import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'*/

// gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
    /*let dataViewPort = gsap.matchMedia()

    dataViewPort.add('(min-width: 993px)', () => {
        let industriaCont = gsap.timeline({
            scrollTrigger: {
                trigger: '#industriaCont',
                start: 'top 60%',
                toggleActions: 'play none none reverse',
                ease: 'power3.inOut'
            }
        })

        let industria2 = gsap.timeline({
            scrollTrigger: {
                trigger: '#blockListProd2',
                start: 'top 80%',
                toggleActions: 'play none none reverse',
                ease: 'power3.inOut'
            }
        })

        ////// Animaciones //////

        industriaCont
            .to('#industriaImg1', {
                duration: 0.5,
                opacity: 1,
                y: '0%',
                willChange: 'transform, opacity'
            })
            .to('#IndusThridTit', {
                duration: 0.6,
                opacity: 1,
                x: '1',
                willChange: 'transform, opacity'
            })
            .to(
                '#listProdText',
                {
                    duration: 0.6,
                    opacity: 1,
                    y: '0%',
                    willChange: 'transform, opacity'
                },
                '<'
            )

        industria2.to('#blockListProd2', {
            duration: 0.5,
            opacity: 1,
            y: '0%',
            willChange: 'transform, opacity'
        })
    })*/

    const modal = document.getElementById('videoModal')
    const videoContainer = document.getElementById('videoContainer')

    // Cargar el video cuando se muestra el modal
    modal.addEventListener('shown.bs.modal', () => {
        videoContainer.innerHTML = `
        <lite-youtube videoid="26PaWIYYaLg" style="aspect-ratio: 16/9;"></lite-youtube>
      `
    })

    // Eliminar el video cuando se cierra el modal
    modal.addEventListener('hidden.bs.modal', () => {
        videoContainer.innerHTML = ''
    })
})
</script>

<template>
    <section id="industria" class="contentPadding pb-0">
        <div class="container">
            <div class="row">
                <div class="d-flex">
                    <div class="containerTitles mb-4">
                        <h2 id="IndusThridTit" class="thridTit lato-black mb-0">
                            Industria<br />Alimentaria
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section id="industriaCont" class="pt-0 pb-5">
        <div class="container">
            <div class="row">
                <div
                    id="blockListProd"
                    class="blockListProd blockListProdRight d-flex justify-content-between flex-column flex-lg-row"
                >
                    <div class="col-12 col-lg-6 listProdImg listProdImgBlack">
                        <figure id="industriaImg1">
                            <img src="@/assets/list-industria/harina-mostaza1.jpg" alt="" />
                        </figure>
                    </div>
                    <div
                        id="listProdText"
                        class="listProdText col-12 col-lg-6 d-flex align-items-end"
                    >
                        <div class="black-color">
                            <h3 class="mainTit corinthia-bold text-center pb-4">
                                Harina de Mostaza Importada
                            </h3>
                            <p>
                                La harina de mostaza se encuentra entre las especias más adaptables
                                del planeta. Además de su gusto único y sus propiedades nutritivas,
                                desempeña una serie de roles muy útiles como ingrediente,
                                emulsionante, antioxidante, estabilizador, conservante y
                                aglutinante.
                            </p>
                            <p>
                                Dado que la harina de mostaza alberga casi el 30% de proteínas,
                                también actúa como un suministro de estas. Es un componente crucial
                                que proporciona sabor y textura a muchos de los alimentos que
                                consumimos: aderezos para ensaladas, mayonesa, salsas en general,
                                carnes procesadas, combinaciones de condimentos y mostazas ya
                                preparadas.
                            </p>
                            <p>
                                Nosotros importamos la harina de mostaza o, mejor dicho: “polvo de
                                mostaza” desde Canadá, de la empresa Sakai Spice, uno de los
                                principales productores de harina de mostaza en el mundo, que
                                trabaja bajo los más altos estándares de calidad.
                            </p>
                        </div>
                    </div>
                </div>
                <div
                    id="blockListProd2"
                    class="blockListProd d-flex justify-content-between flex-column flex-lg-row mb-0"
                >
                    <div class="col-12 col-lg-6 listProdImg listProdImgBlack">
                        <figure>
                            <img src="@/assets/list-industria/harina-mostaza2.jpg" alt="" />
                        </figure>
                    </div>
                    <div class="listProdText col-12 col-lg-6 d-flex align-items-start">
                        <div class="black-color w-100">
                            <p>
                                Nuestro “polvo de mostaza” se diferencia de otras harinas de
                                mostaza, porque la mezcla no tiene cáscaras en la molienda y la
                                semilla de mostaza que se muele, ha pasado por un proceso patentado
                                con el cual se le retira el aceite, dándonos un producto final más
                                puro y de mejor calidad.
                            </p>
                            <p>
                                Nuestros productos están certificados con Kosher, Halal y FDA.
                                Operamos bajo un plan HACCP, que garantiza un alto nivel de
                                seguridad alimentaria, aseguramiento de la calidad y completa
                                trazabilidad del producto.
                            </p>
                            <p>
                                Sakai Spice Canadá, también produce polvo de Wasabi para la cocina
                                japonesa.
                            </p>
                            <p>
                                <a
                                    href="https://sakaispice.com/home"
                                    target="_blank"
                                    class="red-color lato-bold"
                                    ><i>https://sakaispice.com/home</i></a
                                >
                            </p>
                            <div class="py-4">
                                <div class="d-flex flex-align-start">
                                    <div>
                                        <img
                                            src="@/assets/certificaciones.png"
                                            alt=""
                                            class="w-100"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="pb-5">
                                <div
                                    class="contBtn d-sm-flex d-lg-block d-xl-flex justify-content-center flex-sm-row flex-column gap-4 py-5"
                                >
                                    <a
                                        href="/downloads/brochure-harina-mostaza.pdf"
                                        target="_blank"
                                        class="btnCustom btnCustomList btn d-flex justify-content-center align-items-center mb-3 mb-xl-0"
                                        >CATÁLOGO</a
                                    >
                                    <a
                                        href="/downloads/tabla-de-especificaciones.pdf"
                                        target="_blank"
                                        class="btnCustom btnCustomList btn d-flex justify-content-center align-items-center mb-3 mb-xl-0"
                                        >ESPECIFICACIONES<br />TÉCNICAS</a
                                    >
                                    <a
                                        href="#"
                                        data-bs-toggle="modal"
                                        data-bs-target="#videoModal"
                                        class="btnCustom btnCustomList btn d-flex justify-content-center align-items-center mb-3 mb-xl-0"
                                        >VIDEO</a
                                    >
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
