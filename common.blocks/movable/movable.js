modules.define('movable', ['i-bem__dom', 'events__channels', 'polymer-gestures'], function(provide, BEMDOM, channels) {

    var selected = [];

    provide(BEMDOM.decl('movable', {

        onSetMod: {

            js: {
                inited: function() {

                    this.transform = {
                        x: 0,
                        y: 0,
                        angle: 0
                    };

                    this.plainElem = this.domElem.get(0);

                    channels('default').on('key', this._onKey, this);
                    channels('default').on('click', this._onOutsideClick, this);

                    this.on('track', this._onTrack, this);

                }
            },

            selected: {
                yes: function() {
                    selected.push(this);
                    this.emit('select', this)
                }
            }

        },

        _onMouseTrack: function(e) {
            this.emit('track', {
                x: e.ddx,
                y: e.ddy
            })
        },

        _onMouseTrackStart: function() {
            this.setMod('selected', 'yes');
        },

        _onMouseDown: function(e) {
            if (e.originalEvent.shiftKey !== true && !this.hasMod('selected', 'yes')) {
                this._clearSelection();
            }
            this.setMod('selected', 'yes');
        },

        _onTrack: function(e, data) {

            if (!this.hasMod('selected', 'yes')) {
                return;
            }

            if (data.x) {
                this.transform.x += data.x;
            }

            if (data.y) {
                this.transform.y += data.y;
            }

            this._updateTransform();

        },

        _onOutsideClick: function() {

            if (!this.hasMod('selected', 'yes')) {
                return;
            }

            this._clearSelection();

        },

        _onKey: function(e, originalEvent) {

            if (!this.hasMod('selected', 'yes')) {
                return;
            }


            var multiplier = originalEvent.shiftKey ? 1 : 5;

            switch(originalEvent.keyCode) {
                // esc
                case 27:
                    this._clearSelection();
                    originalEvent.preventDefault();
                    break;

                // left arrow
                case 37:
                    this._moveX(-1 * multiplier);
                    originalEvent.preventDefault();
                    break;

                // right arrow
                case 39:
                    this._moveX(1 * multiplier);
                    originalEvent.preventDefault();
                    break;

                // up arrow
                case 38:
                    this._moveY(-1 * multiplier);
                    originalEvent.preventDefault();
                    break;

                // down arrow
                case 40:
                    this._moveY(1 * multiplier);
                    originalEvent.preventDefault();
                    break;

                //space
                case 32:
                    this._rotate();
                    originalEvent.preventDefault();
                    break;
            }

        },

        getTransform: function() {
            return this.transform;
        },

        setTransform: function(transform) {
            this.transform = transform;
            this._updateTransform(false);
        },

        _updateTransform: function(trigger) {

            var transform = this.transform,
                translate = 'translate(' + transform.x + 'px, ' + transform.y + 'px)',
                rotate = 'rotate(' + transform.angle + 'deg)';

            this._updateStyle(this.plainElem, [translate, rotate].join(' '));

            this._updateLabel(transform.angle);

            if (trigger !== false) {
                this.emit('transform', transform);
            }

        },

        _updateStyle: function(element, style) {
            element.style.mozTransform = style;
            element.style.webkitTransform = style;
            element.style.transform = style;
        },

        _updateLabel: function(angle) {
            // если есть label, чтобы она не была перевёрнута
            if (this.elem('label').length === 0) {
                return;
            }
            this._updateStyle(
                this.elem('label').get(0),
                'rotate(' + (angle === 180 ? 180 : 0) + 'deg'
            );
        },

        _moveX: function(value) {
            this.transform.x += value;
            this._updateTransform();
        },

        _moveY: function(value) {
            this.transform.y += value;
            this._updateTransform();
        },

        _rotate: function() {
            this.transform.angle = (this.transform.angle + 90) % 360;
            this._updateTransform();
        },

        _clearSelection: function() {
            if (!selected.length) {
                return;
            }
            selected.forEach(function(block) {
                block.delMod('selected');
            });
            selected.length = 0;
        }

    }, {
        live: function() {
            this.liveBindTo('track', function(e) {
                this._onMouseTrack(e);
            });
            this.liveBindTo('mousedown', function(e) {
                this._onMouseDown(e);
            });
            this.liveBindTo('click', function(e) {
                e.stopImmediatePropagation();
            });
            this.liveBindTo('trackstart', function(e) {
                this._onMouseTrackStart(e);
            });
        },
        getSelected: function() {
            return selected;
        }
    }));

});
