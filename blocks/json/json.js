modules.define('json', ['i-bem__dom', 'functions__debounce'], function(provide, BEMDOM, debounce) {

    BEMDOM.decl('json', {
        onSetMod: {
            js: {
                inited: function() {

                    this._state = [];

                    if (this.params.states) {
                        this._state = this.params.states;
                    }

                    this._updateState = debounce(this._updateState, 250, this);

                    this.findBlockOutside('page').findBlocksInside('movable').forEach(function(block, i) {
                        block.on('transform', function(e, data) {
                            this._onMovableTransform(e, data, block, i);
                        }, this);
                        block.on('select', function(e, data) {
                            this._onMovableSelect(e, data, block, i);
                        }, this);
                        if (this._state[i]) {
                            block.setTransform(this._state[i]);
                        }
                    }.bind(this));

                    this._updateState();

                }
            }
        },
        _onMovableTransform: function(e, data, block, index) {
            this._state[index] = block.getTransform();
            this._updateState();
        },
        _onMovableSelect: function(e, data, block, index) {
            this._updateDebug(block.getTransform());
        },
        _updateState: function() {
            this.elem('state').text(JSON.stringify(this._state));
        },
        _updateDebug: function(data) {
            this.elem('debug').text(JSON.stringify(data));
        }
    });

    provide(BEMDOM);

});
