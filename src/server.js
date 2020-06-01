const express = require('express');
const Router = require('./routes');
const app = express();
app.use(express.json());
app.use(Router);
app.use((error, req, res, next)=>{
  res.status(error.status || 500);
  res.json({ error });
});



app.listen('3333', console.log('Server online on 3333'));