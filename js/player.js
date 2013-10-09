(function (ctx) {

    function Player(options) {
        this.frame = createFrame(options);
        var frame = this.frame;
        this.sendMessage = function (message) {
            var contentWindow = frame.contentWindow;
            contentWindow.postMessage(message);
            return false;
        };
    }

    Player.prototype.timeStampToMillis = function processChapterStart(timeString) {
        var reg = /^((\d?\d):)?([0-5]\d):([0-5]\d)\.(\d{3})$/;
        if (!timeString.match(reg)) return -1;
        var matches = reg.exec(timeString)
            , parsedMatches = matches.map(function (a) { return parseInt(a,10); })
            , withoutHours = isNaN(parsedMatches[2])
            , hours = withoutHours ? 0 : parsedMatches[2]
            , minutes = parsedMatches[3]
            , seconds = parsedMatches[4]
            , millis = parsedMatches[5]
            ;

        return ((hours * 60  + minutes) * 60 + seconds) * 1000 + millis;
    };

    function createFrame() {

    }
    ctx.Player = Player;
    if (module) module.exports = Player; // requireable in nodeJS
})(this);

