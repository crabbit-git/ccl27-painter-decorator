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
Paint.prototype.emptySelf = function() {
    if (this.checkIfEmpty() === false) {
        this.volume = 0;
    }
}
module.exports = Paint;
