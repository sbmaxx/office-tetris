modules.define('room-object', ['i-bem__dom', 'events__channels', 'functions__debounce', 'polymer-gestures'], function(provide, BEMDOM, channels, debounce) {

    var selected = [];

    provide(BEMDOM.decl(this.name, {

        onSetMod: {

            js: {

                inited: function() {

                    this.__self.on('track', this._onTrack, this);

                    this._updateTransform(false);

                    if (this.hasMod('has-input')) {
                        this.input = this.findBlockInside('input');
                        if (this.params.login) {
                            this.renderDeveloper(this.params.login);
                            this.input.setVal(this.params.login);
                        }
                        this.input.on('change', debounce(this._onInputChange, 100, this));
                    }

                },

                '': function() {
                    this.__self.emit('change');
                }

            },

            edit: {
                yes: function() {
                    if (this.input) {
                        this.input.setMod('focused', true);
                    }
                }
            }

        },

        _onMouseTrack: function(e) {
            this.__self.emit('track', {
                x: e.ddx,
                y: e.ddy
            })
        },

        _onMouseTrackStart: function() {
            this.setMod('selected', 'yes');
        },

        _onMouseDown: function(e) {
            if (e.originalEvent.shiftKey !== true && !this.hasMod('selected', 'yes')) {
                this.__self.emit('select', this);
            }
            this.setMod('selected', 'yes');
        },

        _onDblClick: function() {
            this.setMod('edit', 'yes');
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

        _onInputChange: function() {

            var value = this.input.getVal();

            if (value) {
                this.renderDeveloper(value);
            }

            this.params.login = value;

            this.emit('change', this.params);

        },

        renderDeveloper: function(value) {
            this.elem('placeholder').html(bh.apply({
                block: 'room-object',
                elem: 'developer',
                login: value
            }));
        },

        _updateTransform: function(trigger) {

            this._updateStyle(this.domElem.get(0), this._getCSSStyle());

            this._updateLabel(this.params.angle);

            if (trigger !== false) {
                this.emit('change', this.params);
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
            if (this.elem('placeholder').length === 0) {
                return;
            }
            this._updateStyle(
                this.elem('placeholder').get(0),
                'rotate(' + (angle === 180 ? 180 : 0) + 'deg'
            );
            this._updateStyle(
                this.elem('input').get(0),
                'rotate(' + (angle === 180 ? 180 : 0) + 'deg'
            );
        },

        moveX: function(value) {
            this.params.x += value;
            this._updateTransform();
        },

        moveY: function(value) {
            this.params.y += value;
            this._updateTransform();
        },

        rotate: function() {
            this.params.angle = (this.params.angle + 90) % 360;
            this._updateTransform();
        },

        getDefaultParams: function() {
            return {
                x: 0,
                y: 0,
                angle: 0
            };
        },

        json: function() {
            var params = JSON.parse(JSON.stringify(this.params));
            delete params.uniqId;
            delete params.text;
            return params;
        }

    }, {

        live: function() {
            this.liveBindTo('track', function(e) {
                this._onMouseTrack(e);
            });
            this.liveBindTo('mousedown', function(e) {
                this._onMouseDown(e);
            });
            this.liveBindTo('trackstart', function(e) {
                this._onMouseTrackStart(e);
            });
            this.liveBindTo('dblclick', function(e) {
                this._onDblClick(e);
            });
            return false;
        },

        bemjson: function(params) {
            return {
                block: 'room-object',
                js: params
            };
        }

    }));

});
