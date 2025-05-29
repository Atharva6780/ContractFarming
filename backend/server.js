const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json()); 

// Connect MongoDB
mongoose.connect('mongodb://localhost:27017/Food', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB Connected'))
.catch((err) => console.log(err));

// User Schema
const UserSchema = new mongoose.Schema({
  email: String,
  password: String,
});

const User = mongoose.model('User', UserSchema);

// Register Endpoint
app.post('/register', async (req, res) => {
  const { email, password } = req.body;

  const userExist = await User.findOne({ email });
  if (userExist) return res.status(400).send('User already exists');

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = new User({ email, password: hashedPassword });
  await user.save();

  res.send('User Registered Successfully');
});

// Login Endpoint
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) return res.status(400).send('User not found');

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).send('Invalid Credentials');

  // Optional: Generate a token
  const token = jwt.sign({ id: user._id }, 'secretkey');

  res.json({ message: 'Login Successful', token });
});

// Server running
app.listen(5000, () => {
  console.log('Server started on http://localhost:5000');
});
