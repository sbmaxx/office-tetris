module.exports = {
    block: 'page',
    title: 'office randomizer',
    head: [
        { elem: 'css', url: '_index.css' },
        {
            elem: 'js',
            url: '//yastatic.net/jquery/2.1.1/jquery.min.js'
        },
        {
            elem: 'js',
            url: '_index.js'
        }
    ],
    content: [
        {
            block: 'room',
            content: [
                [
                    [
                        'sbmaxx', 'beam', 'vorian', 'xescoder', 'cherninely', 'hjkos', 'eroshinev',
                        'nerevar', 'dndushkin', 'allinne', 'yurich', 'invntrm', 'tenorok', 'developer'
                    ].map(function(val) {
                        return {
                            block: 'table',
                            js: {
                                which: val
                            },
                            mods: {
                                size: 'big'
                            }
                        };
                    }),
                ],
                [
                    {
                        block: 'bean-bag'
                    },
                    {
                        block: 'bean-bag'
                    }
                ],
                {
                    block: 'tv'
                },
                {
                    block: 'tree'
                },
                {
                    block: 'tree'
                }
            ]
        },
        {
            elem: 'section',
            elemMods: { position: 'right' },
            title: 'Легенда',
            content: {
                elem: 'legend',
                content: [
                    '<p>Управление мышкой или клавишами курсора (→, ←, ↑, ↓), space — повернуть. Без shift смещение на 5px, с shift — 1px.',
                    'Можно выделять через shift несколько элементов и перемещать их вместе.</p>',
                    '<p><img src="../../blocks/bean-bag/bean-bag.png" alt="bean-bag"> — пуфик,<br><br>',
                    '<img src="../../blocks/tv/tv.png" alt="tv"> — тумбочка с ТВ,<br><br>',
                    '<img src="../../blocks/tree/tree.png" alt="tree"> — растение,<br><br>',
                    '<img src="../../blocks/table/table_size_big.png" alt="big table"> — большой (140x80) прямоугольный стол.</p>',
                ].join(' ')
            }
        },
        {
            elem: 'section',
            elemMods: { position: 'left' },
            title: 'Варианты рассадки',
            content: [
                {
                    block: 'json',
                    js: [
                        {
                            name: 'current',
                            data: [{"x":213,"y":921,"angle":1800},{"x":309,"y":826,"angle":1800},{"x":308,"y":565,"angle":540},{"x":212,"y":-43,"angle":180},{"x":213,"y":-285,"angle":360},{"x":308,"y":-233,"angle":540},{"x":212,"y":185,"angle":540},{"x":212,"y":-327,"angle":360},{"x":213,"y":-260,"angle":1620},{"x":311,"y":-255,"angle":1080},{"x":214,"y":-350,"angle":1440},{"x":308,"y":-707,"angle":360},{"x":310,"y":-640,"angle":180},{"x":309,"y":-1140,"angle":1080},{"x":499,"y":-912,"angle":630},{"x":483,"y":-804,"angle":0},{"x":499,"y":-806,"angle":1350},{"x":443,"y":-1050,"angle":0},{"x":460,"y":-1266,"angle":0},{"x":460,"y":-1266,"angle":0}]
                        }
                    ]
                },
                {
                    elem: 'randomize'
                }
            ]
        }
    ]
}
