const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

// Middleware to parse JSON requests
app.use(bodyParser.json());
const multer = require('multer');

// Set up storage for uploaded files
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const upload = multer({ storage: storage });

// Modify the POST endpoint to handle file uploads
app.post('/api/submitApplication', upload.single('resume'), (req, res) => {
    const newApplication = new Application({
        name: req.body.name,
        emailOrNumber: req.body.emailOrNumber,
        capability: req.body.capability,
        resume: req.file.path
    });
// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/ezmoving', { useNewUrlParser: true, useUnifiedTopology: true });

// Define a schema and model for the application data
const ApplicationSchema = new mongoose.Schema({
    name: String,
    emailOrNumber: String,
    capability: String,
    resume: String // This can be a path to the uploaded file or the file data itself
});

const Application = mongoose.model('Application', ApplicationSchema);

// POST endpoint to handle application submission
app.post('/api/submitApplication', (req, res) => {
    const newApplication = new Application(req.body);

    newApplication.save((err, application) => {
        if (err) {
            res.status(500).send('Error saving application.');
        } else {
            res.status(200).send('Application submitted successfully.');
        }
    });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
// GET endpoint to retrieve all submitted applications
app.get('/api/getApplications', (req, res) => {
    Application.find({}, (err, applications) => {
        if (err) {
            res.status(500).send('Error fetching applications.');
        } else {
            res.status(200).json(applications);
        }
    });
});

});