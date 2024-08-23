const express = require('express');
const app = express()
const path = require('path')
const fs = require('fs');
const { error } = require('console');
const { fileLoader, name } = require('ejs');

//for form data
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
//for acessing public folder for style and scripts
app.use(express.static(path.join(__dirname, 'public')))
//for rendering ejs
app.set('view engine', 'ejs');

app.get("/", function (req, res){
    fs.readdir(`./files` , function(err, files){
        res.render("index" , {files : files}) //redering index.ejs
    })
})
app.get('/files/:filename', function(req , res){
    fs.readFile(`./files/${req.params.filename}`, "utf-8", function(err, data){
        res.render('show', {'filename' : req.params.filename, 'data' : data})
    })
})
app.get('/edit/:filename', function (req, res) {
    res.render('edit', { 'filename': req.params.filename })
})
app.post('/edit', function (req, res) {
    fs.rename(`./files/${req.body.prev_name}.txt`, `./files/${req.body.new_name}.txt` , function(err){
        if (err) console.log(err);
        else res.redirect("/")
    })
})

app.post('/create', function(req, res){
    fs.writeFile(`./files/${req.body.title.split(' ').join('')}.txt`, req.body.desc , function(err){
        if(err) console.error(err);
        res.redirect("/")
    })
})

app.delete('/files/:filename', function (req, res) {
    const filename = req.params.filename;
    const filepath = path.join(__dirname, 'files', filename);

    fs.unlink(filepath, function (err) {
        if (err) {
            console.error(err);
            return res.status(500).send('File not found');
        }
        res.status(200).send('File deleted successfully');
    });
});
// app.get("/check/:username/:age", function(req, res){
//     res.send(req.params)
//     // res.send(`Welcome ${req.params.username}, your age ${req.params.age}`)
// })
app.listen(3000);
