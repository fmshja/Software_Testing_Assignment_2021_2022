import toNumber from '../src/toNumber.js'
import chai from 'chai'

describe('toNumber.js', () => {
    it('convert to float', () => {
        chai.expect(toNumber('5.123')).equal(5.123)
    })
    it('convert negative number to float', () => {
        chai.expect(toNumber('-250.23')).to.equal(-250.23)
    })
    it('NaN text to convert test', () => {
        chai.expect(toNumber('22kaksi')).to.deep.equal(NaN)
    })
    it('Object numbers', () => {
        chai.expect(toNumber(new Number(6))).to.equal(6)
    })
    it('empty string', () => {
        chai.expect(toNumber('')).to.equal(0)
    })
})