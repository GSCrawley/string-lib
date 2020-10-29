![GitHub package.json version](https://img.shields.io/badge/version-1.2.0-brightgreen/style=plastic)

## String_Lib

Challenge 1 capitalize() - makes the first character of a given string uppercase.
Example: hello world -> Hello world
Strategies:
Use str.substring() to get the first character and str.toUppercase() to convert that character to an uppercase character. Then concatenate the uppcase first character with the the original string starting from the second character.
Use str.split() to convert the string into an array of characters, upper case the first element of the array with str.toUppercase(), and then join the array with array.join() (Advanced) Use a regular expression.
## Challenge 2 allCaps()
makes all characters uppercase. (this is the same as str.toUppercase()) Example: foo bar -> FOO BAR
Strategy: Make a new function that uses str.toUpperCase(). You can make an alias with a shorter easier to remember name.
## Challenge 3 capitalizeWords() - 
makes the first character of each word uppercase. Imagine that each word is separated by a space. Example: do all the things -> Do All The Things
Advanced: capitalizeHeadline() - capitalizes all of the words except the words: the, in, a, an, and, but, for, at, by, from unless one of these words is the first word of the string! Example: the most foo in bar -> The Most Foo in Bar
Strategies: Use str.split() and split on a ' ' space. Use your capitalize(), loop through all of the elements (you can use array.map() here) and use your capitalize() function from challenge 1 on each element, last array.join() all of the elements into a single string. (advanced) Use a regular expression.
## Challenge 4 removeExtraSpaces() - 
Removes all spaces from the beginning and end of a String along with any extra spaces in the middle. If more than one space appears in the middle of a string it is replaced by a single space Example: " Hello world! " -> "Hello world!" Strategies: string.trim() will remove white space from the beginning and ending of a string. If you str.split() on the ' ' (space) you can trim each of these strings and then array.join() with a ' '.
## Challenge 5 kabobCase() - 
Removes extra spaces and replaces spaces with the hyphen "-", and makes all characters lowercase.
Example: " Hello world " -> "hello-world" Advanced: Remove special characters from the string. For example: "Hello World!" -> "hello-world" (notice the ! is removed)
Strategies: You need to remove all of the white space follow the challenge above. If you use str.split() you should have an array of strings you use str.toLowerCase() and array.join() with a '-'. Advanced use str.replace() to remove special characters (~!@#$% etc.) from the string before joining.
## Challenge 6 snakeCase() - 
Removes extra space and replaces spaces with an underscore "_", and makes all characters lowercase. Example: " what the heck " -> "what_the_heck"
Strategies: Follow the kabobcase() example above and use the '_' in place of '-'.
## Challenge 7 camelCase() - 
Lowercases the first character of the first word. Then uppercases the first character of all other words, and removes all spaces.Example: Camel Case -> camelCase
Strategies: Use the ideas from capitalizeWords() function you wrote earlier. str.split() the string on the ' ' to get and array of words. Then loop starting on index 1 (you could use array.map()) and capitalize each word (use your function for this) then array.join() on the '' (empty string).
## Challenge 8 shift() 
this method will take the first character of a string and move to the end of a string: Example: Hello World -> ello WorldH
Strategies: Use String.slice()
Advanced: Include an optional second parameter that sets the number of characters to shift.
Example: shift('foo bar', 3) -> ' barfoo'
these functions should all take a string as input and return a string as output.

## Deliverable 
Your completed work is your Github repo and the files in it. Post the link to your work in the progress tracker.

You will use this project for future assignments that wil include:
Publishing to npm
Writing unit tests

Due
Class 4 - April 8
