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
                                    El mejillón chileno (Mytilus chilensis), también conocido como
                                    chorito, choro o quilmahue, es una especie de molusco bivalvo
                                    filtrador de la familia Mytilidae.
                                </p>
                                <p>
                                    Además, es un recurso significativo para la acuicultura en
                                    Chile, con una producción comercial considerable destinada
                                    principalmente a la exportación desde el sur de Chile.
                                    Importamos la variedad “Chilean blue mussel” (Mytilus chilensis)
                                    criados por PESBASA, de fuente sostenible y con certificaciones
                                    internacionales.
                                </p>
                                <p>
                                    Ofrecemos las presentaciones de mejillón entero (en su concha) y
                                    pura carne, en calibres grandes (Jumbo).
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
