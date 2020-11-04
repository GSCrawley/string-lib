
// challenge 1

String.prototype.capsFirstLtr = function() {
    return this.charAt(0).toUpperCase() + this.slice(1); 
}
const cFL = "let's capitalize the first letter of this sentence";
console.log(cFL.capsFirstLtr());

// challenge 2

String.prototype.allCaps = function() {
    return this.toUpperCase(' ');
}
const aC ="it really is a beautiful day today";
console.log(aC.allCaps());

// challenge 3
// note: /\w\S*/g is a REGEX (regular expression).
// the \s means "match whitespace" and the g is a flag which means "global", i.e. match all whitespace, not just the first.

String.prototype.capitalizeWords = function() {
    return this.replace(/\w\S*/g,function(txt){
        return txt.charAt(0).toUpperCase()+txt.substr(1).toLowerCase();
        });
 }

 const cW = "now this is going to capitalize all words in the sentence";
 console.log(cW.capitalizeWords());

// challenge 4

String.prototype.removeExtraSpaces = function() {
    return this.replace(/\s+/g,' ').trim();
}
const rES = "  why are  there   so many  spaces     in  this sentence    ?"
console.log(rES.removeExtraSpaces());


// Challenge 5 kabobCase - Removes extra spaces, replaces spaces with hyphens, removes special characters

String.prototype.kebabCase = function() {
    return this && this.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g).map(x => x.toLowerCase()).join('-');
} 
const kC = rES
console.log(kC.kebabCase())
// Challenge 6 snakeCase 
// Removes extra space and replaces spaces with an underscore "_", and makes all characters lowercase, and removes special characters

String.prototype.snakeCase = function() {
    return this && this.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g).map(x => x.toLowerCase()).join('_');
}
const sC = rES
console.log(kC.snakeCase())

// Challenge 7 camelCase() - Lowercases the first character of the first word. 
// Then uppercases the first character of all other words, and removes all spaces.

String.prototype.camelCase = function() {
    return this
         .replace(/\s(.)/g, function($1) { return $1.toUpperCase(); })
         .replace(/\s/g, '')
         .replace(/^(.)/, function($1) { return $1.toLowerCase(); });
}

const cC = rES
console.log(cC.camelCase())

// Challenge 8 shift() - this method will take the first character of a string 
// and move to the end of a string:

String.prototype.shift = function() {
    return this.split(' ').map(e=>  e.substr(1,) +e[0]).join(' ')
}

const sft = aC
console.log(sft.shift())

module.exports.capsFirstLtr = this.capsFirstLtr
module.exports.allCaps = this.allCaps
module.exports.capitalizeWords = this.capitalizeWords
module.exports.removeExtraSpaces = this.removeExtraSpaces
module.exports.kebabCase = this.kebabCase
module.exports.snakeCase = this.snakeCase
module.exports.camelCase = this.camelCase
module.exports.shift = this.shift

