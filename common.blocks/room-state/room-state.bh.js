module.exports = function(bh) {
    bh.match('room-state', function(ctx, json) {

        var state = json.state;

        ctx.js(json.state);

        ctx.content({
            elem: 'link',
            tag: 'a',
            attrs: {
                href: '#' + state.id
            },
            content: state.text
        });

    });
};
