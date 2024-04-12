const express = require('express');

const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));

app.get('/', (req,res) => {
Wish.fetchAllWishes(wishesFromFile => {
    console.log(wishesFromFile);
    res.render('index');
    });
});

app.post('/wish', (req, res) => {
    res.render('index');
});

app.post('/wish', (req, res) => {
    let userData = req.body.userWish;

    let newWish = new Wish(userData);
    newWish.saveWish();
    res.redirect('/');
});

const port = 5000;

app.listen(port, () => {
    console.log('Server is running &{port}.');
})

const express = require('express');
const path = require('path');

const path = express();


const imagesDirectory = path.join(__dirname, 'images');


app.use('/images', express.static(imagesDirectory));


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
