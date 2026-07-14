import express from 'express';
//const express= require('express');

import path from 'path';
//const path =require('path');

import posts from'./routes/posts.js';
//const post=require('./routes/posts');
import logger from './middleware/logger.js'
import errorHandler from './middleware/error.js';
import notFound from './middleware/notFound.js';

const port = process.env.PORT || 8000;

const app=express();

//Body parse middleware-->take care to send json 
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Logger middleware 
app.use(logger);


// app.use((req, res, next) => {
//   console.log('Incoming:', req.method, req.url);
//   next();
// });

//setup static folder 
//app.use(express.static(path.join(__dirname, 'public'))); 

// app.get('/',(req, res)=>{
//     res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

// app.get('/about',(req, res)=>{
//     res.sendFile(path.join(__dirname, 'public', 'about.html'));
// });

//Routes
app.use('/api/posts', posts);
// app.use((req, res, next) => {
//     const error= new Error('Not Found');
//     error.status=404;
//     next(error);
// });

//Error handler 
app.use(notFound);
app.use(errorHandler);
app.listen(port, () => console.log(`Server is running on port ${port}`));
