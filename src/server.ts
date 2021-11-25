import express, { Request, Response, NextFunction } from 'express';
import mongoose from 'mongoose';
import AppError from './errors/AppError'

const app = express();

app.use(express.json());

mongoose.connect('mongodb://localhost:15017/graphql_code', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(express.json());


app.use(
  (error: Error, request: Request, response: Response, next: NextFunction) => {
    if (error instanceof AppError) {
      return response.status(error.statusCode).json({
        message: error.message,
        status: 'Error',
      });
    }

    console.log('Error', error.message);

    return response.status(500).json({
      message: 'Internal Server Error',
      status: 'Error',
    });
  }
);

app.listen(5000, () => {
  console.log('Server is running')
})


