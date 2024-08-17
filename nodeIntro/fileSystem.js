
const fs = require('fs')
const folder = 'nodeIntro/'
//rename
// fs.rename(folder + 'file.txt', folder + 'file2.txt', (err) => {
//     if (err) {
//         console.error(err);
//     } else {
//         console.log('succesfully renamed');
//     }
// });

//copy files
// fs.copyFile(folder + 'file.txt' , folder + 'copy.txt', (err)=>{
//     if(err) console.error('err');
//     else console.log('copied succesfull');

// } )

//remove files
// fs.unlink('nodeIntro/copy.txt', (err)=>{
//     if(err) console.log(err);
//     else console.log('deleted file');
// })

//remove folder
// fs.rm('emptyFolder', {recursive : true} ,(err)=>{
//     if (err) console.log(err);
//     else console.log('deleted folder');
// })