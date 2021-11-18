
import app from './config/express';
import routes from './routes/index.route';

import * as errorHandler from './middlewares/errorHandler';
import joiErrorHandler from './middlewares/joiErrorHandler';
import requestLogger from './middlewares/requestLogger';

// enable webpack hot module replacement in development mode
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../webpack/webpack.config.dev';

if (process.env.NODE_ENV === 'development') {

    const compiler = webpack(webpackConfig);
    app.use(webpackDevMiddleware(compiler, { publicPath: webpackConfig.output.publicPath}));
    app.use(webpackHotMiddleware(compiler));
}



// Request logger
app.use(requestLogger);

// Router
app.use('/api', routes);



// Joi Error Handler Middleware
app.use(joiErrorHandler);

// Error Handler Middleware
app.use(errorHandler.genericErrorHandler);
app.use(errorHandler.notFound);
app.use(errorHandler.methodNotAllowed);



export default app;
