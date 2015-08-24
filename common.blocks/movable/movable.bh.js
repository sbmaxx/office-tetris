module.exports = function(bh) {
    bh.match('movable', function(ctx, json) {
        ctx.js(true);
        ctx.mix({ block: 'icons', elem: json.type });
        if (json.label) {
            ctx.content({
                elem: 'label',
                content: json.label
            });
        }
    });
};
