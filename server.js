const express= require('express');
const path =require('path');
const post=require('./routes/posts');
const port = process.env.PORT || 8000;

const app=express();

app.use((req, res, next) => {
  console.log('Incoming:', req.method, req.url);
  next();
});

//setup static folder 
//app.use(express.static(path.join(__dirname, 'public'))); 

// app.get('/',(req, res)=>{
//     res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

// app.get('/about',(req, res)=>{
//     res.sendFile(path.join(__dirname, 'public', 'about.html'));
// });




//Get single posts (fixed)
// NOTE: Keep only one handler for /api/posts

//Routes
app.use('/api/posts', posts);
app.listen(port, () => console.log(`Server is running on port ${port}`));
