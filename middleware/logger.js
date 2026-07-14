import colors from 'colors';

const logger = (req, res, next) => {
  const methodColors={
   GET:'green',
   POST:'blue',
   PUT :' yellow',
   DELETE: 'red'
  }
const color =methodColors[req.method] || white;

   console.log( 
   `${req.method} ${req.protocol}://${req.get('host')}${req.originalUrl}`[
   color
  ]
  );
  // colors package adds ANSI color methods (colors.red, colors.blue, etc.)
  //console.log(colors.red(url));

  next();
};

export default logger;

