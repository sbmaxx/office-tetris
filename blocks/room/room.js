modules.define('room', ['i-bem__dom'], function(provide, BEMDOM) {

    BEMDOM.decl('room', {
        onSetMod: {
            js: {
                inited: function() {
                    console.log('JS IS FIRED');
                }
            }
        }

    });

    provide(BEMDOM);

});
