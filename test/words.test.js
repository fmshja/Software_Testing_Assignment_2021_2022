import words from '../src/words.js'
import chai from 'chai'

describe('words.js', () => {
    it('seperate without specific pattern', () => {
        chai.expect(words('2021, finland, tampere, helsinki,')).to.deep.equal(['2021', 'finland', 'tampere', 'helsinki'])
    })
    it('seperate without specific pattern contains special characters', () => {
        chai.expect(words('be, mindful, with, your, thoughts, & everything, will, be, good, for, you, @ all!')).to.deep.equal(['be', 'mindful', 'with', 'your', 'thoughts', 'everything', 'will', 'be', 'good', 'for', 'you', 'all'])
    })
    it('seperate with given regex (space)', () => {
        chai.expect(words('6 books on the table', /[^, ]+/g)).to.deep.equal(['6', 'books', 'on', 'the', 'table'])
    })
})