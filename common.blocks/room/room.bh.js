module.exports = function(bh) {
    bh.match('room', function(ctx) {
        ctx.js(true);
    });
};
