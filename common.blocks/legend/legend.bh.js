module.exports = function(bh) {
    bh.match('legend', function(ctx, json) {
        ctx.content([
            {
                elem: 'text',
                content: json.text
            },
            {
                elem: 'item',
                label: 'пуфик',
                content: {
                    block: 'icons',
                    elem: 'bean-bag'
                }
            },
            {
                elem: 'item',
                label: 'тумбочка с ТВ',
                content: {
                    block: 'icons',
                    elem: 'tv'
                }
            },
            {
                elem: 'item',
                label: 'горшок с растением',
                content: {
                    block: 'icons',
                    elem: 'tree'
                }
            },
            {
                elem: 'item',
                label: 'прямоугольный стол (140x80)',
                content: {
                    block: 'icons',
                    elem: 'table'
                }
            }
        ]);
    });
}
