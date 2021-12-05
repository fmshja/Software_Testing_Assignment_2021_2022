import isDate from '../src/isDate.js'
import chai from 'chai'

describe('isDate.js', () => {
    it('verify whether the input is of type Date', () => {
        chai.expect(isDate(2021, 12, 5)).to.be.false
    })
    it('poisitve test on isdate', () => {
        chai.expect(isDate(new Date(2021, 12, 5))).to.be.true
    })
})