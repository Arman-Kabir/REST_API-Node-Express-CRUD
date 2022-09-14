import { v4 as uuidv4 } from 'uuid';
// uuidv4();

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

export const createUser = (req, res) => {
    // console.log('POST ROUTE REACHED ');
    const user = req.body;
    users.push({ ...user, id: uuidv4() });
    res.send(`User with the username ${user.firstName} added to the db`);
}

export const getUsers = (req, res) => {
    // console.log(users);
    res.send(users);
}

export const getUser = (req, res) => {
    const { id } = req.params;
    const foundUser = users.find((user) => user.id === id);
    res.send(foundUser);
}

export const deleteUser  =(req, res) => {
    const { id } = req.params;

    users = users.filter((user) => user.id !== id);
    res.send(`user with the ${id} deleted from the db`);
}

export const updateUser = (req, res) => {
    const { id } = req.params;
    const { firstName, lastName, age } = req.body;
    const user = users.find((user) => user.id === id);

    if (firstName) {
        user.firstName = firstName;
    }
    if (lastName) {
        user.lastName = lastName;
    }
    if (age) {
        user.age = age;
    }

    res.send(`User with id ${id} has been updated`);
}