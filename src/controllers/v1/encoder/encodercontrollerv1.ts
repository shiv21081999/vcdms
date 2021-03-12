import { NextFunction, Response } from 'express';
import { BaseController } from '../../basecontroller';
import {encoderServicesV1} from '../../../services/v1/encoder/encoderservicesv1';
import {ReqEncoderschemas} from '../../../routes/v1/encoder/encoderschema';
import { IFilteredRequest } from "../../../interfaces";

class EncoderControllerV1 extends BaseController {

    /**
     * @description .
     */
    public async GetEncoderPropertiesByPort(req: IFilteredRequest<ReqEncoderschemas>, res: Response, next: NextFunction) {
        try {
            const requestResult = await encoderServicesV1.GetEncoderPropertiesByPort(req.body);
            return requestResult;
        } catch (error) {
            return null;
        }
    }
}

export const encoderControllerV1 = new EncoderControllerV1();