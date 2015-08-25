module.exports = function(bh) {
    bh.match('room-object', function(ctx, json) {

        ctx.mix({
            block: 'icons',
            mods: {
                type: json.type
            }
        });

        if (json.name === 'table') {
            ctx.mod('has-label', true);
        }

    });

    bh.match('room-object__label', function(ctx, json) {

        var content = [];

        if (json.developer) {
            content.push({
                tag: 'img',
                attrs: {
                    src: 'https://center.yandex-team.ru/api/v1/user/' + json.developer + '/avatar/24.jpg'
                }
            });
        }

        content.push({
            tag: 'span',
            content: json.label
        });

        ctx.content(content);

    })
};
