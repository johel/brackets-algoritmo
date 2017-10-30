const {areValidBrackets} = require('./index.js')
const {assert} = require('chai');

describe('function areValidBrackets', function() {
    it('should validate (){}[]​', function() {
        assert.equal(areValidBrackets('(){}[]​'), true);
    });

    it('should validate [{()}](){}​', function() {
        assert.equal(areValidBrackets('[{()}](){}​'), true);
    });

    it('should invalidate []{()​', function() {
        assert.equal(areValidBrackets('[]{()​'), false);
    });

    it('should invalidate [{)]​', function() {
        assert.equal(areValidBrackets('[{)]'), false);
    });
});