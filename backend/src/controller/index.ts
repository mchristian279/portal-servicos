import express from "express";
import configMiddleware from './config-middleware';
import {datacenterController} from "./datacenter-controller";

const app = express();

configMiddleware(app);

// controllers
datacenterController(app);


export default app;


