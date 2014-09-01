modules.define('room', ['i-bem__dom', 'events__channels'], function(provide, BEMDOM, channels) {

    BEMDOM.decl('room', {
        onSetMod: {
            js: {
                inited: function() {
                    this.bindToDoc('keydown', this._onKey);

                    var tablesForImages = [],
                        tablesForVideo = [];

                    this.findBlocksInside('table').forEach(function(table) {
                        if (table.params.which === 'images') {
                            tablesForImages.push(table);
                        } else if (table.params.which === 'video') {
                            tablesForVideo.push(table);
                        }
                    });

                    var staffImages = ['nerevar', 'yurich', 'beam', 'dndushkin'];
                    var staffVideo = ['eroshinev', 'vasiliy', 'vorian', 'cherninely'];

                    this.randomize(tablesForImages, staffImages).forEach(function(data) {
                        data.table.label(data.who);
                    });

                    this.randomize(tablesForVideo, staffVideo).forEach(function(data) {
                        data.table.label(data.who);
                    });

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
        _onKey: function(e) {
            channels('keyboard').emit('key', e);
        }
    });

    provide(BEMDOM);

});
