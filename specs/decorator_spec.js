const assert = require('assert');
const Decorator = require('../models/decorator');
const Paint = require('../models/paint');

describe('Decorator', function() {

    let paint;
    let decorator;

    beforeEach(function() {
        duluxEgyptianCotton = new Paint(5);
        decorator = new Decorator();
    });

    it('should start with no paint in stock', function() {
        assert.strictEqual(decorator.stock.length, 0);
    });

    it('should be able to add a can of paint to stock');

    it('should be able to calculate total litres of paint in stock');

    it('should be able to ascertain whether there is enough paint in stock to paint a given room');

    it('should be able to paint a room if enough paint is in stock to do so');
});
