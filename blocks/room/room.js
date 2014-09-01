modules.define('room', ['i-bem__dom'], function(provide, BEMDOM) {

    BEMDOM.decl('room', {
        onSetMod: {
            js: {
                inited: function() {
                    console.log('JS IS FIRED');
                    this.tables = this.findBlocksInside('table');
                    console.log('tables: ', this.tables.length);
                }
            }
        }

    });

    provide(BEMDOM);

});
