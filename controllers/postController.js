//@desc Get all posts
//@route GET /api/posts
 export const getPosts=(req, res, next) => {
  const limit = parseInt(req.query.limit);

  if (!isNaN(limit) && limit > 0) {
    return res.status(200).json(posts.slice(0, limit));
  }

  return res.status(200).json(posts);
};

//@desc Get single post
//@route GET/api/posts/:id
export const getPost=(req, res, next) => {
  const id = parseInt(req.params.id);
  const post = posts.find((p) => p.id === id);

  if (!post) {
    const error = new Error(`A post with the id of ${id} was not found`);
    error.status = 404;
    return next(error);
  }

  return res.status(200).json(post);
};


//@desc Create new post 
//@route POST/api/posts/:id
export const createPost =(req, res, next) => {
  const title = req.body?.title;

  if (!title) {
    const error = new Error('Please include the Title');
    error.status = 400;
    return next(error);
  }

  const newPost = {
    id: posts.length + 1,
    title,
  };

  posts.push(newPost);
  return res.status(201).json(posts);
}


//@desc update post 
//@route PUT/api/posts/:id
export const updatePost=(req, res, next) => {
  const id = parseInt(req.params.id);
  const post = posts.find((p) => p.id === id);

  if (!post) {
    const error = new Error(`A post with the id of ${id} was not found`);
    error.status = 404;
    return next(error);
  }

  const title = req.body?.title;
  if (!title) {
    const error = new Error('Please include the Title');
    error.status = 400;
    return next(error);
  }

  post.title = title;
  return res.status(200).json(posts);
}


//@desc Delete post
//@route DELETE/api/posts/:id
export const deletePost=(req, res, next) => {
  const id = parseInt(req.params.id);
  const post = posts.find((p) => p.id === id);

  if (!post) {
    const error = new Error(`A post with the id of ${id} was not found`);
    error.status = 404;
    return next(error);
  }

  posts = posts.filter((p) => p.id !== id);
  return res.status(200).json(posts);
}