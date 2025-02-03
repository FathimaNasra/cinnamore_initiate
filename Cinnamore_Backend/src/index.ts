import express, { Request, Response } from 'express';
import priceRoutes from './routes/priceRoutes'; // Import routes



const app = express();
const port = process.env.PORT || 5000;



app.get('/asnaff', (req: Request, res: Response) => {
    res.send('Hello, TypeScript Express!');
  });


app.use(express.json());
app.use("/api/price", priceRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
