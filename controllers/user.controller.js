import bcrypt from 'bcryptjs';
import db from '../config/db.js';
import { createUser, findUserByEmail } from '../models/user.model.js';  
export const registerUser = async (req, res) => {
    
    try {
        const {name , email, password, gender} = req.body;
        const existing =await findUserByEmail(email);
        if (existing) { 
            return res.status(400).json({ message: 'User already exists' });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const userId=await createUser( name, email, hashedPassword,gender);
        // Here you would typically save the user to the database
        res.status(201).json({ message: 'User registered successfully', userId: userId });
    } catch (error) {
        res.status(500).json({ message: 'Error registering user', error });
    }
}

export const registerUser1 = async (req, res) => {
    
    try {
        const {name , email, username, phone} = req.body;
        const existing =await findUserByEmail(email);
        if (existing) { 
            return res.status(400).json({ message: 'User already exists' });
        }
        const userId=await createUser( name , email, username, phone);
        // Here you would typically save the user to the database
        res.status(201).json({ message: 'User registered successfully', userId: userId });
    } catch (error) {
        res.status(500).json({ message: 'Error registering user', error });
    }
}
export const selectAllUsers = async (req, res) => {
   try {
        const query = 'SELECT * FROM user_table';
        const [rows] = await db.execute(query);
        res.status(200).json(rows);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching users', error });   
}
}
export const getUserById = async (req, res) => {
    const userId = req.params.id;
    try {
        const query = 'SELECT * FROM user_table WHERE id = ?';
        const [rows] = await db.execute(query, [userId]);
        if (rows.length > 0) {
            res.status(200).json(rows[0]);
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error fetching user', error });
    }
}
export const updateUser = async (req, res) => {
    const userId = req.params.id;
    const { name, email, password ,gender } = req.body;
    try {   
        const hashedPassword = await bcrypt.hash(password, 10);
        const query = 'UPDATE user_table SET name = ?, email = ?, password=?,gender=? WHERE id = ?';
        const [result] = await db.execute(query, [name, email, hashedPassword,gender, userId]);
        if (result.affectedRows > 0) {  
            res.status(200).json({ message: 'User updated successfully' });
        } else {
            res.status(404).json({ message: 'User not found' });
        }   
    } catch (error) {
        res.status(500).json({ message: 'Error updating user', error });
    }
}

export const deleteUserById=async(req,res)=>{
    const userId = req.params.id;
    try {
        const query = 'DELETE FROM user_table WHERE id = ?';
        const [result] = await db.execute(query, [userId]);
        if (result.affectedRows > 0) {
            res.status(200).json({ message: 'User deleted successfully' });
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error deleting user', error });
    }
}