modules.define('json', ['i-bem__dom', 'functions__debounce', 'movable'], function(provide, BEMDOM, debounce, Movable) {

    BEMDOM.decl('json', {
        onSetMod: {
            js: {
                inited: function() {

                    this._states = this.params;

                    this._state = this._states[0];

                    this._movable = this.findBlockOutside('page').findBlocksInside('movable');

                    Movable.on('transform', function(e, data) {
                        this._onMovableTransform(e, data);
                    }, this);
                    Movable.on('select', function(e, data) {
                        this._onMovableSelect(e, data);
                    }, this);

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
        _onMovableTransform: function() {
            this._updateState();
        },
        _onMovableSelect: function() {
            this._updateDebug(Movable.getSelected().map(function(block) {
                return block.getTransform();
            }));
        },
        _updateState: debounce(function() {
            this.elem('dump').text(JSON.stringify(this._state.data));

            this._movable.forEach(function(block, i) {
                if (this._state.data[i]) {
                    block.setTransform(this._state.data[i]);
                }
            }.bind(this));
        }, 250),
        _updateDebug: function(data) {
            this.elem('selected').text(JSON.stringify(data));
        }
    });

    provide(BEMDOM);

});
