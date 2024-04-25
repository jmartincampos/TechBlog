const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Other imports and middleware

// Routes
app.use('/', require('./controllers/homeController'));
app.use('/auth', require('./controllers/authController'));
app.use('/post', require('./controllers/postController'));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
