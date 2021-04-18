import 'reflect-metadata'
import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes';
import authMiddleware from '../http/middlewares/auth';

export class App {
    public express: express.Application;

    public constructor() {
        this.express = express();
        this.middlewares();
        this.routes();
    }

    private middlewares(): void {
        this.express.use(express.json());
        this.express.use(bodyParser.urlencoded({ extended: true }));
        this.express.use(bodyParser.json());
        this.express.use(authMiddleware);
    }

    private routes(): void {
        this.express.use(routes);
        this.express.use(express.json());
    }
}

export default new App().express;