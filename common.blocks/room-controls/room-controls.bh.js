module.exports = function(bh) {

    var controls = [{
        name: 'bean-bag',
        text: 'пуфик'
    }, {
        name: 'tv',
        text: 'тумбочку с ТВ'
    }, {
        name: 'tree',
        text: 'горшок с растением'
    }, {
        name: 'table',
        text: 'прямоугольный стол'
    }, {
        name: 'nexus',
        text: 'нексус'
    }];

    bh.match('room-controls', function(ctx) {
        ctx.js(true);
        ctx.mix({ block: 'clearfix' });
        ctx.content(controls.map(function(control) {
            return {
                elem: 'item',
                control: control
            };
        }))
    });

    bh.match('room-controls__item', function(ctx, json) {
        var control = json.control;
        ctx.content([
            {
                elem: 'action',
                js: {
                    action: 'add',
                    data: control
                }
            },
            {
                elem: 'label',
                content: control.text
            },
            {
                block: 'icons',
                mix: [{ block: 'room-controls', elem: 'icon' }],
                mods: {
                    type: control.name,
                    small: true
                }
            }
        ], true)
    });

    bh.match('room-controls__label', function(ctx) {
        ctx.tag('span')
    });

    bh.match('room-controls__action', function(ctx) {
        ctx.tag('span');
        ctx.content('Добавить');
    });

};
