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
        let paintAvailable = this.totalPaintVolume()
        let paintUsed = 0;
        while (paintUsed < room.wallArea) {
            for (let paint of this.stock) {
                if (paint.volume <= (room.wallArea - paintUsed)) {
                    paintUsed += paint.volume;
                    paint.emptySelf(paint.volume);
                    paintAvailable = this.totalPaintVolume();
                }
                else {
                    climacticStrokes = (room.wallArea - paintUsed);
                    paintUsed += (climacticStrokes);
                    paint.emptySelf(climacticStrokes);
                }
            }
        }
        room.isPainted = true;
    }
}
Decorator.prototype.discardEmpties = function() {
    let filteredStock = [];
    for (let paint of this.stock) {
        if (paint.volume !== 0) {
            filteredStock.push(paint);
        }
    }
    this.stock = filteredStock;
}
module.exports = Decorator;
