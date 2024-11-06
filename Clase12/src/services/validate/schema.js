import Joi from "joi"

export const validateProd = (prod) => {
    const prodSchema = Joi.object({
        name: Joi.string().min(6).max(10),
        price: Joi.number().min(1).max(2500000)
    })

    //validate -> es propia de Joi y valida el dato que yo le pase
    const { error } = prodSchema.validate(prod)
    //esto es un ejemplo de como manejar el error
    const result = error ? true : false
    return result
}