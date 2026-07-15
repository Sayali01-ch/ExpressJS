import express from 'express';
//const express= require('express');
import path from 'path';
//const path =require('path');
import {fileURLToPath} from 'url';
import posts from'./routes/posts.js';
//const post=require('./routes/posts');
import logger from './middleware/logger.js'
import errorHandler from './middleware/error.js';
import notFound from './middleware/notFound.js';

const port = process.env.PORT || 8000;
//Get the directory name 
const __filename= fileURLToPath(import.meta.url);
const __dirname =path.dirname(__filename);

//console.log(__filename);
const app=express();

//Body parse middleware-->take care to send json 
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Logger middleware 
app.use(logger);

//setup static folder 
app.use(express.static(path.join(__dirname, 'public')));

//Routes
app.use('/api/posts', posts);

//Error handler 
app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server is running on port ${port}`));
