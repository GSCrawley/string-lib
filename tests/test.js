const string_test = require('../index')


test('capsFirstLtr', () => {
    expect(string_test.capsFirstLtr("let's capitalize the first letter of this sentence")).toBe("Let's capitalize the first letter of this sentence")
    
})


test('allCaps', () => {
    expect(string_test.allCaps('it really is a beautiful day today')).toBe('IT REALLY IS A BEAUTIFUL DAY TODAY')
    
})

test('capitalizeWords', () => {
    expect(string_test.capitalizeWords('now this is going to capitalize all words in the sentence')).toBe('Now This Is Going To Capitalize All Words In The Sentence')

})

test('removeExtraSpaces', () => {
    expect(string_test.removeExtraSpaces('  why are  there   so many  spaces     in  this sentence    ?')).toBe('why are there so many spaces in this sentence?')

})

test('kebabCase', () => {
    expect(string_test.kebabCase('  why are  there   so many  spaces     in  this sentence    ?')).toBe('why-are-there-so-many-spaces-in-this-sentence')
})

test('snakeCase', () => {
    expect(string_test.snakeCase('  why are  there   so many  spaces     in  this sentence    ?')).toBe('why_are_there_so_many_spaces_in_this_sentence')
})

test('camelCase', () => {
    expect(string_test.camelCase('  why are  there   so many  spaces     in  this sentence    ?')).toBe('whyArethereSoManyspacesInthisSentence?')
})

test('shift', () => {
    expect(string_test.shift('it really is a beautiful day today')).toBe('ti eallyr si a eautifulb ayd odayt')
})
