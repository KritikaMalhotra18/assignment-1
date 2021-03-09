let fileoprs = require("./fileop");
let Optionss = require("./s");
let Optionsn =require("./n");
let input = process.argv.slice(2);
let command = input[0];

switch(command){
    case "-s":
     Optionss.fn(input[1]);
    break;
    case "-n":
        Optionsn.fn(input[1]);
        break;
    case "-b":
        optionsb.fn(input[1]);
     default :
     fileoprs.fn(input);
     break;

}