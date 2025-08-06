import express from 'express';
const userRoutes = express.Router();
userRoutes.get('/profile', (req, res) => {
    res.json({ message: 'profile endpoint' });
});
export default userRoutes;