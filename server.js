const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.listen(port, () => {
    console.log(`Calculator microservice listening at http://localhost:${port}`);
});

app.get('/add', (req, res) => {
    const { a, b } = req.query;
    const result = parseFloat(a) + parseFloat(b);
    res.json({ result });
});

app.get('/subtract', (req, res) => {
    const { a, b } = req.query;
    const result = parseFloat(a) - parseFloat(b);
    res.json({ result });
});

app.get('/multiply', (req, res) => {
    const { a, b } = req.query;
    const result = parseFloat(a) * parseFloat(b);
    res.json({ result });
});

app.get('/divide', (req, res) => {
    const { a, b } = req.query;
    if (parseFloat(b) === 0) {
        res.status(400).json({ error: 'Division by zero' });
    } else {
        const result = parseFloat(a) / parseFloat(b);
        res.json({ result });
    }
});
