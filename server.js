import express from 'express';
import validationMiddleware from './validationMiddleware.js'; // Note the .js extension

const app = express();
const port = process.env.PORT || 3001; // Changed port number

app.use(express.json());

app.post('/register', validationMiddleware, (req, res) => {
  const { firstName, lastName, password, email, phoneNumber } = req.body;
  
  // Assuming successful registration
  res.status(201).json({ message: 'User registered successfully!', data: { firstName, lastName, email, phoneNumber } });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
