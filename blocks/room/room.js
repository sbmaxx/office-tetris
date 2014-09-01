modules.define('room', ['i-bem__dom', 'events__channels'], function(provide, BEMDOM, channels) {

    BEMDOM.decl('room', {
        onSetMod: {
            js: {
                inited: function() {
                    this.bindToDoc('keydown', this._onKey);

                    this.tables = {
                        images: [],
                        video: []
                    };
                    this.staff = {
                        images: ['allinne', 'yurich', 'beam', 'dndushkin'],
                        video: ['developer', 'vasiliy', 'vorian', 'cherninely']
                    };

                    var _this = this;

                    this.findBlocksInside('table').forEach(function(table) {
                        if (table.params.which === 'images') {
                            _this.tables.images.push(table);
                        } else if (table.params.which === 'video') {
                            _this.tables.video.push(table);
                        }
                    });

                    this.bindTo('randomize', 'click', this._onRandomizeClick);

                }
            }
        },
        randomize: function(tables, staff) {
            staff = _.shuffle(staff);
            tables = _.shuffle(tables);
            return staff.map(function(value, i) {
                return {
                    who: value,
                    table: tables[i]
                }
            });

        },
        _onRandomizeClick: function() {
            for (var i = 0; i < 10; i ++) {
                setTimeout(function() {
                    ['images', 'video'].forEach(function(team) {
                        this.randomize(this.tables[team], this.staff[team]).forEach(function(data) {
                            data.table.label(data.who);
                        });
                    }.bind(this));
                }.bind(this), i * 150);
            }
        },
        _onKey: function(e) {
            channels('keyboard').emit('key', e);
        }
    });

    provide(BEMDOM);

});
