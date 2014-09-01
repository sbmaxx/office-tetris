bh.match('table', function(ctx, json) {
    ctx.mix({ block: 'movable', js: true });
    ctx.content({
        elem: 'label',
        content: json.js.which
    })
});
