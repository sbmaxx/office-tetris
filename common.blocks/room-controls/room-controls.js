modules.define('room-controls', ['i-bem__dom', 'jquery'], function(provide, BEMDOM, $) {

    provide(BEMDOM.decl('room-controls', {
        _onControlClick: function(e) {
            var params = this.elemParams($(e.target));
            this.emit(params.action, params.data);
        }
    }, {
        live: function() {
            this.liveBindTo('action', 'click', function(e) {
                this._onControlClick(e);
            });
        }
    }));

});
