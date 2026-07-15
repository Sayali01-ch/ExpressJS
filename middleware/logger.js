import chalk from 'chalk';

const logger = (req, res, next) => {
  const url = `${req.method} ${req.protocol}://${req.get('host')}${req.originalUrl}`;

  const methodColors = {
    GET: 'green',
    POST: 'blue',
    PUT: 'yellow',
    DELETE: 'red',
  };

  const color = methodColors[req.method];

  if (color && chalk[color]) {
    console.log(chalk[color](url));
  } else {
    console.log(url);
  }

  next();
};

export default logger;

