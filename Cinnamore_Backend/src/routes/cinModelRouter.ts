import express from 'express';
import multer from 'multer';
import path from 'path';
import { analyzeCinnamonGrade } from '..//controller/cinnamonModelFunction';

// Initialize router
const router = express.Router();

// Multer storage configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Save files in 'uploads/' folder
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Generate unique filename
  },
});

const upload = multer({ storage });

// Define the route and attach the controller function
router.post('/analyzeGrade', upload.single('file'), analyzeCinnamonGrade);

export default router;
