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
                trigger: '.listProd6',
                start: 'top 40%',
                toggleActions: 'play none none reverse'
            }
        })

        // animaciones

        listProductos
            .to('.listProd6 .imgListProd', {
                duration: 0.5,
                opacity: 1,
                x: '0%',
                willChange: 'transform, opacity'
            })
            .to('.listProd6 .listProdParrafo', {
                duration: 0.5,
                opacity: 1,
                willChange: 'opacity'
            })
            .to(
                '.listProd6 .listProdMainTit',
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
                    id="paiche-amazonico"
                    class="listProd6 listProd blockListProd blockListProdRight d-flex justify-content-between flex-column flex-lg-row"
                >
                    <div class="col-md-12 col-lg-6 listProdImg">
                        <figure class="imgListProd">
                            <img src="@/assets/list-products/paiche-amazonico.png" alt="" />
                        </figure>
                    </div>
                    <div class="listProdText col-md-12 col-lg-6 d-flex align-items-end">
                        <div>
                            <h3 class="listProdMainTit mainTit corinthia-bold text-center pb-4">
                                Paiche Amazónico
                            </h3>
                            <div class="listProdParrafo">
                                <p>
                                    El paiche amazónico, también conocido como arapaima, es uno de
                                    los peces de agua dulce más grandes del mundo. Su nombre
                                    científico es Arapaima gigas.
                                </p>
                                <p>
                                    Este pez puede alcanzar hasta 3 metros de longitud y pesar
                                    alrededor de 200 kilogramos.
                                </p>
                                <p>
                                    Una característica notable de este pez es su capacidad para
                                    respirar aire, lo que le permite sobrevivir en aguas con bajo
                                    contenido de oxígeno. Su cuerpo está cubierto de grandes escamas
                                    y tiene una coloración que varía entre verde y rojo.
                                </p>
                                <p>
                                    En Pucallpa, nuestro socio estratégico Amazon Fish Products,
                                    cría desde hace más de 10 años paiche premium de fuente
                                    sostenible, el cual distribuimos a nivel nacional. Las
                                    presentaciones en fresco & congelado son: (entero HG, filete,
                                    panza, lomo y en porciones).
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
