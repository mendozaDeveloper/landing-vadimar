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
                trigger: '.listProd9',
                start: 'top 40%',
                toggleActions: 'play none none reverse'
            }
        })

        // animaciones

        listProductos
            .to('.listProd9 .imgListProd', {
                duration: 0.5,
                opacity: 1,
                x: '0%',
                willChange: 'transform, opacity'
            })
            .to('.listProd9 .listProdParrafo', {
                duration: 0.5,
                opacity: 1,
                willChange: 'opacity'
            })
            .to(
                '.listProd9 .listProdMainTit',
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
                    id="carne-wagyu"
                    class="listProd9 listProd blockListProd d-flex justify-content-between flex-column flex-lg-row"
                >
                    <div class="col-md-12 col-lg-6 listProdImg">
                        <figure class="imgListProd">
                            <img src="@/assets/list-products/carne-wagyu.png" alt="" />
                        </figure>
                    </div>
                    <div class="listProdText col-md-12 col-lg-6 d-flex align-items-end">
                        <div>
                            <h3 class="listProdMainTit mainTit corinthia-bold text-center pb-4">
                                Carne Wagyu
                            </h3>
                            <div class="listProdParrafo">
                                <p>
                                    Agrícola Mollendo, fundada en 2002, cría su ganado Wagyu en las
                                    extensas praderas de la región de Los Lagos, cerca de la ciudad
                                    de Osorno.
                                </p>
                                <p>
                                    Estos campos están ubicados en el sur de Chile y tienen
                                    inmejorables condiciones ambientales, cerca al río Rahue y de
                                    los bosques del Parque Nacional Puyehue.
                                </p>
                                <p>
                                    La región de los Lagos se extiende al este desde la cordillera
                                    de los Andes hasta el océano Pacífico al oeste. En este ambiente
                                    libre de pestes y enfermedades, se cría un ganado Wagyu de clase
                                    mundial, cuya carne tiene un marmoleo y sabor excepcional.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
