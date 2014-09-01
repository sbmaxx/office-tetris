modules.define('json', ['i-bem__dom', 'functions__debounce'], function(provide, BEMDOM, debounce) {

    BEMDOM.decl('json', {
        onSetMod: {
            js: {
                inited: function() {

                    this._states = this.params;

                    this._state = this._states[0];

                    this._updateState = debounce(this._updateState, 250, this);

                    this._movable = this.findBlockOutside('page').findBlocksInside('movable');

                    this._movable.forEach(function(block, i) {
                        block.on('transform', function(e, data) {
                            this._onMovableTransform(e, data, block, i);
                        }, this);
                        block.on('select', function(e, data) {
                            this._onMovableSelect(e, data, block, i);
                        }, this);
                    }.bind(this));

                    this.bindTo('variant', 'click', this._onVariantClick);

                    this._updateState();

                }
            }
        },
        onElemSetMod: {
            variant: {
                current: {
                    yes: function() {
                        var current = this.findElem('variant', 'current', 'yes');
                        if (current) {
                            this.delMod(current, 'current');
                        }
                    }
                }
            }
        },
        _onVariantClick: function(e) {
            this.setMod($(e.currentTarget), 'current', 'yes');
            this._state = this._states[$(e.currentTarget).index()];
            this._updateState();
        },
        _onMovableTransform: function(e, data, block, index) {
            this._state.data[index] = block.getTransform();
            this._updateState();
        },
        _onMovableSelect: function(e, data, block, index) {
            this._updateDebug(block.getTransform());
        },
        _updateState: function() {
            this.elem('state').text(JSON.stringify(this._state.data));

            this._movable.forEach(function(block, i) {
                if (this._state.data[i]) {
                    block.setTransform(this._state.data[i]);
                }
            }.bind(this));
        },
        _updateDebug: function(data) {
            this.elem('debug').text(JSON.stringify(data));
        }
    });

    provide(BEMDOM);

});
