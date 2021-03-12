import { settings } from '../settings'
import dotenv from 'dotenv';

dotenv.config = settings.GetEnvironmentConfig();

class SecretUtil {

    //Define the node environment
    public PORT = process.env.NODE_PORT;
    public HOST = process.env.NODE_HOST;

    // Define the Encoder API Keys 
    public ENCODER_SERVER = process.env.ENCODER_SERVER!;
    public ENCODER1_PORT = process.env.ENCODER1_PORT!;
    public ENCODER2_PORT = process.env.ENCODER2_PORT!;
    public ENCODER_DEVICE_PROPERTIES_PATH = process.env.ENCODER_DEVICE_PROPERTIES_PATH!;
}

export const secretUtil = new SecretUtil();