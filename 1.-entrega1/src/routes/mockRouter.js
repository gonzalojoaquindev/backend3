import { Router } from 'express';
import { generateUsers, generateProducts } from '../controller/MockingController.js';
import { usersService } from "../services/usersService.js"


export const router = Router();

router.get('/mockingusers/:count', (req, res) => {

    const users = []

    for (let i = 0; i < 50; i++) {
        users.push(generateUsers())

    }

    res.send({ satus: 'success', users })
});


router.post('/generateData', async (req, res) => {
    const { users, products } = req.body;
    const amount = parseInt(users) || 50;
    const quantity = parseInt(products) || 5;
    console.log(users, products)

    const results = []
    for (let i = 0; i < amount; i++) {
        let newUser = generateUsers(quantity)
        await usersService.createUser(newUser);
        results.push(newUser)


    }
    res.send({ status: 'success', payload: results });
});



