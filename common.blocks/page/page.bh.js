module.exports = function(bh) {
    bh.match('page', function(ctx) {
        ctx.js(true);
    });
    bh.match('page__section', function(ctx, json) {
        ctx.content([
            {
                elem: 'title',
                content: json.title
            },
            ctx.content()
        ], true);
    });
    bh.match('page__title', function(ctx) {
        ctx.tag('h3');
    });
};
