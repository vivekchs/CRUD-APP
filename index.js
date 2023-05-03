
const express1 = require('express');
const path = require('path');
const app = express1();
require('./Require/config');
const contact1 = require('./Require/schematest');
const dbconnect = require('./Require/mongodb');

// app.use(express1.json()); // No Use Of this
app.set('view engine', 'ejs')
app.use(express1.static('public'));
app.use(express1.urlencoded())

const publicpath = path.join(__dirname, 'Require');
app.get('/', (req, res)=>{
    // const params = {}
    contact1.find({})
        .then((x) => {
            res.status(200).render('home.ejs');
            console.log(x);
        }).catch((y) => {
            console.log(y);
    })
    
})


app.get('/contact', (req, res)=>{
    // const params = {}
    res.status(200).render('contact.ejs');
})
app.post('/contact', (req, res) => {
    console.log("hello");
    console.log(req.body);
    var mydata = new contact1(req.body);
    console.log(mydata);
    mydata.save().then(() => {
        res.send("This item has been saved to the databse")
    }).catch(() => {
        res.status(400).send("Item was not saved to the databse")
    });
    // res.status(200).render('contact.pug');
})
app.listen(8000, ()=>{
    console.log("The application started successfully on port 8000");
});