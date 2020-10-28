
// challenge 1
function capsFirstLtr(str) { 
    return str.charAt(0).toUpperCase() + str.slice(1); 
} 

// challenge 2
function allCaps(str) { 
    return str.toUpperCase(); 
} 

// challenge 3
// note: /\w\S*/g is a REGEX (regular expression).
// the \s means "match whitespace" and the g is a flag which means "global", i.e. match all whitespace, not just the first.

function capitalizeWords(str) {
    return str.replace(/\w\S*/g,function(txt){
        return txt.charAt(0).toUpperCase()+txt.substr(1).toLowerCase();
    });
    }
 
// challenge 4

function removeExtraSpaces(str) {
    return str.replace(/\s+/g,' ').trim();

}

// Challenge 5 kabobCase - Removes extra spaces, replaces spaces with hyphens, removes special characters
function kebabCase(str) {
  return str && str.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g).map(x => x.toLowerCase()).join('-');

}

// Challenge 6 snakeCase 
// Removes extra space and replaces spaces with an underscore "_", and makes all characters lowercase, and removes special characters

function snakeCase(str) {
    return str && str.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g).map(x => x.toLowerCase()).join('_');
}


// Challenge 7 camelCase() - Lowercases the first character of the first word. 
// Then uppercases the first character of all other words, and removes all spaces.

function camelCase(str) {
    return str
        .replace(/\s(.)/g, function($1) { return $1.toUpperCase(); })
        .replace(/\s/g, '')
        .replace(/^(.)/, function($1) { return $1.toLowerCase(); });
}

// Challenge 8 shift() - this method will take the first character of a string 
// and move to the end of a string:

function shift() {

}

console.log(capsFirstLtr('whats up'))
console.log(allCaps('it really is a beautiful day today'))
console.log(capitalizeWords('now this is going to capitalize all words in the sentence'))

//here's two functions on the same string
console.log(capsFirstLtr(removeExtraSpaces('  why are  there   so many  spaces     in  this sentence    ?')))
console.log(capsFirstLtr(kebabCase('  why are  there   so many  spaces     in  this sentence    ?')))
console.log(snakeCase('  why are  there   so many  spaces     in  this sentence    ?'))
console.log(camelCase('  why are  there   so many  spaces     in  this sentence    ?'))