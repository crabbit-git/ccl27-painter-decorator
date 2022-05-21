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
module.exports = Decorator;
