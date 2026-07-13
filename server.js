import express from 'express';
//const express= require('express');

import path from 'path';
//const path =require('path');

import posts from'./routes/posts.js';
//const post=require('./routes/posts');

const port = process.env.PORT || 8000;

const app=express();

//Body parse middleware-->take care to send json 
app.use(express.json());
app.use(express.urlensoded({extended:false}));

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
app.listen(port, () => console.log(`Server is running on port ${port}`));
