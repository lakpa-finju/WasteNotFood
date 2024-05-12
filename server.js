// Import required modules
const express = require('express');
const multer = require('multer'); // For handling multipart/form-data (file uploads)
const uploadRoutes = require('./backend/routes/uploadRoutes');


// Create an Express app
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Middleware for handling multipart/form-data (file uploads)
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Destination directory where uploaded files will be stored
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname); // File naming convention
  }
});
const upload = multer({ storage: storage });

// Define routes
app.use('/uploads', express.static('uploads')); // Serve uploaded files statically (optional)
app.use('/api/upload', upload.single('file'), uploadRoutes); // Route for file uploads

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
