const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors())
app.use(express.json());
console.log(app)
const db = require('./db');


const PORT = process.env.PORT || 8080;

const education_static = [
    {
        'name': 'XYZ School',
        'qualification': 'SSLC',
        'passing': '2016',
        'grade': 'A'
    },
    {
        'name': 'ABC School',
        'qualification': 'HSC',
        'passing': '2018',
        'grade': 'A'
    },
]

app.listen(PORT, () => {
    console.log('server listening on port 8080')
})

app.get('/', (req, res) => {
    res.json(education_static);
})

app.get('/db', async (req, res) => {
    try {
        const result = await db.query('SELECT * from common_userprofile');
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});

app.post('/', (req, res) => {
    console.log(req.body)
    education_static.push(req.body);
    console.log(education_static)
    res.json(req.body);
})