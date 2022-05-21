const Decorator = function() {
    this.stock = [];
}
Decorator.prototype.addPaint = function(paint) {
    this.stock.push(paint);
}
Decorator.prototype.totalPaintVolume = function() {
    let totalPaintVolume = 0;
    for (let paint of this.stock) {
        totalPaintVolume += paint.volume;
    }
    return totalPaintVolume;
}
Decorator.prototype.checkIfSufficientPaint = function(room) {
    // Spec dictates that 1 litre of paint covers 1 square metre of wall, so...
    if (this.totalPaintVolume() >= room.wallArea) {
        return true;
    }
    else {
        return false;
    }
}
Decorator.prototype.paintRoom = function(room) {
    if (this.checkIfSufficientPaint(room) === true) {
        room.isPainted = true;
    }
}
module.exports = Decorator;
