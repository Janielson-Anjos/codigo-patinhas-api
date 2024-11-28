import express from 'express';
import adotantesRaoutes from './adotantesRoutes.js';
import petsRoutes from './petsRoutes.js';
import adocaoRoutes from './adocaoRoutes.js'
import loginRoutes from './loginRoutes.js';

const indexRouter = express.Router();

indexRouter.use('/usuario', adotantesRaoutes);
indexRouter.use('/pet', petsRoutes);
indexRouter.use('/adocao', adocaoRoutes);
indexRouter.use('/login', loginRoutes);

export default indexRouter;