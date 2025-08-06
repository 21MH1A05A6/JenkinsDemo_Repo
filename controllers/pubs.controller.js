import db from "../config/db.js";
export const selectAllAuthors = async (req, res) => {
    try {
        const query = 'SELECT * FROM authors';
        const [rows] = await db.execute(query);
        res.status(200).json(rows);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching pubs', error });
    }
}