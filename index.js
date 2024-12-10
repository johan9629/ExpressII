import express from 'express';
import "dotenv/config.js";
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import indexRouter from './src/routers/index.router.js';
import errorHandler from './src/middlewares/errorHandler.mid.js';
import pathHandler from './src/middlewares/pathHandler.mid.js';

const server = express();
const port = process.env.PORT;
const ready = () => {
    console.log(`Server ready on port ${port}`);
    dbConnect();
}

server.listen(port, ready);

server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(morgan('dev'));
server.use(cookieParser(process.env.SECRET_KEY));

server.use(indexRouter);
server.use(errorHandler);
server.use(pathHandler);

