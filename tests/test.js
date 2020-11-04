require('../index.js')


test('this.cFL', () => {
    expect("let's capitalize the first letter of this sentence".cFL()).toBe("Let's capitalize the first letter of this sentence")
})

test('testing caps', () => {
	expect('abcdef'.caps()).toBe('ABCDEF')
})

test('capitalizeWords', () => {
      expect('now this is going to capitalize all words in the sentence'.cW()).toBe('Now This Is Going To Capitalize All Words In The Sentence')
})

test('removeExtraSpaces', () => {
     expect('  why are  there   so many  spaces     in  this sentence    ?'.remXsp()).toBe('why are there so many spaces in this sentence ?')
 })

test('kC', () => {
     expect('  why are  there   so many  spaces     in  this sentence    ?'.kC()).toBe('why-are-there-so-many-spaces-in-this-sentence')
 })

test('snakeCase', () => {
     expect('  why are  there   so many  spaces     in  this sentence    ?'.sC()).toBe('why_are_there_so_many_spaces_in_this_sentence')
 })

test('camelCase', () => {
     expect('  why are  there   so many  spaces     in  this sentence    ?'.cC()).toBe('whyArethereSoManyspacesInthisSentence?')
 })

test('shift', () => {
     expect('it really is a beautiful day today'.sft()).toBe('ti eallyr si a eautifulb ayd odayt')
})
