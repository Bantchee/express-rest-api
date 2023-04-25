import 'dotenv/config';
import cors from 'cors';
import express from 'express';

const app = express();

app.use(cors());

app.get('/', (req, res) => {
    return res.send('Recieved a GET HTTP method');
})

app.post('/', (req, res) => {
    return res.send('Recieved a POST HTTP method');
})

app.put('/', (req, res) => {
    return res.send('Recieved a PUT HTTP method');
})

app.delete('/', (req, res) => {
    return res.send('Recieved a DELETE HTTP method');
})

app.listen(process.env.PORT, () => 
    console.log(`Example app listening on http://localhost:${process.env.PORT}/`));