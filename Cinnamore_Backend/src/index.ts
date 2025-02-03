import express, { Request, Response } from 'express';
import priceRoutes from './routes/priceRoutes'; // Import routes
import path from 'path';
import fs from 'fs';
import cinnamonRoutes from './routes/cinModelRouter';
// Initialize Express
const app = express();
const port = process.env.PORT || 5000;

const uploadsDir = path.join(process.cwd(), 'uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
  console.log('Uploads directory created!');
} else {
  console.log('Uploads directory already exists.');
}


app.use(express.json());
app.use("/api/price", priceRoutes);

// Use routes
app.use(cinnamonRoutes);

// // Start server
// app.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}`);
// });

app.use(express.json());
app.use("/api/price", priceRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});