import express from 'express';
import dotenv from 'dotenv';
import userRoutes from './routes/user.routes.js';
import authRoutes from './routes/auth.routes.js';
import pubsRoutes from './routes/pubs.routes.js';
import cors from 'cors';


dotenv.config();
const app=express();
app.use(cors());
app.use(express.json());
app.use("/api/v1",userRoutes);
app.use("/api/v1/auth", authRoutes);
app.use("/api/pubs", pubsRoutes);
export default app;