import express from 'express';
import mysql from 'mysql';

import cors from 'cors'
const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'pizza'
});

con.connect((err) => {
    if (err) {
        console.error('Ошибка подключения к базе данных: ', err);
        return;
    }
    console.log('Подключение к базе данных успешно');
});

const app = express();

app.use(cors())
app.use(express.json());

app.post('/pizza', (req, res) => {
    try {
        const { title, price, img } = req.body;
        if (!title || !price || !img) {
            return res.status(400).json({ error: 'Все поля (title, price, img) обязательны' });
        }
        const query = 'INSERT INTO pizzas (title, price, img) VALUES (?, ?, ?)';
        const values = [title, price, img];
        con.query(query, values, (err, results) => {
            if (err) {
                console.error(err);
                return res.status(500).send('Ошибка создания записи');
            } else {
                return res.status(201).json({ id: results.insertId, title, price, img });
            }
        });
    } catch (e) {
        return res.status(500).json({ error: 'Внутренняя ошибка сервера' });
    }
});

app.get('/pizza' , (req , res )=>{
    const query = 'SELECT * FROM pizzas';  
    con.query(query, (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).send('Ошибка получения данных');
        } else {
            res.json(results);
        }
    });
})

app.listen(4444, () => {
    console.log('Сервер запущен на порту 4444');
});
