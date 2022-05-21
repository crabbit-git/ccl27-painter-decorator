const assert = require('assert');
const Room = require('../models/room');

describe('Room', function() {

  let room;

  beforeEach(function () {
    room = new Room(25);
  });

  it('should have an area in square metres', function() {
    assert.strictEqual(room.wallArea, 25);
  });

  it('should start unpainted', function() {
    assert.strictEqual(room.isPainted, false);
  });

  it('should be able to be painted');
});
