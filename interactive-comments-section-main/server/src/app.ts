import express from 'express';
import cors from 'cors';
import commentRoutes from './routes/commentRoutes';
import userRoutes from "./routes/userRoutes";

const app = express();

app.use(cors({origin: 'http://localhost:5173'}));

app.use(express.json());
app.use('/comments', commentRoutes);
app.use('/user', userRoutes)

export default app;
