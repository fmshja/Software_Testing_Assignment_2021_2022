import capitalize from '../src/capitalize.js'
import chai from 'chai'
describe('capitalize.js', () => {
  it('case for correct inputs which should be capitalized', () => {
    const cases = [
      ['Good', 'Good'],
      ['WEB', 'Web'],
      ['_tuni', '_tuni'],
      ['he is eating', 'He is eating'],
      ['40 glasses', '40 glasses']
    ]
    cases.forEach(([input, expected]) => {
      chai.expect(capitalize(input)).to.equal(expected)
    })
  })

  it('case for empty string', () => {
    chai.expect(capitalize('')).to.equal('')
  })

  it('case for input which is not a string', () => {
    const cases = [[null, 'Null'], [undefined, 'Undefined'], [{}, '[object object]'], [789, '789']]
    cases.forEach(([input, expected]) => {
      chai.expect(capitalize(input)).to.equal(expected)
    })
  })
})