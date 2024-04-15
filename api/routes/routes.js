import express from 'express';

import {getUsers, postData} from '../controllers/controller.js'

const router = express.Router()

router.get('/get', getUsers);
router.post('/post', postData)

export default router