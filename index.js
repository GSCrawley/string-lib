
// challenge 1
const cFL = function(str) {
    return str.charAt(0).toUpperCase() + str.slice(1); 
}
String.prototype.cFL = 
function() {
    return cFL(this)
}
module.exports.cFL = cFL
console.log()
// challenge 2

const caps = function(str) {
    return str.toUpperCase();
}
String.prototype.caps = 
function() {
    return caps(this)
}
module.exports.caps = caps 

// challenge 3
// note: /\w\S*/g is a REGEX (regular expression).
// the \s means "match whitespace" and the g is a flag which means "global", i.e. match all whitespace, not just the first.

const cW = function(str) {
    return str.replace(/\w\S*/g,function(txt){
        return txt.charAt(0).toUpperCase()+txt.substr(1).toLowerCase();
        });
    }
String.prototype.cW =  
function() {
    return cW(this)
    }
module.exports.cW = cW
 
// challenge 4
const remXsp = function(str) {
    return str.replace(/\s+/g,' ').trim();
}
String.prototype.remXsp = 
function() {
    return remXsp(this)        
    }                                                                                                                                                                                                                                                                               
module.exports.remXsp = remXsp
                      

// Challenge                                       5 kabobCase - Removes extra spaces, replaces spaces with hyphens, removes special characters

const kC  = function(str) {
    return str && str.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g).map(x => x.toLowerCase()).join('-');
} ;
String.prototype.kC =
   function() {
       return kC(this)
   }
module.exports.kC = kC

// // Challenge 6 snakeCase 
// // Removes extra space and replaces spaces with an underscore "_", and makes all characters lowercase, and removes special characters

const sC = function(str) {
    return str && str.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g).map(x => x.toLowerCase()).join('_');
};
String.prototype.sC = 
    function() {
        return sC(this)
}
module.exports.sC = sC

// Challenge 7 camelCase() - Lowercases the first character of the first word. 
// Then uppercases the first character of all other words, and removes all spaces.

const cC = function(str) {
    return str
          .replace(/\s(.)/g, function($1) { return $1.toUpperCase(); })
          .replace(/\s/g, '')
          .replace(/^(.)/, function($1) { return $1.toLowerCase(); });
 }
String.prototype.cC = function() {
    return cC(this)
}
module.exports.cC = cC

// Challenge 8 shift() - this method will take the first character of a string 
// and move to the end of a string:

const sft = function(str) {
    return str.split(' ').map(e=>  e.substr(1,) +e[0]).join(' ')
 }
 String.prototype.sft = function() {
     return sft(this)
}
module.exports.sft = sft


