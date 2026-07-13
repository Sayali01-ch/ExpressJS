import express from 'express';
//const express= require('express');
const router= express.Router();

// app.use((req, res, next) => {
//   console.log('Incoming:', req.method, req.url);
//   next();
// });

let posts=[
{id:1, title:'Post One'},
{id:2, title:'Post Two'},
{id:3, title:'Post Three'}
];


//get limited outputs
app.get('/',(req, res)=>{
    
    const limit=parseInt(req.query.limit);
    if(!isNaN(limit)&& limit>0){
        res.status(200).json(posts.slice(0,limit));
    }else{
        res.status(200).json(posts);
    }
});

const logger =(req, res, next) => {
    console.log(`${req.method} ${req.protocol}://${req.get('host')}${req.originalUrl}`);
 next();
};




//get all posts
Router.get('/',logger, (req,res) =>{
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

//Create new post
router.post('/',(req, res) => {
    const newPost={
        id:posts.length+1,
        title:req.body.title,
    };
    if(!newPost.title){
        return res.sendStatus(400).json({msg:'Plaease include the title'});
    }
    //console.log(req.body);
posts.push(newPost);
    res.status(201).json(posts);
});

//Update Post
router.put('/:id',(req,res)=> {
    const id =parseInt(reqparams.id);
    const post =posts.find((post) => post.id);
    
    if(!post){
        return res
        .sendStatus(404)
        .json({msg:`A post with the id of ${id} was not not found` });

    }
post.title= req.body.title;
res.ststus(200).json(posts);
});


//Delete Post 
router.delete('/:id',(req,res)=> {
    const id =parseInt(reqparams.id);
    const post =posts.find((post) => post.id);
    
    if(!post){
        return res
        .sendStatus(404)
        .json({msg:`A post with the id of ${id} was not not found` });
    }
    posts=posts.filter((post) => post.id !== id);

res.ststus(200).json(posts);
});

export default router;
//module.exports=Router;
