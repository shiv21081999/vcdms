import { secretUtil } from '../../../utils/secretutil';
import request from 'request';
import {ReqEncoderschemas} from '../../../routes/v1/encoder/encoderschema';
import 'process';
class EncoderServicesV1 {

    /**
     * @description .
     */
    public GetEncoderPropertiesByPort = async (req?: ReqEncoderschemas) => {

        //Request currently set properties of encoder 
        const requestResult = await this.GetByPortNo(req?.port);

        return requestResult;
    };

    private GetByPortNo = async (port: any) => {

        let _url = secretUtil.ENCODER_SERVER+":"+port+secretUtil.ENCODER_DEVICE_PROPERTIES_PATH;
        let options = {
            method: 'GET',
            url: _url,
            headers: {
                "Content-Type": 'application/json'
            }
        }

        let resData: any = await new Promise((resolve, reject) => {
            request(options, (err, res) => {
                if (err) throw err;
                resolve(JSON.parse(res.body));
            });
        });

        return resData;
    };
}

export const encoderServicesV1 = new EncoderServicesV1();