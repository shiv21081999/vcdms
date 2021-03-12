import express, { Request, Response, NextFunction } from 'express';
import * as bodyParser from 'body-parser';
import "reflect-metadata";
import { appAPI } from './routes/apiroutes';

/**
 * @description Express server application class.
 */
class App {
  public server = express();

  constructor() {
    this.defineRoutes();
  }

  private defineRoutes(): void {

    // API Base path
    this.server.use(bodyParser.urlencoded({ extended: false }));
    this.server.use(bodyParser.json());
    this.server.use(appAPI.path, appAPI.routerinstance);
    
    // fallback invalid route
    this.server.use((req: Request, res: Response, next: NextFunction) => {
      res.status(404).json({
        success: false,
        message: 'Invalid route',
        result: {},
        statusCode: 404
      });
    });
  }

}

// initialize server app
const app = new App();

// export the default "App" class object "server" property
export default app;