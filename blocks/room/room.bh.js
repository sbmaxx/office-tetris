bh.match('room', function(ctx, json) {
    ctx.js(true);
    ctx.content([
        {
            elem: 'wrapper',
            content: ctx.content()
        }
    ], true);
});

bh.match('room__wrappe', function(ctx) {
    ctx.attr('touch-action', 'none');
});
