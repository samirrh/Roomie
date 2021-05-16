import express from 'express';

import { signin, signup } from '../controllers/user.js'; //Only need .js in node for react you dont need to

const router = express.Router();

router.post('/signin', signin);
router.post('/signup', signup);

export default router;
