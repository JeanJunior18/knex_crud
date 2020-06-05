import express from 'express';
import Router from './routes';
const app = express();
app.use(express.json());
app.use(Router);

app.use((req:express.Request, res:express.Response, next:express.NextFunction) => {
  const error:any = new Error('Not Found')
  error.status = 404
  next(error)
})

app.use((error:any, req:express.Request, res:express.Response, next:express.NextFunction)=>{
  res.status(error.status || 500);
  res.json({ error: error.message });
});



app.listen('3333', ()=>{console.log('Server online on 3333')});