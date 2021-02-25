import express, { Request, Response, NextFunction } from 'express';
import * as bodyParser from 'body-parser';
import "reflect-metadata";
/**
 * @description Express server application class.
 */
class App {
  public server = express();
}

// initialize server app
const app = new App();

// export the default "App" class object "server" property
export default app;