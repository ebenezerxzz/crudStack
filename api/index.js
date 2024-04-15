import express from 'express';
import cors from 'cors';
import routeData from './routes/routes.js'

const server = express();
const port = 8080;

server.use(express.json());
server.use(cors());
server.use('/', routeData);

server.listen(port, () => console.log(`Server is running in port ${port}`))