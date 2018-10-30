import express from 'express';
import config from './config';
import aboutRouter from './api/about';
import workExpRouter from './api/workExp';
import skillsRouter from './api/skills';

var server = express();

server.listen(config.port);

server.set('view engine', 'ejs');
server.set('views', 'views');

server.use(express.static('public'));
server.use(aboutRouter);
server.use(workExpRouter);
server.use(skillsRouter);
//server.use('/', apiRouter);

console.log("server started at port : "+config.port+" and host : "+config.host);
