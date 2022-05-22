const Decorator = function(name) {
    this.name = name;
    this.stock = [];
}
Decorator.prototype.addPaint = function(paint) {
    this.stock.push(paint);
}
Decorator.prototype.totalPaintVolume = function(paintName) {
    let totalPaintVolume = 0;
    for (let paint of this.stock) {
        if (paint.name === paintName) {
            totalPaintVolume += paint.volume;
        }
    }
    return totalPaintVolume;
}
Decorator.prototype.checkIfSufficientPaint = function(room, paintName) {
    // Spec dictates that 1 litre of paint covers 1 square metre of wall, so...
    if (this.totalPaintVolume(paintName) >= room.wallArea) {
        return true;
    }
    else {
        return false;
    }
}
Decorator.prototype.paintRoom = function(room, paintName) {
    if (this.checkIfSufficientPaint(room, paintName) === true) {
        let paintAvailable = this.totalPaintVolume(paintName);
        let paintUsed = 0;
        while (paintUsed < room.wallArea) {
            for (let paint of this.stock) {
                if (paint.volume <= (room.wallArea - paintUsed)) {
                    paintUsed += paint.volume;
                    paint.emptySelf(paint.volume);
                    paintAvailable = this.totalPaintVolume(paintName);
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
