bh.match('page', function(ctx) {
    ctx.js(true);
});
bh.match('page__randomize', function(ctx) {
    ctx.tag('button');
    ctx.content('рассадить');
});
