import express, { NextFunction, Request, Response } from 'express';
import { BaseRoutes } from "../baseroutes";
import { encoderControllerV1 } from '../../controllers/v1/encoder/encodercontrollerv1';

class MasterRouteV1 extends BaseRoutes {
    public path = '/';

    constructor() {
        super();
        this._configure();
    }

    /**
     * @description Connect routes to their matching controller endpoints.
     */
    private _configure() {

        // this.router.get('/run-process',
        // (req: Request, res: Response, next: NextFunction) => {
        //   this._controller.RunProcess(req, res, next);
        // });
        this.router.get('/', (req, res, next) => {
            res.send("server running");
        });

        this.router.post('/getencoderpropertiesbyport',
            (req: Request, res: Response, next: NextFunction) => {
                encoderControllerV1.GetEncoderPropertiesByPort(req, res, next);
            });

        this.router.post('/getencoderstatusbyport',
            (req: Request, res: Response, next: NextFunction) => {
                encoderControllerV1.GetEncoderStatusByPort(req, res, next);
            });

        this.router.post('/startencodingbyport',
            (req: Request, res: Response, next: NextFunction) => {
                encoderControllerV1.StartEncodingByPort(req, res, next);
            });

        this.router.post('/stopencodingbyport',
            (req: Request, res: Response, next: NextFunction) => {
                encoderControllerV1.StopEncodingByPort(req, res, next);
            });


        // this.router.get('/getencoderproperties',
        //   (req: Request, res: Response, next: NextFunction) => {
        //     encoderControllerV1.GetEncoderPropertiesByPort(req.port);
        //     res.send(SUCCESS_RESPONSE);
        //   });
    }
}

export const masterRouteV1 = new MasterRouteV1();