import express from "express";
import { registerUser,registerUser1,deleteUserById } from "../controllers/user.controller.js";
import { selectAllUsers,getUserById,updateUser } from "../controllers/user.controller.js";
const authRoutes = express.Router();

authRoutes.get('/login', (req, res) => {
    res.json({ message: 'Login endpoint' });
});
authRoutes.post('/register', registerUser);
authRoutes.post('/register1', registerUser1);
authRoutes.get("/selectAll",selectAllUsers);
authRoutes.get("/getUser/:id", getUserById);
authRoutes.put("/updateUser/:id", updateUser);
authRoutes.delete("/deleteUser/:id", deleteUserById);
export default authRoutes;