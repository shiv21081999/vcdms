import { secretUtil } from '../../../utils/secretutil';
import request from 'request';
import { ReqEncoderschemas } from '../../../routes/v1/encoder/encoderschema';
import 'process';
class EncoderServicesV1 {

    public GetEncoderPropertiesByPort = async (req?: ReqEncoderschemas) => {

        //Request currently set properties of encoder. 
        const requestResult = await this.GetPropertiesByPortNo(req?.port);

        return requestResult;
    };

    private GetPropertiesByPortNo = async (port: any) => {

        let _url = secretUtil.ENCODER_SERVER + ":" + port + secretUtil.ENCODER_DEVICE_PROPERTIES_PATH;
        let options = {
            method: 'GET',
            url: _url,
            headers: {
                "Content-Type": 'application/json'
            },
            strictSSL: false
        }

        let resData: any = await new Promise((resolve, reject) => {
            request(options, (err, res) => {
                if (err) throw err;
                resolve(JSON.parse(res.body));
            });
        });

        return resData;
    };

    public GetEncoderStatusByPort = async (req?: ReqEncoderschemas) => {

        //Request current status of encoder. 
        const requestResult = await this.GetStatusByPortNo(req?.port);

        return requestResult;
    };

    private GetStatusByPortNo = async (port: any) => {

        let _url = secretUtil.ENCODER_SERVER + ":" + port + secretUtil.ENCODER_DEVICE_STATUS_PATH;
        let options = {
            method: 'GET',
            url: _url,
            headers: {
                "Content-Type": 'application/json'
            },
            strictSSL: false
        }

        let resData: any = await new Promise((resolve, reject) => {
            request(options, (err, res) => {
                if (err) throw err;
                resolve(JSON.parse(res.body));
            });
        });

        return resData;
    };

    public StartEncodingByPort = async (req?: ReqEncoderschemas) => {

        //Request to start encoding. 
        const requestResult = await this.StartEncodingByPortNo(req?.port);

        return requestResult;
    };

    public StartEncodingByPortNo = async (port: any) => {
        let _url = secretUtil.ENCODER_SERVER + ":" + port + secretUtil.ENCODER_DEVICE_START_PATH;
        try {
            //let data = ``

            let options = {
                method: 'POST',
                url: _url,
                headers: {
                    "Content-Type": 'application/json'
                },
                strictSSL: false
                //body: data

            }

            let resData: any = await new Promise((resolve, reject) => {
                request(options, (err, res) => {
                    if (err) throw err;
                    resolve(JSON.parse(res.body));
                });
            });

            return resData;
        } catch (error) {
        }
    }

    public StopEncodingByPort = async (req?: ReqEncoderschemas) => {

        //Request to stop encoding. 
        const requestResult = await this.StopEncodingByPortNo(req?.port);

        return requestResult;
    };

    public StopEncodingByPortNo = async (port: any) => {
        let _url = secretUtil.ENCODER_SERVER + ":" + port + secretUtil.ENCODER_DEVICE_STOP_PATH;
        try {
            //let data = ``

            let options = {
                method: 'POST',
                url: _url,
                headers: {
                    "Content-Type": 'application/json'
                },
                strictSSL: false
                //body: data

            }

            let resData: any = await new Promise((resolve, reject) => {
                request(options, (err, res) => {
                    if (err) throw err;
                    resolve(JSON.parse(res.body));
                });
            });

            return resData;
        } catch (error) {
        }
    }
}

export const encoderServicesV1 = new EncoderServicesV1();