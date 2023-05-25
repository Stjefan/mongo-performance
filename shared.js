const myRNG = function() {
    return Math.floor(Math.random()*1000)
}
const barFactory = function() {
    return {
        x1: `R_${myRNG()}`,
        x2: myRNG(),
    }
}

const testCases1 = [105, 110, 220, 300, 500, 700]
module.exports = {myRNG, barFactory, testCases1}