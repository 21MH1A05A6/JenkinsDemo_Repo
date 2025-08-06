import db from '../config/db.js';
// export const createUser = async (name, email, password,gender) => {
//     const query = 'INSERT INTO user_table (name, email, password,gender) VALUES (?, ?, ?, ?)';
//     const [result] = await db.execute(query, [name, email, password,gender]);
//     return result.insertId; // Return the ID of the newly created user
// }

export const createUser = async (name, email, username,phone) => {
    const query = 'INSERT INTO user_table (name, email, username,phone) VALUES (?, ?, ?, ?)';
    const [result] = await db.execute(query, [name, email, username,phone]);
    return result.insertId; // Return the ID of the newly created user
}

export const findUserByEmail = async (email) => {
    const query = 'SELECT * FROM user_table WHERE email = ?';
    const [rows] = await db.execute(query, [email]);
    return rows.length > 0 ? rows[0] : null; // Return the user if found, otherwise null
}
