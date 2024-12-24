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
                trigger: '.listProd3',
                start: 'top 40%',
                toggleActions: 'play none none reverse'
            }
        })

        // animaciones

        listProductos
            .to('.listProd3 .imgListProd', {
                duration: 0.5,
                opacity: 1,
                x: '0%',
                willChange: 'transform, opacity'
            })
            .to('.listProd3 .listProdParrafo', {
                duration: 0.5,
                opacity: 1,
                willChange: 'opacity'
            })
            .to(
                '.listProd3 .listProdMainTit',
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
                    id="ovas-salmon"
                    class="listProd3 listProd blockListProd d-flex justify-content-between flex-column flex-lg-row"
                >
                    <div class="col-12 col-lg-6 listProdImg">
                        <figure class="imgListProd">
                            <img src="@/assets/list-products/ostras-salmon.png" alt="" />
                        </figure>
                    </div>
                    <div class="listProdText col-12 col-lg-6 d-flex align-items-end">
                        <div>
                            <h3 class="listProdMainTit mainTit corinthia-bold text-center pb-4">
                                Ovas de Salmón<br />"Ikura"
                            </h3>
                            <div class="listProdParrafo">
                                <p>
                                    El ikura es un tipo de huevas de salmón, muy apreciado en la
                                    gastronomía japonesa y mundial.
                                </p>
                                <p>
                                    Tradicionalmente, el ikura se prepara marinando las ovas en una
                                    mezcla de salsa de soja y sake, lo que le da su característico
                                    sabor umami. Se puede disfrutar de muchas maneras, como sobre
                                    arroz caliente para sushi, en ensaladas, o incluso solo como un
                                    aperitivo.
                                </p>
                                <p>
                                    Desde el 2006, Ikura Sur, selecciona en el sur de Chile, las
                                    ovas más finas de salmón del atlántico (salmo salar) o del
                                    salmón del pacífico (Oncorhynchus kisutch). Estas ovas son
                                    curadas con sal de mar y congeladas para crear lo que, en Japón,
                                    se conoce como "IKURA".
                                </p>
                                <p>
                                    El ikura no solo es delicioso, sino que también es muy
                                    nutritivo. Es rico en ácidos grasos omega-3, proteínas, vitamina
                                    D y selenio, lo que lo convierte en un superalimento con
                                    beneficios para la salud cardiovascular, la función cerebral y
                                    el sistema inmunológico.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
