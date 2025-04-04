
import { faker } from '@faker-js/faker';
import bcrypt from 'bcrypt';

const hashedPassword = bcrypt.hashSync('coder123', 10); // contraseña encriptada

export const generateProducts = () => {
    return {
        title: faker.commerce.productName(),
        price: Number(faker.commerce.price()),
        departament: faker.commerce.department(),
        stock: parseInt(faker.string.numeric()),
        id: faker.database.mongodbObjectId(),
        thumbnail: faker.image.url()
    }
}

export const generateUsers = (nProduct) => {
    const carts = []
    let numberOfProducts = nProduct || parseInt(faker.string.numeric(1, { bannedDigits: '0' }))

    for (let i = 0; i < numberOfProducts; i++) {
        carts.push(generateProducts())
    }

    return {
        first_name: faker.person.firstName(),
        last_name: faker.person.lastName(),
        email: faker.internet.email(),
        sex: faker.person.sex(),
        birthDate: faker.date.birthdate(),
        phone: faker.phone.number(),
        image: faker.image.avatar(),
        id: faker.database.mongodbObjectId(),
        carts
    }
}

