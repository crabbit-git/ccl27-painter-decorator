const assert = require('assert');
const Room = require('../models/room');
const Decorator = require('../models/decorator');
const Paint = require('../models/paint');

describe('Room', function() {
    
    let room;

    this.beforeEach(function() {
        room = new Room(25);

    });

    it('should have an area in square metres', function() {
        assert.strictEqual(room.wallArea, 25);
    });

    it('should start unpainted', function() {
        assert.strictEqual(room.isPainted, false);
    });

    it('should be able to be painted', function() {
        let decorator = new Decorator('Vince');
        let paint = new Paint('Crown Pure Brilliant White Matt', 30);
        decorator.addPaint(paint);
        decorator.paintRoom(room, 'Crown Pure Brilliant White Matt');
        assert.strictEqual(room.isPainted, true);
    });
});
