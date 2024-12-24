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
                trigger: '.listProd8',
                start: 'top 40%',
                toggleActions: 'play none none reverse'
            }
        })

        // animaciones

        listProductos
            .to('.listProd8 .imgListProd', {
                duration: 0.5,
                opacity: 1,
                x: '0%',
                willChange: 'transform, opacity'
            })
            .to('.listProd8 .listProdParrafo', {
                duration: 0.5,
                opacity: 1,
                willChange: 'opacity'
            })
            .to(
                '.listProd8 .listProdMainTit',
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
                    id="kani-kama"
                    class="listProd8 listProd blockListProd blockListProdRight d-flex justify-content-between flex-column flex-lg-row"
                >
                    <div class="col-md-12 col-lg-6 listProdImg">
                        <figure class="imgListProd">
                            <img src="@/assets/list-products/kani-kana.png" alt="" />
                        </figure>
                    </div>
                    <div class="listProdText col-md-12 col-lg-6 d-flex align-items-end">
                        <div>
                            <h3 class="listProdMainTit mainTit corinthia-bold text-center pb-4">
                                Kani Kama <br />
                                Sea Leg
                            </h3>
                            <div class="listProdParrafo">
                                <p>
                                    Nuestro Surimi es elaborado a base de pescado blanco de las
                                    frías y profundas aguas del puerto Deseado, en la Patagonia
                                    Argentina. El Surimi es la máxima expresión de la proteína de
                                    pescado. Se elabora con pescado recién capturado, tomando la
                                    proteína de mejor calidad, de alto valor nutricional, libre de
                                    gluten, bajo en calorías y colesterol, sin espinas y se adiciona
                                    sabor a cangrejo.
                                </p>
                                <p>
                                    Es un producto envasado al vacío, pasteurizado, cocido y listo
                                    para comer después de descongelar.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
