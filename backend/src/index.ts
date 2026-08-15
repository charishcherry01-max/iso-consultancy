import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

// Import Routes
import clientsRouter from './routes/clients';
import documentsRouter from './routes/documents';
import trainingRouter from './routes/training';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// API Routes
app.use('/api/clients', clientsRouter);
app.use('/api/documents', documentsRouter);
app.use('/api/training', trainingRouter);

app.get('/', (req: Request, res: Response) => {
  res.send('API is running successfully!');
});

if (process.env.NODE_ENV !== 'production') {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}

export default app;
