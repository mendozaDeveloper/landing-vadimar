<script setup>
import { Form, Field, useForm } from 'vee-validate'
import { schema } from './schemas/validationSchema.js'

const { errors, handleSubmit, defineField, isSubmitting } = useForm({
    validationSchema: schema
})

const [firstname, firstnameAttrs] = defineField('firstname')
const [phone, phoneAttrs] = defineField('phone')
const [email, emailAttrs] = defineField('email')
const [company, companyAttrs] = defineField('company')
const [message] = defineField('message')

const onSubmit = handleSubmit(async (values, { resetForm }) => {
    console.log('Formulario Enviado')
})
</script>

<template>
    <section id="contacto" class="contentPadding black-background-block">
        <div class="container pb-5">
            <div class="row">
                <div class="d-flex justify-content-center">
                    <div class="containerTitles mb-4 text-center">
                        <h2 class="thridTit lato-black mb-0">Contáctanos</h2>
                    </div>
                </div>
            </div>
        </div>
        <Form id="formBanner" @submit="onSubmit" novalidate>
            <div class="container">
                <div class="contentForm">
                    <div class="row">
                        <div class="col-md-5">
                            <div class="mb-2 text-white">
                                <Field
                                    type="text"
                                    class="form-control"
                                    name="firstname"
                                    id="firstname"
                                    v-model="firstname"
                                    v-bind="firstnameAttrs"
                                    placeholder="Nombre*"
                                />
                            </div>

                            <div class="mb-2 text-white">
                                <Field
                                    type="email"
                                    class="form-control correoInput"
                                    name="email"
                                    id="email"
                                    v-model="email"
                                    v-bind="emailAttrs"
                                    placeholder="Email*"
                                />
                            </div>

                            <div class="mb-2 text-white">
                                <Field
                                    type="text"
                                    class="form-control"
                                    name="phone"
                                    id="phone"
                                    v-model="phone"
                                    v-bind="phoneAttrs"
                                    placeholder="Número telefónico*"
                                />
                            </div>
                        </div>
                        <div class="col-md-2"></div>
                        <div class="col-md-5">
                            <div class="mb-2 text-white">
                                <Field
                                    type="text"
                                    class="form-control"
                                    name="company"
                                    id="company"
                                    v-model="company"
                                    v-bind="companyAttrs"
                                    placeholder="Empresa*"
                                />
                            </div>

                            <div class="mb-2 text-white">
                                <Field
                                    as="textarea"
                                    class="form-control"
                                    name="message"
                                    id="message"
                                    v-model="message"
                                    placeholder="Déjanos tu mensaje"
                                />
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="col-12 pt-4">
                            <div class="mx-auto d-flex justify-content-center align-items-center">
                                <button
                                    type="submit"
                                    class="btnCustom btnCustomSubmit btn black-background-block"
                                    :disabled="isSubmitting"
                                >
                                    {{ isSubmitting ? 'Enviando formulario...' : 'Enviar Mensaje' }}
                                </button>
                            </div>
                        </div>
                    </div>
                    <div v-if="Object.keys(errors).length" class="p-5 pb-0">
                        <div class="alert alert-danger d-flex align-items-center mb-0">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="currentColor"
                                class="bi bi-exclamation-triangle-fill flex-shrink-0 me-2"
                                viewBox="0 0 16 16"
                                role="img"
                                aria-label="Warning:"
                            >
                                <path
                                    d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
                                />
                            </svg>
                            <div>
                                <div v-if="Object.keys(errors).length > 1">
                                    Hay {{ Object.keys(errors).length }} campos obligatorios por
                                    llenar.
                                </div>
                                <div v-else>
                                    Hay {{ Object.keys(errors).length }} campo obligatorio por
                                    llenar.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Form>

        <div class="footer">
            <div class="container">
                <div class="row">
                    <div
                        class="footerCont d-flex justify-content-between pt-5 flex-column flex-lg-row"
                    >
                        <div class="col-12 col-lg-4">
                            <div class="mb-3">
                                <h4 class="lato-bold">Ubícanos</h4>
                            </div>
                            <div class="d-flex align-items-center gap-4 mb-3">
                                <div><img src="@/assets/icon-marker.svg" alt="" /></div>
                                <div>Calle Joaquín Capello 545 Miraflores, Lima - Perú</div>
                            </div>
                            <div class="d-flex align-items-center gap-4 mb-3">
                                <div><img src="@/assets/icon-phone.svg" alt="" /></div>
                                <div class="d-flex align-items-center gap-4">
                                    <span>+511 604 3200</span> <span>(01) 604 3200</span>
                                </div>
                            </div>
                            <div class="d-flex align-items-center gap-4 mb-3">
                                <div><img src="@/assets/icon-whatsapp.svg" alt="" /></div>
                                <div class="d-flex align-items-center gap-4">
                                    <span
                                        >+51 970 076 318<br />
                                        +51 934 568 737<br />
                                        +51 957 514 759</span
                                    >
                                    <span
                                        >+51 919 483 776<br />
                                        +51 919 492 089<br /><br
                                    /></span>
                                </div>
                            </div>
                            <div class="d-flex align-items-center gap-4 mb-3">
                                <div><img src="@/assets/icon-letter.svg" alt="" /></div>
                                <div>
                                    <a
                                        href="mailto:ventas@vadimarperu.com"
                                        class="text-white text-decoration-none"
                                        >ventas@vadimarperu.com</a
                                    >
                                </div>
                            </div>
                        </div>
                        <div
                            class="d-flex flex-column justify-content-between align-items-center col-12 col-lg-4 mt-4 mt-lg-0 footerTextCenter"
                        >
                            <div class="logoFooter">
                                <img src="@/assets/logo-footer.svg" alt="" />
                            </div>
                            <div class="text-center">
                                <span class="lato-black">2024 VADIMAR SAC</span>
                                <br />
                                Todos los derechos reservados
                                <br />
                                <div>
                                    <a
                                        href="#"
                                        class="text-white text-decoration-underline lato-black"
                                        >Aviso legal</a
                                    >
                                    |
                                    <a
                                        href="#"
                                        class="text-white text-decoration-underline lato-black"
                                        >PolÍtica de privacidad</a
                                    >
                                </div>
                            </div>
                        </div>
                        <div class="text-lg-end col-12 col-lg-4 mt-5 mt-lg-0">
                            <div class="mb-3">
                                <h4 class="lato-bold">Horario Laboral</h4>
                            </div>
                            <div
                                class="d-flex justify-content-end flex-column gap-2 gap-lg-4 mb-3 text-lg-end"
                            >
                                <div>
                                    <span class="lato-black red-color pe-2">Lun - Vie</span> 7.20
                                    a.m. a 4.45 p.m.
                                </div>
                                <div>
                                    <span class="lato-black red-color pe-2">Sab</span> 7.20 a.m. a
                                    12.00 p.m.
                                </div>
                                <div>
                                    <a href="#" class="lato-black text-white"
                                        >Factura Electrónica</a
                                    >
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
