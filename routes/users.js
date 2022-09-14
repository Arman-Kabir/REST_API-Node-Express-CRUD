import express from 'express';
 // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'

import { createUser, deleteUser, getUser, getUsers, updateUser } from '../controllers/users.js';

const router = express.Router();

router.get('/', getUsers);

router.post('/',createUser);

//users/2 => req.params {id:2}
router.get('/:id', getUser);

router.delete('/:id', deleteUser);

router.patch('/:id', updateUser);

export default router;