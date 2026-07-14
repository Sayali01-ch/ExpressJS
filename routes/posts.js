import express from 'express';

const router = express.Router();

let posts = [
  { id: 1, title: 'Post One' },
  { id: 2, title: 'Post Two' },
  { id: 3, title: 'Post Three' },
];

// Get all posts (optional ?limit=)
router.get('/', (req, res, next) => {
  const limit = parseInt(req.query.limit);

  if (!isNaN(limit) && limit > 0) {
    return res.status(200).json(posts.slice(0, limit));
  }

  return res.status(200).json(posts);
});

// Get single post by id
router.get('/:id', (req, res, next) => {
  const id = parseInt(req.params.id);
  const post = posts.find((p) => p.id === id);

  if (!post) {
    const error = new Error(`A post with the id of ${id} was not found`);
    error.status = 404;
    return next(error);
  }

  return res.status(200).json(post);
});

// Create new post
router.post('/', (req, res, next) => {
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
});

// Update post
router.put('/:id', (req, res, next) => {
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
});

// Delete post
router.delete('/:id', (req, res, next) => {
  const id = parseInt(req.params.id);
  const post = posts.find((p) => p.id === id);

  if (!post) {
    const error = new Error(`A post with the id of ${id} was not found`);
    error.status = 404;
    return next(error);
  }

  posts = posts.filter((p) => p.id !== id);
  return res.status(200).json(posts);
});

export default router;

