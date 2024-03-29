import cors, { CorsOptions } from 'cors';
// import createError from 'http-errors';

const whitelist: string[] = ['http://localhost:5000', 'http://localhost:3000', 'http://localhost:3001'];

const corsOption: CorsOptions = {
    origin: function (origin = '', callback) {
        if (whitelist.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            // callback(createError(404, 'Not allowed by CORS'));
            callback(null, false);
        }
    },
};

const appCors = () => {
    if (process.env.NODE_ENV === 'production') {
        return cors({ origin: '*' });
    } else {
        return cors(corsOption);
    }
};

export default appCors;
