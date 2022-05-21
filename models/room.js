const { REPL_MODE_SLOPPY } = require("repl");

const Room = function(wallArea, isPainted = False) {
    this.wallArea = wallArea;
    this.isPainted = isPainted;
}
module.exports = Room;
