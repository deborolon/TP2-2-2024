import { faker } from '@faker-js/faker'

const randomProd = () => {
    const prod = {
        name: faker.commerce.product(),
        price: faker.commerce.price(),
        color: faker.color.human()
    }

    return prod
}

export default {
    randomProd
}