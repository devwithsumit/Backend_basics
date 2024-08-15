const fs = require('node:fs')

fs.writeFile('nodeIntro/file.txt','' ,(err)=>{
    if(err){
        console.error(err);
    }else{
        console.log('successfully created ')
    }
})