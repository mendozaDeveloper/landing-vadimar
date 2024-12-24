<script setup>
/*
import { onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
    let dataViewPort = gsap.matchMedia()

    dataViewPort.add('(min-width: 993px)', () => {
        let listProductos = gsap.timeline({
            scrollTrigger: {
                trigger: '.listProd2',
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            }
        })

        // animaciones

        listProductos
            .to('.listProd2 .imgListProd', {
                duration: 0.5,
                opacity: 1,
                x: '0%',
                willChange: 'transform, opacity'
            })
            .to('.listProd2 .listProdParrafo', {
                duration: 0.5,
                opacity: 1,
                willChange: 'opacity'
            })
            .to(
                '.listProd2 .listProdMainTit',
                {
                    duration: 0.5,
                    opacity: 1,
                    x: '0%',
                    willChange: 'transform, opacity'
                },
                '<'
            )
    })
})*/
</script>
<template>
    <section class="black-background-block overflow-x">
        <div class="container">
            <div class="row">
                <div
                    id="salmon-ahumado-carpaccios"
                    class="listProd2 listProd blockListProd blockListProdRight d-flex justify-content-between flex-column flex-lg-row"
                >
                    <div class="col-12 col-lg-6 listProdImg">
                        <figure class="imgListProd">
                            <img src="@/assets/list-products/salmon-ahumado.png" alt="" />
                        </figure>
                    </div>
                    <div class="listProdText col-12 col-lg-6 d-flex align-items-end">
                        <div>
                            <h3 class="listProdMainTit mainTit corinthia-bold text-center pb-4">
                                Salmón Ahumado y Carpaccios
                            </h3>
                            <div class="listProdParrafo">
                                <p>
                                    Desde hace más de 20 años importamos y distribuimos salmón
                                    ahumado congelado South Wind. Producido en una planta
                                    certificada que cumple con los estándares más altos de calidad y
                                    de cuidado del medio ambiente, nuestro salmón ahumado viene en
                                    porciones perfectas, cada lonja pesa 25 gramos, se vende en
                                    presentaciones de 100, 200 y 400 gramos, al vacío, listo para
                                    comer una vez descongelado.
                                </p>
                                <p>
                                    También de South Wind, nos llega el estuche de carpaccio de
                                    salmón de 100 gramos. Son finas lonjas de salmón crudo levemente
                                    sazonado para descongelar y hacer volar tu imaginación.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
