if (typeof console !== 'undefined') {
    var css = 'font-size:18px; \
    font-family:consolas; \
    line-height:50px; \
    margin:15px; \
    padding:10px; display: inline-block;'
    console.log('%c https://github.com/sbmaxx/office-tetris', css);
}
modules.define('page', ['i-bem__dom'], function(provide, BEMDOM) {

    BEMDOM.decl('page', {
        onSetMod: {
            js: {
                inited: function() {
                    this._room = this.findBlockInside('room');
                    this.bindTo('randomize', 'click', this._onRandomizeClick);
                }
            }
        },
        _onRandomizeClick: function(e) {
            this._room.startRandomizer();
        }
    });

    provide(BEMDOM);

});
