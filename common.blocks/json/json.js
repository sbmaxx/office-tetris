modules.define('json', ['i-bem__dom'], function(provide, BEMDOM) {

    BEMDOM.decl('json', {

        onSetMod: {
            js: {
                inited: function() {

                    ZeroClipboard.config({ swfPath: '/common.blocks/zeroclipboard/zeroclipboard.swf' });

                    var swf =  new ZeroClipboard(this.elem('button'));
                    swf.on('copy', function(e) {
                        this.showMessage();
                        e.clipboardData.setData('text/plain', JSON.stringify(this.json, null, 2));
                    }.bind(this));

                }
            }
        },

        dump: function(json) {
            this.json = json;
        },

        showMessage: function() {

            this.setMod(this.elem('message'), 'visible', true);

            setTimeout(function() {
                this.delMod(this.elem('message'), 'visible');
            }.bind(this), 2000);

        }

    });

    provide(BEMDOM);

});
