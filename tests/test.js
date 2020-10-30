const string_test = require('../index')


test('capsFirstLtr', () => {
    expect(string_test.capsFirstLtr('whats up')).toBe('Whats up')
    
})


test('allCaps', () => {
    expect(string_test.allCaps('whats up')).toBe('WHATS UP')
    
})