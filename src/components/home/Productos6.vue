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
                trigger: '.listProd7',
                start: 'top 40%',
                toggleActions: 'play none none reverse'
            }
        })

        // animaciones

        listProductos
            .to('.listProd7 .imgListProd', {
                duration: 0.5,
                opacity: 1,
                x: '0%',
                willChange: 'transform, opacity'
            })
            .to('.listProd7 .listProdParrafo', {
                duration: 0.5,
                opacity: 1,
                willChange: 'opacity'
            })
            .to(
                '.listProd7 .listProdMainTit',
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
                    id="mejillones-patagonicos"
                    class="listProd7 listProd blockListProd d-flex justify-content-between flex-column flex-lg-row"
                >
                    <div class="col-md-12 col-lg-6 listProdImg">
                        <figure class="imgListProd">
                            <img src="@/assets/list-products/mejillones-patagonicos.png" alt="" />
                        </figure>
                    </div>
                    <div class="listProdText col-md-12 col-lg-6 d-flex align-items-end">
                        <div>
                            <h3 class="listProdMainTit mainTit corinthia-bold text-center pb-4">
                                Mejillones Patagónicos
                            </h3>
                            <div class="listProdParrafo">
                                <p>
                                    Los mejillones de criadero del sur de Chile, llamados también choritos, es una especie de molusco bivalvo filtrador de la familia Mytilidae, destacan por su pureza, frescura y alto valor nutricional. Cultivados en aguas frías y cristalinas, desarrollan una carne firme, con gran sabor y excelente textura, siendo una fuente natural de proteínas de alta calidad, omega 3, hierro, zinc y vitamina B12.
                                </p>
                                <p>
                                    Son un alimento saludable, bajo en grasa y versátil, ideal para consumidores que buscan nutrición y practicidad.  Además, son procesados en plantas con certificaciones internacionales y estrictos controles sanitarios, garantizando trazabilidad, inocuidad y estándares de exportación de primer nivel.
                                </p>
                                <p>
                                    Un producto premium y de fuente sostenible.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
