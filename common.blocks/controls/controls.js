modules.define('controls', ['i-bem__dom', 'jquery', 'room-object'], function(provide, BEMDOM, $, RoomObject) {

    provide(BEMDOM.decl('controls', {
        onSetMod: {
            js: {
                inited: function() {
                    console.log('controls inited');
                }
            }
        },
        _onControlClick: function(e) {
            var params = this.elemParams($(e.target));
            BEMDOM.append($('body'), RoomObject.create(params.data.name, {
                x: e.clientX + 100,
                y: e.clientY - 20
            }));

        }
    }, {
        live: function() {
            this.liveBindTo('action', 'click', function(e) {
                this._onControlClick(e);
            });
        }
    }));

});
