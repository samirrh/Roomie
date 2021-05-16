import express from 'express';

import {
  getPosts,
  createPost,
  updatePost,
  deletePost,
} from '../controllers/posts.js'; //Only need .js in node for react you dont need to
import auth from '../middleware/auth.js';
const router = express.Router();

router.get('/', getPosts);
router.post('/', auth, createPost);
router.patch('/:id', auth, updatePost);
router.delete('/:id', auth, deletePost); // controler has access to ones before it so ones after has req.userid from auth

export default router;
