// Connect to MongoDB
mongoose.connect('mongodb://localhost/web', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

// ...

// Handle signup form submission
app.post('/signup', async (req, res) => {
  try {
    const { newUsername, newPassword, confirmPassword } = req.body;

    // ...

    // Create a new user
    const newUser = new User({
      username: newUsername,
      password: newPassword
    });

    // Save the user to the "users" collection in the "web" database
    await newUser.save();

    res.status(201).json({ message: 'Signup successful' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
