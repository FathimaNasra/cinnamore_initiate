import { Request, Response } from 'express';
import fs from 'fs';
import path from 'path';

const categories = ['Alba', 'Continental', 'Mexican', 'Hamburg'];

export const analyzeCinnamonGrade = async (req: Request, res: Response): Promise<void> => {
  try {
    if (!req.file) {
      res.status(400).json({ message: 'No file uploaded!' });
      return; 
    }

    const randomCategory = categories[Math.floor(Math.random() * categories.length)];

    res.status(200).json({
      category: randomCategory,
    });

    const imagePath = path.join(process.cwd(), 'uploads', req.file.filename);
    fs.unlink(imagePath, (err) => {
      if (err) {
        console.error('Error deleting file:', err);
      } else {
        // console.log('Image deleted successfully:', req.file!.filename);
      }
    });
  } catch (error) {
    console.error('Server error:', error);
    res.status(500).json({ message: 'Internal Server Error', error });
  }
};
