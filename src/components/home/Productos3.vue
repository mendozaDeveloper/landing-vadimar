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
                trigger: '.listProd4',
                start: 'top 40%',
                toggleActions: 'play none none reverse'
            }
        })

        // animaciones

        listProductos
            .to('.listProd4 .imgListProd', {
                duration: 0.5,
                opacity: 1,
                x: '0%',
                willChange: 'transform, opacity'
            })
            .to('.listProd4 .listProdParrafo', {
                duration: 0.5,
                opacity: 1,
                willChange: 'opacity'
            })
            .to(
                '.listProd4 .listProdMainTit',
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
                    id="atun-aleta-amarilla"
                    class="listProd4 listProd blockListProd blockListProdRight d-flex justify-content-between flex-column flex-lg-row"
                >
                    <div class="col-md-12 col-lg-6 listProdImg">
                        <figure class="imgListProd">
                            <img src="@/assets/list-products/atun.png" alt="" />
                        </figure>
                    </div>
                    <div class="listProdText col-md-12 col-lg-6 d-flex align-items-end">
                        <div>
                            <h3 class="listProdMainTit mainTit corinthia-bold text-center pb-4">
                                Atún<br />Aleta Amarilla
                            </h3>
                            <div class="listProdParrafo">
                                <p>
                                    El atún de aleta amarilla (Thunnus albacares), se encuentra en
                                    aguas tropicales y subtropicales de todo el mundo, excepto en el
                                    mar Mediterráneo.
                                </p>
                                <p>
                                    Este pez es muy apreciado tanto en la pesca comercial como en la
                                    deportiva. Se comercializa fresco, congelado y es muy popular
                                    como sashimi.
                                </p>
                                <p>
                                    Nuestro atún proviene de la costa del Pacífico y es procesado en
                                    Mazatlán (México), por la empresa líder del rubro en Latino
                                    América. Tenemos presentaciones congeladas de: Lomo y porciones
                                    congelados al vacío.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
