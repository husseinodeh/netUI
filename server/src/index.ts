import * as Koa from 'koa';
import * as morgan from 'koa-morgan';
import * as cors from '@koa/cors';
import router from './router';

import { server as serverConf } from '../config.js';

const server: any = new Koa();

const port: number = serverConf.port;
const host: string = serverConf.host;

/**
 * CORS middleware
 *
 * @param {Object} [options]
 *  - {String|Function(ctx)} origin `Access-Control-Allow-Origin`, default is request Origin header
 *  - {String|Array} allowMethods `Access-Control-Allow-Methods`, default is 'GET,HEAD,PUT,POST,DELETE,PATCH'
 *  - {String|Array} exposeHeaders `Access-Control-Expose-Headers`
 *  - {String|Array} allowHeaders `Access-Control-Allow-Headers`
 *  - {String|Number} maxAge `Access-Control-Max-Age` in seconds
 *  - {Boolean|Function(ctx)} credentials `Access-Control-Allow-Credentials`, default is false.
 *  - {Boolean} keepHeadersOnError Add set headers to `err.header` if an error is thrown
 * @return {Function} cors middleware
 * @api public
 */
server.use(cors());
server.use(morgan('dev'))
server.use(router.routes()).use(router.allowedMethods());

server.listen(port, () => {
  console.log(`Server is listening on http://${host}:${port} 🌒🌕🌘`);
});
/*
export netScannet = () => {}//setInterval ponerla en el helper

require(adfadf)()
*/

