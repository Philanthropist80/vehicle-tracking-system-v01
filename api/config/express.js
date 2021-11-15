import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import methodOverride from 'method-override';

import constant from './directory';

const app = express();

require('dotenv').config();

app.set('port',  process.env.APP_PORT || 3000);
app.set('host',  process.env.APP_HOST || 'localhost');

app.use(express.static(constant.distDir));

app.use(cors());
//app.use(helmet());
app.use(helmet.contentSecurityPolicy({
    directives: {
        "default-src":["'self'","http://localhost:3000"],
        "connect-src":["'self'","http://localhost:3000"],
      "script-src": ["'self'","'unsafe-eval'", "'unsafe-inline'","https://cdnjs.cloudflare.com/","https://openlayers.org/", "https://cdn.polyfill.io","https://unpkg.com/elm-pep"],
      "style-src": ["'self'", "'unsafe-inline'","https://openlayers.org","https://fonts.googleapis.com/"],
      "img-src":["*","data:"],
      "font-src":["'self'","https://fonts.gstatic.com"],
      
    },
  }));



app.use(compression());
app.use(methodOverride());
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(express.static(constant.assetsDir));

export default app;