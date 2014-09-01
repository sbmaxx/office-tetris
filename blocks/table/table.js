modules.define('table', ['i-bem__dom'], function(provide, BEMDOM) {

    BEMDOM.decl('table', {

        onSetMod: {
            js: {
                inited: function() {
                    this.transform = {
                        x: 0,
                        y: 0,
                        angle: 0
                    };
                    this.bindTo('track', this._onTrack);
                    this.bindTo('trackstart', this._onTrackStart);
                    this.bindTo('click', this._onClick);
                    this.bindToDoc('keydown', this._onKey);
                }
            },
            selected: {
                yes: function() {
                    if (this.__self.selected) {
                        this.__self.selected.delMod('selected');
                    }
                    this.__self.selected = this;
                }
            }
        },

        _updateTransform: function() {

            var element = this.domElem.get(0);

            var transform = this.transform;

            var style = [
                'translate(' + transform.x + 'px, ' + transform.y + 'px)',
                'rotate(' + transform.angle + 'deg)'
            ].join(' ');

            element.style.transform = style;

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

        _onKey: function(e) {
            if (!this.hasMod('selected', 'yes')) {
                return;
            }
            console.log('onKeyUp');
            switch(e.keyCode) {
                // left arrow
                case 37:
                    this._moveX(-1);
                    e.preventDefault();
                    break;

                // right arrow
                case 39:
                    this._moveX(1);
                    e.preventDefault();
                    break;

                // up arrow
                case 38:
                    this._moveY(-1);
                    e.preventDefault();
                    break;

                // down arrow
                case 40:
                    this._moveY(1);
                    e.preventDefault();
                    break;

                //space
                case 32:
                    this._rotate();
                    e.preventDefault();
                    break;
            }
        }

    }, {
        selected: null
    });

    provide(BEMDOM);

});
