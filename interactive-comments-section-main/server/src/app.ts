import express from 'express';
import cors from 'cors';
import commentRoutes from './routes/commentRoutes';

const app = express();

app.use(cors({ origin: 'http://localhost:5173' }));

app.use(express.json());
app.use('/comments', commentRoutes);

export default app;
