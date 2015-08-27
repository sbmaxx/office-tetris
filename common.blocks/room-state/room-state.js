modules.define('room-state', ['i-bem__dom',  'functions__debounce', 'room-object'], function(provide, BEMDOM, debounce, RoomObject) {

    var current = null;

    provide(BEMDOM.decl('room-state', {

        onSetMod: {
            js: {
                inited: function() {
                    RoomObject.on('created', this._onRoomObjectCreated, this);
                    RoomObject.on('removed', this._onRoomObjectRemoved, this);
                    RoomObject.on('change', debounce(this._onRoomObjectChange, 42, this));
                }
            },
            current: {
                yes: function() {
                    this.emit('change', this.json());
                    if (current) {
                        current.delMod('current');
                    }
                    current = this;
                }
            }
        },

        json: function(json) {
            if (typeof json !== 'undefined') {
                this.params.data = json;
            }
            return this.params.data;
        },

        getID: function() {
            return this.params.id;
        },

        _onRoomObjectChange: function() {},
        _onRoomObjectCreated: function() {},
        _onRoomObjectRemoved: function() {}

    }));

});
