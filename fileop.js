let fs = require("fs");
function filess(filepaths){
let length = filepaths.length;
if(length==1){
    fileop(filepaths[0]);
}else if(filepaths[1]==">" ){
fileop2(filepaths[0],filepaths[2]);
}
else if(filepaths[2] == ">"){
    fileop2(filepaths[1],filepaths[3]);
}
else if(filepaths[1]==">>"){
fileop3(filepaths[0],filepaths[2]);
}
else {
    let x1 =0;
    while(x1<=length-1){
    fileop(filepaths[x1]);
    x1++;
    }
}
}
function fileop(filepath){
    var x = filepath.toString();
    let data = fs.readFileSync(x, 'utf8')
  console.log(data)
}
module.exports = {
    fn:filess
}
function fileop2(src,dest){
copyFile(src,dest);
}
function copyFile(src,dest){
    if(fs.existsSync(dest)==false){
        var fd = fs.openSync(filepath, 'w');
    }
    let filename = path.basename(dest);
    fs.copyFileSync(src,path.join(dest,filename));
}
function fileop3(src,dest){
srcdata = fileop(src);
    fs.appendFile(dest, srcdata, function (err) {
        if (err) throw err;
        console.log('Saved!');
      });
}