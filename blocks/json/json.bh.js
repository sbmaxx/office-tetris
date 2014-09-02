bh.match('json', function(ctx, json) {
    ctx.content([
        { elem: 'variants', data: json.js },
        {
            elem: 'debug',
            content: [
                { elem: 'selected' },
                { elem: 'dump' }
        ]}
    ]);
});
bh.match('json__dump', function(ctx) {
    ctx.tag('textarea');
    ctx.attr('readonly');
});
bh.match('json__selected', function(ctx) {
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
