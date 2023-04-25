import 'dotenv/config';
import express from 'express';

const app = express();

app.listen(3000, () => 
    console.log('Example app listening on http://localhost:3000/'));