bh.match('json', function(ctx, json) {
    ctx.content([
        { elem: 'variants', data: json.js },
        { elem: 'debug' },
        { elem: 'state' }
    ]);
});
bh.match('json__debug', function(ctx) {
    ctx.tag('textarea');
    ctx.attr('readonly');
});
bh.match('json__state', function(ctx) {
    ctx.tag('textarea');
    ctx.attr('readonly');
});

bh.match('json__variants', function(ctx, json) {
    ctx.content(json.data.map(function(value, i) {
        return {
            elem: 'variant',
            elemMods: {
                current: i === 0 ? 'yes' : ''
            },
            content: value.name
        };
    }));
});
