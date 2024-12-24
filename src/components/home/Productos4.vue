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
                trigger: '.listProd5',
                start: 'top 40%',
                toggleActions: 'play none none reverse'
            }
        })

        // animaciones

        listProductos
            .to('.listProd5 .imgListProd', {
                duration: 0.5,
                opacity: 1,
                x: '0%',
                willChange: 'transform, opacity'
            })
            .to('.listProd5 .listProdParrafo', {
                duration: 0.5,
                opacity: 1,
                willChange: 'opacity'
            })
            .to(
                '.listProd5 .listProdMainTit',
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
                    id="trucha-arcoiris-nacional"
                    class="listProd5 listProd blockListProd d-flex justify-content-between flex-column flex-lg-row"
                >
                    <div class="col-md-12 col-lg-6 listProdImg">
                        <figure class="imgListProd">
                            <img src="@/assets/list-products/trucha.png" alt="" />
                        </figure>
                    </div>
                    <div class="listProdText col-md-12 col-lg-6 d-flex align-items-end">
                        <div>
                            <h3 class="listProdMainTit mainTit corinthia-bold text-center pb-4">
                                Trucha Arcoíris Nacional
                            </h3>
                            <div class="listProdParrafo">
                                <p>
                                    Desde la laguna de Choclococha en Huancavelica, trabajamos la
                                    variedad de trucha Jumbo - Steel Head (Cabeza de acero), de
                                    calidad premium y de exportación, que ya llega a EE. UU. y
                                    Japón. Se vende en las siguientes presentaciones: Fresco (Entero
                                    HG y filetes) y congelado empacados al vacío (filetes y
                                    porciones).
                                </p>
                                <p>
                                    Desde Puno, también nos llega trucha arcoíris de tamaño
                                    tradicional, pequeña, conocida como trucha “pan size” o filete
                                    tamaño de plato.
                                </p>
                                <p>
                                    Además, también ofrecemos trucha ahumada, refrigerada y laminada
                                    en bolsa de 250 gramos hecha artesanalmente en Junín.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
