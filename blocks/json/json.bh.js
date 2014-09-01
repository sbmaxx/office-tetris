bh.match('json', function(ctx) {
    ctx.content([
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
})
