import express from 'express';
// import db from '../db/index';
import pool from '../db/index';

const app = express();
app.use(express.json());

// get all users
app.use('/users', async (req, res) => {
    try {
       const query: string = await pool.query("SELECT * FROM user_info");
       res.json(query);
    } catch (err) {
        console.error(err.message)
    }
})

// get user
app.use('/user/:id', async (req, res) => {
    try {
       const id =  req.params.id;
       const query = await pool.query("SELECT * FROM user_info WHERE user_id in ($1)", [id]);
       res.json(query);
    } catch (err) {
        console.error(err.message);
    }
})

// add user
app.use('/postuser', async (req, res) => {
    try {
        const { name, age } = req.body;
        const query = await pool.query("INSERT INTO user_info (name, age) VALUES ($1, $2) RETURNING *", [name, age]);
        res.json(query);
    } catch(err) {
        console.error(err.message)
    }
})