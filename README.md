ExpressJS

A basic Express.js server built while following the [Express Crash Course](https://www.youtube.com/watch?v=CnH3kAXSrmU) by Traversy Media. This project demonstrates core Express concepts — routing, controllers, middleware, and serving static files — using an MVC-style folder structure.

## 📺 Reference

This project follows along with the tutorial:
**[Express Crash Course](https://www.youtube.com/watch?v=CnH3kAXSrmU)** — a full walkthrough of building an Express server from scratch, covering routing, controllers, middleware, error handling, EJS templating, and connecting a frontend.

### Topics covered (with timestamps)

| Time | Topic |
|------|-------|
| 6:45 | Express Setup |
| 9:00 | Basic Server |
| 13:10 | `--watch` Flag & NPM Scripts |
| 15:25 | `res.sendFile()` Method |
| 18:00 | Static Web Server |
| 19:48 | Working with JSON |
| 22:35 | Postman Utility |
| 23:45 | Environment Variables (`.env`) |
| 26:30 | Request Params (`req.params`) |
| 29:35 | Query Strings (`req.query`) |
| 33:19 | Setting Status Codes |
| 36:40 | Multiple Responses |
| 37:35 | Route Files |
| 41:40 | Using ES Modules |
| 43:47 | Request Body Data |
| 47:53 | POST Request |
| 50:23 | PUT Request |
| 53:23 | DELETE Request |
| 55:44 | Middleware |
| 1:00:24 | Custom Error Handler |
| 1:08:30 | Catch-All Error Middleware |
| 1:10:47 | Colors Package |
| 1:14:17 | Using Controllers |
| 1:20:45 | `__dirname` Workaround (ESM) |
| 1:24:29 | Making Requests From Frontend |
| 1:30:03 | Submit Form to API |
| 1:36:00 | EJS Template Engine Setup |
| 1:41:15 | Pass Data to Views |
| 1:42:50 | Pass and Loop Over Arrays |
| 1:44:20 | Template Partials |

## 🛠️ Tech Stack

- **Node.js**
- **Express** `^5.2.1`
- **EJS** — templating/view engine
- **colors** — colored console output for logging
- Node's built-in `--env-file` — environment variables
- ES Modules (`"type": "module"` in `package.json`)

## 📁 Project Structure

```
ExpressJS/
├── controllers/     # Route handler logic
├── middleware/       # Custom Express middleware
├── public/           # Static assets (HTML, CSS, images, etc.)
├── routes/           # Express route definitions
├── server.js         # App entry point
├── package.json
└── .gitignore
```

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) installed (v18+ recommended)

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/Sayali01-ch/ExpressJS.git
   cd ExpressJS
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. (Optional) Create a `.env` file in the root directory for any environment variables the app needs.

### Running the App

**Production mode:**
```bash
npm start
```

**Development mode** (auto-restarts on file changes using Node's built-in `--watch`, and loads `.env` automatically):
```bash
npm run dev
```

By default, once running, the server should be accessible at:
```
http://localhost:3000
```
(Check `server.js` for the exact port configuration.)

## 📜 Available Scripts

| Script         | Description                                              |
|----------------|------------------------------------------------------------|
| `npm start`    | Runs the server with plain Node                            |
| `npm run dev`  | Runs the server in watch mode with `.env` support           |
| `npm test`     | Placeholder — no tests specified yet                        |

## 🧩 Key Concepts Covered

- Setting up an Express server and serving static files (`public/`)
- Defining and organizing routes across separate route files (`routes/`)
- Separating business logic into controllers (`controllers/`)
- Handling `req.params`, `req.query`, and request body data
- Full CRUD via GET, POST, PUT, and DELETE requests
- Setting custom response status codes
- Writing and applying custom middleware, including a catch-all error handler (`middleware/`)
- Using ES Modules and the `__dirname` workaround in an ESM project
- Loading environment variables with `.env`
- Making requests from a frontend and submitting forms to the API
- Server-side rendering with the EJS template engine, passing data/arrays to views, and using template partials

## 🤝 Contributing

This is a learning project, but feel free to fork it and experiment.

## 📄 License

ISC
]()
