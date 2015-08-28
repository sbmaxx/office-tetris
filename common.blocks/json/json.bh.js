module.exports = function(bh) {
    bh.match('json', function(ctx) {
        ctx.js(true);
        ctx.content([{
            block: 'button',
            mix: { block: 'json', elem: 'button' },
            mods: { size : 'm', theme : 'islands' },
            text: 'Скопировать'
        }, {
            elem: 'message',
            content: 'Скопировано'
        }]);
    });
    bh.match('json__message', function(ctx) {
        ctx.tag('span');
    });
};
