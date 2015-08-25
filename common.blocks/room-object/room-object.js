modules.define('room-object', ['i-bem__dom', 'events__channels', 'polymer-gestures'], function(provide, BEMDOM, channels) {

    var selected = [];

    provide(BEMDOM.decl(this.name, {

        onSetMod: {

            js: {
                inited: function() {

                    channels('default').on('key', this._onKey, this);
                    channels('default').on('click', this._onOutsideClick, this);

                    this.on('track', this._onTrack, this);

                    this._updateTransform(false);

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
                this.params.x += data.x;
            }

            if (data.y) {
                this.params.y += data.y;
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
                    this._moveX(multiplier);
                    originalEvent.preventDefault();
                    break;

                // up arrow
                case 38:
                    this._moveY(-1 * multiplier);
                    originalEvent.preventDefault();
                    break;

                // down arrow
                case 40:
                    this._moveY(multiplier);
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
            return this.params;
        },

        setTransform: function(transform) {
            this.params = transform;
            this._updateTransform(false);
        },

        _updateTransform: function(trigger) {

            this._updateStyle(this.domElem.get(0), this._getCSSStyle());

            this._updateLabel(this.params.angle);

            if (trigger !== false) {
                this.emit('transform', this.params);
            }

        },

        _getCSSStyle: function() {

            var transform = this.params,
                translate = 'translate(' + transform.x + 'px, ' + transform.y + 'px)',
                rotate = 'rotate(' + transform.angle + 'deg)';

            return [translate, rotate].join(' ');

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
            this.params.x += value;
            this._updateTransform();
        },

        _moveY: function(value) {
            this.params.y += value;
            this._updateTransform();
        },

        _rotate: function() {
            this.params.angle = (this.params.angle + 90) % 360;
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
        },

        getDefaultParams: function() {
            return {
                x: 0,
                y: 0,
                angle: 0
            };
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
            return false;
        },

        getSelected: function() {
            return selected;
        },

        create: function(type, params) {
            return bh.apply({
                block: 'room-object',
                type: type,
                js: params
            });
        }

    }));

});
