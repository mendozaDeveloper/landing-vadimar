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
                trigger: '.listProd10',
                start: 'top 40%',
                toggleActions: 'play none none reverse'
            }
        })

        // animaciones

        listProductos
            .to('.listProd10 .imgListProd', {
                duration: 0.5,
                opacity: 1,
                x: '0%',
                willChange: 'transform, opacity'
            })
            .to('.listProd10 .listProdParrafo', {
                duration: 0.5,
                opacity: 1,
                willChange: 'opacity'
            })
            .to(
                '.listProd10 .listProdMainTit',
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
                    id="cordero-patagonico"
                    class="listProd10 listProd blockListProd blockListProdRight d-flex justify-content-between flex-column flex-lg-row"
                >
                    <div class="col-md-12 col-lg-6 listProdImg">
                        <figure class="imgListProd">
                            <img src="@/assets/list-products/cordero-atagonico.png" alt="" />
                        </figure>
                    </div>
                    <div class="listProdText col-md-12 col-lg-6 d-flex align-items-end">
                        <div>
                            <h3 class="listProdMainTit mainTit corinthia-bold text-center pb-4">
                                Cordero Patagónico
                            </h3>
                            <div class="listProdParrafo">
                                <p>
                                    Desde 1988 el Frigorífico Simunovic inicia la crianza de coderos
                                    patagónicos en la región de Magallanes.
                                </p>
                                <p>
                                    Ubicados en el extremo del sur de América, en la zona más
                                    austral de Chile y junto al Estrecho del mismo nombre, se sitúa
                                    la ciudad de Punta Arenas.
                                </p>
                                <p>
                                    La región de Magallanes posee un clima frío y libre de
                                    contaminación que se puede sentir en sus extensas praderas, con
                                    ríos que son fuente de agua cristalina que nacen de glaciares
                                    milenarios. En este ambiente libre de químicos y pesticidas, se
                                    crían animales sanos, ideales para una producción ovina que está
                                    entre las mejores del mundo.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
