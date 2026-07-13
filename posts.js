const express= require('express');
const path =require('path');
const port = process.env.PORT || 8000;
const app=express();
app.use((req, res, next) => {
  console.log('Incoming:', req.method, req.url);
  next();
});

let posts=[
{id:1, title:'Post One'},
{id:2, title:'Post Two'},
{id:3, title:'Post Three'}
];

//get limited outputs
app.get('/api/posts',(req, res)=>{
    
    const limit=parseInt(req.query.limit);
    if(!isNaN(limit)&& limit>0){
        res.status(200).json(posts.slice(0,limit));
    }else{
        res.status(200).json(posts);
    }
});

//get all posts
Router.get('/', (req,res) =>{
    const limit=parseInt(req,query.limit);
    if(!isNaN(limit) && limit>0){
        return res.status(200).json(posts.slice(0,limit));
    }
    re.status(200).json(posts);
});

//Get single posts
app.get('/',(req, res)=>{
const id= parseInt(req.params.id);
const post=posts.find((post) => post.id ===id);
if(!post){
    res.status(404).json({msg: `Apost with the id of ${id} was not found`});
}else{
    res.status(200).json(post);
}
});

module.exports=Router;
