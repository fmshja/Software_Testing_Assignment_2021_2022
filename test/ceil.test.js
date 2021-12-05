import chai from "chai"
import ceil from "../src/ceil.js"
describe("ceil.js ", () => {
    it("test with even number", () => {
        chai.expect(ceil(3.000)).to.equal(3)
    })
    it("test with integer ", () => {
        chai.expect(ceil(5)).to.equal(5)
    })
    it("test with three decimals rounded up to one decimal", () => {
        chai.expect(ceil(5.234, 1)).to.equal(5.3)
    })
    it("test with four decimals rounded up to two decimal", () => {
        chai.expect(ceil(6.4999, 2)).to.equal(6.50)
    })
    it("test with negative parameter", () => {
        chai.expect(ceil(2001.234, -2)).to.equal(2100)
    })
    it("test integer with negative parameter", () => {
        chai.expect(ceil(2, -2)).to.equal(100)
    })
})