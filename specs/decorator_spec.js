const assert = require('assert');
const Decorator = require('../models/decorator');
const Paint = require('../models/paint');
const Room = require('../models/room');

describe('Decorator', function() {

    let paint1;
    let paint2;
    let paint3;
    let decorator;
    let room;

    beforeEach(function() {
        paint1 = new Paint('Crown Pure Brilliant White Matt', 10);
        paint2 = new Paint('Crown Pure Brilliant White Matt', 5);
        paint3 = new Paint('Crown Pure Brilliant White Matt', 10);
        decorator = new Decorator('Vince');
        room = new Room(23);
    });

    it('should start with no paint in stock', function() {
        assert.strictEqual(decorator.stock.length, 0);
    });

    it('should be able to add a can of paint to stock', function() {
        decorator.addPaint(paint1);
        assert.deepStrictEqual(decorator.stock, [paint1]);
    });

    it('should be able to calculate total litres of paint in stock', function() {
        decorator.addPaint(paint1);
        decorator.addPaint(paint2);
        assert.strictEqual(decorator.totalPaintVolume(), 15);
    });

    it('should be able to ascertain whether there is enough paint in stock to paint a given room', function() {
        decorator.addPaint(paint1);
        decorator.addPaint(paint2);
        assert.strictEqual(decorator.checkIfSufficientPaint(room), false);
        decorator.addPaint(paint3);
        assert.strictEqual(decorator.checkIfSufficientPaint(room), true);
    });

    it('should be able to paint a room if enough paint is in stock to do so', function() {
        assert.strictEqual(room.isPainted, false);
        decorator.addPaint(paint1);
        decorator.addPaint(paint2);
        decorator.addPaint(paint3);
        decorator.paintRoom(room);
        assert.strictEqual(room.isPainted, true);
        assert.deepStrictEqual(decorator.stock, [
            new Paint('Crown Pure Brilliant White Matt', 0),
            new Paint('Crown Pure Brilliant White Matt', 0),
            new Paint('Crown Pure Brilliant White Matt', 2),
        ]);
    });

    it('should be able to discard empty paint cans', function() {
        decorator.addPaint(paint1);
        decorator.addPaint(paint2);
        decorator.addPaint(paint3);
        decorator.paintRoom(room);
        decorator.discardEmpties();
        assert.deepStrictEqual(decorator.stock, [
            new Paint('Crown Pure Brilliant White Matt', 2),
        ]);
    });
});
