import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import {v4 as uuidv4 } from 'uuid';
import models from './models';
import routes from './routes';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// This allows all origins to access this server (Use white list of production apps)
app.use(cors());

app.use((req, res, next) => {
    req.context = {
        models,
        me: models.users[1],
    };
    next();
});

app.use('/session', routes.session);
app.use('/users', routes.user);
app.use('/messages', routes.message);

app.listen(process.env.PORT, () => 
    console.log(`Example app listening on http://localhost:${process.env.PORT}/`));