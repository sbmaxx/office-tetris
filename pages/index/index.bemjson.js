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
                    '<img src="../../blocks/table/table_size_small.png" alt="small table"> — маленький (120x60) прямоугольный стол, <br><br>',
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
                            data: [{"x":33,"y":7,"angle":1080},{"x":132,"y":-88,"angle":1080},{"x":28,"y":9,"angle":180},{"x":29,"y":13,"angle":0},{"x":125,"y":-181,"angle":180},{"x":125,"y":-177,"angle":360},{"x":130,"y":-28,"angle":0},{"x":33,"y":-220,"angle":180},{"x":282,"y":-445,"angle":1170},{"x":33,"y":-313,"angle":720},{"x":129,"y":-505,"angle":1260},{"x":236,"y":-1043,"angle":180},{"x":222,"y":-603,"angle":0},{"x":364,"y":-611,"angle":630},{"x":263,"y":-1043,"angle":630},{"x":253,"y":-909,"angle":0},{"x":255,"y":-782,"angle":900}]
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
