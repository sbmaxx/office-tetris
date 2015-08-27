module.exports = function(bh) {
    bh.match('room-object', function(ctx, json) {

        ctx.mix({
            block: 'icons',
            mods: {
                type: json.js.name
            }
        });

        if (json.js.name === 'table' || json.js.name === 'corner') {
            ctx.mod('has-input', true);
            ctx.content([
                { elem: 'placeholder' },
                { elem: 'input' }
            ]);
        }

    });

    bh.match('room-object__input', function(ctx) {
        ctx.content({
            block: 'input',
            mods: { theme: 'islands', size: 'm' },
            placeholder: 'Логин'
        });
    });

    bh.match('room-object__developer', function(ctx, json) {

        ctx.content([
            {
                elem: 'avatar',
                tag: 'img',
                attrs: {
                    src: 'https://center.yandex-team.ru/api/v1/user/' + json.login + '/avatar/24.jpg'
                }
            },
            {
                elem: 'login',
                tag: 'span',
                content: json.login
            }
        ]);

    })
};
