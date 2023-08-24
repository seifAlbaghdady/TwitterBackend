const express = require('express');
const app = express();

const userRoutes = require('./routes/userRoutes');
const TweetRoutes = require('./routes/TweetRoutes');

app.use(express.json());
app.use('/user', userRoutes);
app.use('/tweet', TweetRoutes);


app.get('/', (req, res) => {
    res.send('Hello World!');
    }
);


app.listen(3000, () => {
    console.log('Listening on port 3000...');
});