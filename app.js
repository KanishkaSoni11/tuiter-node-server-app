import express from 'express';
import cors from 'cors'
import mongoose from "mongoose";



const CONNECTION_STRING = 'mongodb+srv://tuiter-webdev:RBh3Fcl4B6rQG5vG@cluster0.exypbxw.mongodb.net/tuiter?retryWrites=true&w=majority'
mongoose.connect(CONNECTION_STRING);

import HelloController from "./controllers/hello-controller.js";
import UserController from "./controllers/users/users-controller.js";
import TuitsController from "./controllers/tuits/tuits-controller.js";
const app = express()
app.use(cors())

app.use(express.json());
// app.get('/hello', (req, res) => {res.send('Hello World!')})
// app.get('/', (req, res) => {res.send('Welcome to Full Stack Development!')})
TuitsController(app)
UserController(app)
HelloController(app);
app.listen(process.env.PORT || 4000);



