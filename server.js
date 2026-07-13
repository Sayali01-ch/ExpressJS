const express= require('express');
const path =require('path');
const port = process.env.PORT || 8000;
const app=express();

//setup static folder 
//app.use(express.static(path.join(__dirname, 'public'))); 

// app.get('/',(req, res)=>{
//     res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

// app.get('/about',(req, res)=>{
//     res.sendFile(path.join(__dirname, 'public', 'about.html'));
// });

let posts=[
{id:1, title:'Post One'},
{id:2, title:'Post Two'},
{id:3, title:'Post Three'}
];

//get limited outputs
app.get('/api/posts',(req, res)=>{
    const limit=parseInt(req.query.limit);
    if(!isNaN(limit)&& limit>0){
        res.json(posts.slice(0,limit));
    }else{
        res.json(posts);
    }
});

app.get('/api/posts/:id',(req, res)=>{
const id= parseInt(req.params.id)
console.log(req.params.id);
res.json(posts.filter((posts) => posts.id ===id));
});


//Get single posts (fixed)
// NOTE: Keep only one handler for /api/posts
app.listen(port, () => console.log(`Server is running on port ${port}`));
