modules.define('table', ['i-bem__dom', 'movable'], function(provide, BEMDOM, movable) {

    // BEMDOM.decl({ block: 'table', baseMix: ['movable'] }, {});
    BEMDOM.decl('table', {
        label: function(text) {
            this.elem('label').text(text)
        }
    });

    provide(BEMDOM);

});
