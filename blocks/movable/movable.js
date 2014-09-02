modules.define('movable', ['i-bem__dom', 'events__channels'], function(provide, BEMDOM, channels) {

    BEMDOM.decl('movable', {

        onSetMod: {

            js: {
                inited: function() {
                    this.transform = {
                        x: 0,
                        y: 0,
                        angle: 0
                    };
                    channels('keyboard').on('key', this._onKey, this);
                    this.__self.on('track', this._onTrack, this);
                }
            },

            selected: {
                yes: function() {
                    this.__self.selected.push(this);
                    this.emit('select', this)
                }
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

            var transform = this.transform;
            var angle;

            var translate = 'translate(' + transform.x + 'px, ' + transform.y + 'px)',
                rotate = 'rotate(' + transform.angle + 'deg)';

            this._updateStyle(this.domElem.get(0), [translate, rotate].join(' '));
            // если есть label, чтобы она не была перевёрнута
            if (this.elem('label').length !== 0) {
                if (transform.angle % 360 === 180 && transform.angle !== 0) {
                    angle = 180;
                } else {
                    angle = 0;
                }
                this._updateStyle(this.elem('label').get(0), rotate.replace(/\d+deg/, angle + 'deg'));
            }

            if (trigger !== false) {
                this.emit('transform', transform);
            }

        },

        _updateStyle: function(element, style) {
            element.style.mozTransform = style;
            element.style.webkitTransform = style;
            element.style.transform = style;
        },

        _getSelected: function() {
            return this.__self.selected;
        },

        _moveX: function(value) {
            this.transform.x += Math.round(value * Math.PI);
            this._updateTransform();
        },

        _moveY: function(value) {
            this.transform.y += Math.round(value * Math.PI);;
            this._updateTransform();
        },

        _rotate: function() {
            this.transform.angle += 90;
            this._updateTransform();
        },

        _clearSelection: function() {
            if (this.__self.selected.length) {
                this.__self.selected.forEach(function(block) {
                    block.delMod('selected');
                });
                this.__self.selected.length = 0;
            }
        },

        _onMouseTrack: function(e) {
            this.__self.emit('track', {
                x: e.ddx,
                y: e.ddy
            })
        },

        _onMouseTrackStart: function(e) {
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

        _onKey: function(e, originalEvent) {

            if (!this.hasMod('selected', 'yes')) {
                return;
            }

            switch(originalEvent.keyCode) {
                // left arrow
                case 37:
                    this._moveX(-1);
                    originalEvent.preventDefault();
                    break;

                // right arrow
                case 39:
                    this._moveX(1);
                    originalEvent.preventDefault();
                    break;

                // up arrow
                case 38:
                    this._moveY(-1);
                    originalEvent.preventDefault();
                    break;

                // down arrow
                case 40:
                    this._moveY(1);
                    originalEvent.preventDefault();
                    break;

                //space
                case 32:
                    this._rotate();
                    originalEvent.preventDefault();
                    break;
            }

        }

    }, {
        selected: [],
        live: function() {
            this.liveBindTo('track', function(e) {
                // разобраться с двумя событиями
                if (typeof e.originalEvent !== 'undefined') {
                    return;
                }
                this._onMouseTrack(e);
            });
            this.liveBindTo('mousedown', function(e) {
                this._onMouseDown(e);
            });
            this.liveBindTo('trackstart', function(e) {
                this._onMouseTrackStart(e);
            });
        },
        getSelected: function() {
            return this.selected;
        }
    });

    provide(BEMDOM);

});
