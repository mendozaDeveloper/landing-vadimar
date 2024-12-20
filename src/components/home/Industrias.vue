<script setup></script>

<template>
    <section id="industria" class="contentPadding pb-0">
        <div class="container">
            <div class="row">
                <div class="d-flex">
                    <div class="containerTitles mb-4">
                        <h2 class="thridTit lato-black mb-0">Industria<br />Alimentaria</h2>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="pt-0 pb-5">
        <div class="container">
            <div class="row">
                <div
                    class="blockListProd blockListProdRight d-flex justify-content-between flex-column flex-lg-row"
                >
                    <div class="col-12 col-lg-6 listProdImg listProdImgBlack">
                        <figure>
                            <img src="@/assets/list-industria/harina-mostaza1.jpg" alt="" />
                        </figure>
                    </div>
                    <div class="listProdText col-12 col-lg-6 d-flex align-items-end">
                        <div class="black-color">
                            <h3 class="mainTit corinthia-bold text-center pb-4">
                                Harina de Mostaza Importada
                            </h3>
                            <p>
                                La harina de mostaza se encuentra entre las especias más adaptables
                                del planeta. Además de su gusto único y sus propiedades nutritivas,
                                desempeña una serie de roles muy útiles como ingrediente,
                                emulsionante, antioxidante, estabilizador, conservante y
                                aglutinante.
                            </p>
                            <p>
                                Dado que la harina de mostaza alberga casi el 30% de proteínas,
                                también actúa como un suministro de estas. Es un componente crucial
                                que proporciona sabor y textura a muchos de los alimentos que
                                consumimos: aderezos para ensaladas, mayonesa, salsas en general,
                                carnes procesadas, combinaciones de condimentos y mostazas ya
                                preparadas.
                            </p>
                            <p>
                                Nosotros importamos la harina de mostaza o, mejor dicho: “polvo de
                                mostaza” desde Canadá, de la empresa Sakai Spice, uno de los
                                principales productores de harina de mostaza en el mundo, que
                                trabaja bajo los más altos estándares de calidad.
                            </p>
                        </div>
                    </div>
                </div>
                <div
                    class="blockListProd d-flex justify-content-between flex-column flex-lg-row mb-0"
                >
                    <div class="col-12 col-lg-6 listProdImg listProdImgBlack">
                        <figure>
                            <img src="@/assets/list-industria/harina-mostaza2.jpg" alt="" />
                        </figure>
                    </div>
                    <div class="listProdText col-12 col-lg-6 d-flex align-items-start">
                        <div class="black-color w-100">
                            <p>
                                Nuestro “polvo de mostaza” se diferencia de otras harinas de
                                mostaza, porque la mezcla no tiene cáscaras en la molienda y la
                                semilla de mostaza que se muele, ha pasado por un proceso patentado
                                con el cual se le retira el aceite, dándonos un producto final más
                                puro y de mejor calidad.
                            </p>
                            <p>
                                Nuestros productos están certificados con Kosher, Halal y FDA.
                                Operamos bajo un plan HACCP, que garantiza un alto nivel de
                                seguridad alimentaria, aseguramiento de la calidad y completa
                                trazabilidad del producto.
                            </p>
                            <p>
                                Sakai Spice Canadá, también produce polvo de Wasabi para la cocina
                                japonesa.
                            </p>
                            <p>
                                <a
                                    href="https://sakaispice.com/home"
                                    target="_blank"
                                    class="red-color lato-bold"
                                    ><i>https://sakaispice.com/home</i></a
                                >
                            </p>
                            <div class="py-4">
                                <div class="d-flex flex-align-start">
                                    <div>
                                        <img
                                            src="@/assets/certificaciones.png"
                                            alt=""
                                            class="w-100"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="pb-5">
                                <div
                                    class="contBtn d-sm-flex d-lg-block d-xl-flex justify-content-center flex-sm-row flex-column gap-4 py-5"
                                >
                                    <a
                                        href="/downloads/brochure-harina-mostaza.pdf"
                                        target="_blank"
                                        class="btnCustom btnCustomList btn d-flex justify-content-center align-items-center mb-3 mb-xl-0"
                                        >VER CATÁLOGO</a
                                    >
                                    <a
                                        href="/downloads/tabla-de-especificaciones.pdf"
                                        target="_blank"
                                        class="btnCustom btnCustomList btn d-flex justify-content-center align-items-center mb-3 mb-xl-0"
                                        >ESPECIFICACIONES<br />TÉCNICAS</a
                                    >
                                    <RouterLink
                                        to="#video"
                                        class="btnCustom btnCustomList btn d-flex justify-content-center align-items-center mb-3 mb-xl-0"
                                        >VER VIDEO</RouterLink
                                    >
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!--<section class="contentPadding pt-0">
        <div class="container">
            <div class="row d-flex justify-content-center">
                <RouterLink
                    to="#video"
                    class="blockMouse blockMouseStatic d-flex flex-column justify-content-center align-items-center text-center"
                    ><span class="pb-2 lato-black">Ver<br />Video</span>
                    <span><img src="@/assets/arrow-down.svg" alt="" /></span
                ></RouterLink>
            </div>
        </div>
    </section>-->
</template>
