modules.define('room', ['i-bem__dom', 'room-object', 'jquery', 'functions__debounce', 'functions__throttle'], function(provide, BEMDOM, RoomObject, $, debounce, throttle) {

    var current = null,
        x = 0,
        y = 0;

    provide(BEMDOM.decl('room', {

        onSetMod: {
            js: {
                inited: function() {

                    this.bindToWin('hashchange', this._onHashChange);
                    this.bindToWin('click', this._onClick);
                    this.bindToDoc('keydown', this._onKeyDown);
                    this.bindToWin('copy', this._onCopy);
                    this.bindToWin('paste', this._onPaste);
                    this.bindTo('wrapper', 'mousemove', throttle(this._onMouseMove, 100, this));

                    this.findBlockInside('room-controls').on('add', function(e, data) {
                        this.createObject(data);
                        this._onRoomObjectChange();
                    }, this);

                    RoomObject.on('change', debounce(this._onRoomObjectChange, 100, this));
                    RoomObject.on('select', this._onRoomObjectSelect, this);

                    this.states = this.findBlocksInside('room-state');
                    this.json = this.findBlockInside('json');
                    this.copy = [];

                    this.syncState();

                }
            }
        },

        syncState: function() {

            var state = this.getStateFromHash() || this.getDefaultState();

            if (state === current) {
                return;
            }

            this.json.dump(state.json());

            current = state;

            state.setMod('current', 'yes');

            this.renderState();

        },

        renderState: function() {

            BEMDOM.destruct(this.elem('wrapper'), true);

            current.json().forEach(function(obj) {
                this.createObject(obj);
            }.bind(this));

        },

        getHash: function() {
            return location.hash.replace('#', '');
        },

        getStateFromHash: function() {

            var state = null,
                hash = this.getHash();

            this.states.some(function(s) {
                if (s.getID() === hash) {
                    state = s;
                    return true;
                }
            });

            return state;

        },

        getDefaultState: function() {
            return this.states[0];
        },

        createObject: function(params) {
            BEMDOM.append(this.elem('wrapper'), bh.apply(RoomObject.bemjson(params)))
        },

        _onHashChange: function() {
            this.syncState();
        },

        _onCopy: function() {
            this.copy = this.getSelected();
        },

        _onPaste: function() {
            this.copy.forEach(function(block) {
                var params = block.json();
                params.x = x || params.x + 50;
                params.y = y || params.y;
                this.createObject(params);
                this._onRoomObjectChange();
            }, this);
        },

        _onClick: function(e) {
            if (e.target.className.indexOf('room-object') !== -1) {
                return;
            }
            console.log($(e.target));
            console.log('onclick');
            this.clearSelection();
            this.clearEdit();
        },

        _onRoomObjectChange: function() {
            current.json(this.findBlocksInside('room-object').map(function(block) {
                return block.json();
            }));
            this.json.dump(current.json());
        },

        _onRoomObjectSelect: function(e, obj) {
            this.getSelected().filter(function(block) {
                return block !== obj;
            }).forEach(function(block) {
                block.delMod('selected');
            });
        },

        _onMouseMove: function(e) {
            x = e.offsetX;
            y = e.offsetY;
        },

        clearSelection: function() {
            this.getSelected().forEach(function(block) {
                block.delMod('selected');
            });
        },

        clearEdit: function() {
            this.getEdit().forEach(function(block) {
                block.delMod('edit');
            });
        },

        removeSelected: function() {
            this.getSelected().forEach(function(block) {
                BEMDOM.destruct(block.domElem);
            });
        },

        getSelected: function() {
            return this.findBlocksInside({ block: 'room-object', modName: 'selected', modVal: 'yes' });
        },

        getEdit: function() {
            return this.findBlocksInside({ block: 'room-object', modName: 'edit', modVal: 'yes' });
        },

        _onKeyDown: function(e) {

            var event = e.originalEvent,
                step = event.shiftKey ? 1 : 5;

            if (this.getSelected().length === 0) {
                return;
            }

            switch(event.keyCode) {
                // delete
                case 46:
                    this.removeSelected();
                    event.preventDefault();
                    break;

                // esc
                case 27:
                    this.clearSelection();
                    this.clearEdit();
                    event.preventDefault();
                    break;

                // left arrow
                case 37:
                    this.getSelected().forEach(function(block) {
                        block.moveX(-1 * step);
                    });
                    event.preventDefault();
                    break;

                // right arrow
                case 39:
                    this.getSelected().forEach(function(block) {
                        block.moveX(step);
                    });
                    event.preventDefault();
                    break;

                // up arrow
                case 38:
                    this.getSelected().forEach(function(block) {
                        block.moveY(-1 * step);
                    });
                    event.preventDefault();
                    break;

                // down arrow
                case 40:
                    this.getSelected().forEach(function(block) {
                        block.moveY(step);
                    });
                    event.preventDefault();
                    break;

                //space
                case 32:
                    this.getSelected().forEach(function(block) {
                        block.rotate();
                    });
                    event.preventDefault();
                    break;
            }

        }

    }));

});
