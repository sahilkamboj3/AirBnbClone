import express from 'express';

const app = express();
const port: number = 5000;

app.use(express.json());

// initial test
app.get('/', (req , res) => {
    res.send('hello world');
})

// app listening
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})