import http from 'http';
import express from 'express';
import knex from 'knex';
import userRouter from './routes/user.routes';
import carsRouter from './routes/cars.routes';
import bodyParser from 'body-parser';
import cors from 'cors';
import { Model } from 'objection';
import dotenv from 'dotenv';

const port = 3000;
const app = express();

dotenv.config();

const knexInstance = knex({
  client: 'pg',
  connection: {
    host: process.env.HOSTDB,
    database: process.env.DATABASE,
    user: process.env.USER,
    password: process.env.PASSWORD,
    port: Number(process.env.PORT),
  },
});

Model.knex(knexInstance);

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/cars', carsRouter);
app.use('/user', userRouter);

const server = http.createServer(app);
server.listen(port, () => {
  console.log(`API is started at port ${port}`);
});

export default app;
