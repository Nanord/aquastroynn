require('dotenv').config();

import compression, { filter } from 'compression';
import express, {response} from 'express';
import bodyParser from 'body-parser';

let currentRoot = process.execPath;

/**
 * HTTP
 * SERVER
 */
const app = express();

app.use((req, res, next) => {
/*    res.header("x-powered-by", "SMORODINA");
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Origin", process.env.SMORODINA_ALLOW_ORIGIN);
    res.header("Access-Control-Allow-Methods", "GET,POST");
    res.header("Access-Control-Allow-Headers", "Content-Type");*/

    next();
});

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
app.use(compression());

app.use(express.static('public'));


app.all("/ok", (req, res) => res.send("OK"));

// app.use((req, res, next) => {
//     res.status(404);
//     Logger.log('Not found URL: ' + req.url);
//     res.status(404);
//     res.send({ error: 'Not found' });
//     return;
// });
//
//
// app.use((err, req, res, next) => {
//     res.status(err.status || 500);
//     Logger.error('Internal error(' + 500 + ") " + err.message);
//     res.send({ error: err.message });
//     return;
// });


const server = require('http').Server(app);

server.listen(8080);
/**
 * Приветсвие
 */
console.log(`LISTEN ${process.env.SMORODINA_EPD_PORT}`);