const assert = require('assert');
const Paint = require('../models/paint');

describe('Paint', function() {

    let paint;

    beforeEach(function() {
        paint = new Paint('Crown Pure Brilliant White Matt', 5);
    });

    it('should have a volume in litres', function() {
        assert.strictEqual(paint.volume, 5)
    });

    it('should be able to check whether it\'s empty', function() {
        assert.strictEqual(paint.checkIfEmpty(), false);
    });

    it('should be able to empty itself', function() {
        paint.emptySelf();
        assert.strictEqual(paint.checkIfEmpty(), true);
    });
});
