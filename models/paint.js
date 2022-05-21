const Paint = function(volume) {
    this.volume = volume;
}
Paint.prototype.checkIfEmpty = function() {
    if (this.volume === 0) {
        return true;
    }
    else {
        return false;
    }
}
Paint.prototype.emptySelf = function(amount = this.volume) {
    if (this.checkIfEmpty() === false) {
        if (this.volume >= amount) {
            this.volume -= amount;
        }
    }
}
module.exports = Paint;
