module.exports = function(bh) {

    bh.match('legend', function(ctx) {

        ctx.content([
            {
                elem: 'text',
                content: [
                    'Управление мышкой или клавишами курсора.',
                    '<code>→, ←, ↑, ↓, space</code> — повернуть.',
                    'Сдвиг по умолчанию на 5px, с зажатым <code>shift</code> — 1px.',
                    'Можно выделять через <code>shift</code> несколько элементов и перемещать их вместе.'
                ].map(function(str) {
                    return {
                        tag: 'p',
                        content: str
                    };
                })
            }
        ]);
    });

};
