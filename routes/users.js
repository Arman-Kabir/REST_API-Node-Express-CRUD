import express from 'express';
import { v4 as uuidv4 } from 'uuid';
uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'

const router = express.Router();

let users = [
    // {
    //     firstName: "John",
    //     lastName: "Doe",
    //     age: 25
    // },
    // {
    //     firstName: "Jahn",
    //     lastName: "Does",
    //     age: 26
    // }

];

router.get('/', (req, res) => {
    // console.log(users);
    res.send(users);
});

router.post('/', (req, res) => {
    // console.log('POST ROUTE REACHED ');
    const user = req.body;
    users.push({ ...user, id: uuidv4() });
    res.send(`User with the username ${user.firstName} added to the db`);
});


//users/2 => req.params {id:2}
router.get('/:id', (req, res) => {
    const { id } = req.params;
    const foundUser = users.find((user) => user.id === id);
    res.send(foundUser);
});


router.delete('/:id', (req, res) => {
    const { id } = req.params;

    users = users.filter((user) => user.id !== id);
    res.send(`user with the ${id} deleted from the db`);
})

export default router;