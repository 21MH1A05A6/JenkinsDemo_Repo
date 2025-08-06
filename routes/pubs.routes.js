import express from 'express';
import { selectAllAuthors } from '../controllers/pubs.controller.js';
import { authMiddleware } from '../middlewares/auth.middleware.js';
const pubsRoutes = express.Router();
pubsRoutes.get('/authors', authMiddleware,selectAllAuthors);
export default pubsRoutes;