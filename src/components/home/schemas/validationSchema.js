import * as yup from 'yup'

export const schema = yup.object({
    firstname: yup.string().required('Campo Obligatorio'),
    phone: yup.string().required('Campo Obligatorio'),
    email: yup.string().email('No es un correo electrónico válido').required('Campo Obligatorio'),
    company: yup.string().required('Campo Obligatorio'),
    message: yup.string()
})
