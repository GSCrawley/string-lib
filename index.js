
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

function removeExtraSpaces() {
    
}

// Challenge 5 kabobCase - Removes extra spaces and redfc 
}

// Challenge 6 snakeCase 
// Removes extra space and replaces spaces with an underscore "_", and makes all characters lowercase.

function snakeCase() {

}

// Challenge 7 camelCase() - Lowercases the first character of the first word. 
// Then uppercases the first character of all other words, and removes all spaces.

function camelCase() {

}

// Challenge 8 shift() - this method will take the first character of a string 
// and move to the end of a string:

function shift() {

}

console.log(capsFirstLtr('whats up'))
console.log(allCaps('it really is a beautiful day today'))
console.log(capitalizeWords('now this is going to capitalize all words in the sentence'))