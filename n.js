let fs = require("fs");
function opsn(filePath){
 let ans = counts(filePath)
 console.log(ans);
let data = fileop(filePath);

 var numbered = data.split('\n').map((line, index) => `${index + 1}. ${line}`).join('\n')
 
 console.log(numbered)
}
    
    module.exports = {
        fn:opsn
    }
 function fileop(filepath){
    var x = filepath.toString();
    let data = fs.readFileSync(x, 'utf8')
  return data;
}   
function counts(filePath){
     fileBuffer = fs.readFileSync(filePath); 
     to_string = fileBuffer.toString();
      split_lines = to_string.split("\n"); 
      return(split_lines.length)
}
