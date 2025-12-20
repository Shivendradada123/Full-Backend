const fs = require('fs');

fs.writeFile("note.txt", "writing note", (err)=>{
if(err) console.log("error hai");
else console.log("write hogya")
})













