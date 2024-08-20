const express = require('express');
const app = express()

//setting up parsers for form

app.use(express.json())
app.use(express.urlencoded({extended : true})) 
// app.use(function(req, res, next){
//     console.log('middileware runned');
//     next();
// })
app.get("/", function (request, response) {
    response.send("Home Page")
})
app.get('/profile', function (request, response) {
    return next(new Error('something went wrong!'));
});
app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})
app.listen(3000); 