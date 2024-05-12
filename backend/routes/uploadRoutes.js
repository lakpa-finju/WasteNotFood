// backend/routes/uploadRoutes.js

const express = require('express');
const router = express.Router();
const fs = require('fs');

// POST /api/upload endpoint for handling image uploads
router.post('/api/upload', (req, res) => {
  try {
    // Check if a file was uploaded
    if (!req.files || !req.files.image) {
      return res.status(400).json({ error: 'No image file uploaded' });
    }

    // Process the uploaded image (for example, save it to disk)
    const image = req.files.image;
    const imagePath = `uploads/${image.name}`;
    image.mv(imagePath, (err) => {
      if (err) {
        return res.status(500).json({ error: 'Failed to save image' });
      }
      res.status(200).json({ message: 'Image uploaded successfully', imagePath });
    });
  } catch (err) {
    console.error('Error uploading image:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
