const assert = require('assert');
const Decorator = require('../models/decorator');

describe('Decorator', function() {

    let decorator;

    beforeEach(function() {
        decorator = new Decorator(stock);
    });

    it('should start with no paint in stock');

    it('should be able to add a can of paint to stock');

    it('should be able to calculate total litres of paint in stock');

    it('should be able to ascertain whether there is enough paint in stock to paint a given room');

    it('should be able to paint a room if enough paint is in stock to do so');
});
