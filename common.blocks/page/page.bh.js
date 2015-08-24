module.exports = function(bh) {
    bh.match('page', function(ctx) {
        ctx.js(true);
    });
};
