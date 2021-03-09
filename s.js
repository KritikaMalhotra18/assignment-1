let fs = require("fs");

function opss(filepath){
    var x = filepath.toString();
    let data = fs.readFileSync(x, 'utf8');
    data = data.replace(/[\r\n]\s*[\r\n]/g, '\n');
    console.log(data);

}

module.exports = {
    fn:opss
}