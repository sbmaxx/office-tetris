bh.match('room', function(ctx, json) {
    ctx.js(true);
    ctx.content([
        {
            elem: 'wrapper',
            content: ctx.content()
        },
        {
            elem: 'randomize'
        }
    ], true);
});

bh.match('room__wrappe', function(ctx) {
    ctx.attr('touch-action', 'none');
});
bh.match('room__randomize', function(ctx) {
    ctx.tag('button');
    ctx.content('рассадить');
});
