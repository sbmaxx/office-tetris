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
                }
            },

            selected: {
                yes: function() {
                    if (this.__self.selected) {
                        this.__self.selected.delMod('selected');
                    }
                    this.emit('select', this)
                    this.__self.selected = this;
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

            var element = this.domElem.get(0);

            var transform = this.transform;

            var style = [
                'translate(' + transform.x + 'px, ' + transform.y + 'px)',
                'rotate(' + transform.angle + 'deg)'
            ].join(' ');

            element.style.mozTransform = style;
            element.style.webkitTransform = style;
            element.style.transform = style;

            if (trigger !== false) {
                this.emit('transform', transform);
            }

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

        _onTrack: function(e) {
            // разобраться с двумя событиями
            if (typeof e.originalEvent !== 'undefined') {
                return;
            }
            if (e.ddx) {
                this.transform.x += e.ddx;
            }
            if (e.ddy) {
                this.transform.y += e.ddy;
            }
            this._updateTransform();
        },

        _onTrackStart: function(e) {
            this.setMod('selected', 'yes');
        },

        _onClick: function(e) {
            this.setMod('selected', 'yes');
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
        selected: null,
        live: function() {
            this.liveBindTo('track', function(e) {
                this._onTrack(e);
            });
            this.liveBindTo('click', function(e) {
                this._onClick(e);
            });
            this.liveBindTo('trackstart', function(e) {
                this._onTrackStart(e);
            });
        }
    });

    provide(BEMDOM);

});
