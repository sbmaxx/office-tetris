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
                    [0,1,2,3,4,5,6,7].map(function(val) {
                        return {
                            block: 'table',
                            js: {
                                which: val < 4 ? 'images' : 'video'
                            },
                            mods: {
                                size: 'big'
                            }
                        };
                    }),
                    ['sbmaxx', 'nerevar', 'eroshinev'].map(function(who) {
                        return {
                            block: 'table',
                            js: {
                                which: who
                            },
                            mods: {
                                size: 'big'
                            }
                        }
                    })
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
                }
            ]
        },
        {
            elem: 'section',
            elemMods: { position: 'right' },
            title: 'Легенда',
            content: [
                'Управление мышкой или клавишами курсора (→, ←, ↑, ↓), space — повернуть.',
                'Можно выделять через shift несколько элементов и перемещать их вместе.',
                '<img src="../../blocks/bean-bag/bean-bag.png" alt="bean-bag"> — пуфик,',
                '<img src="../../blocks/tv/tv.png" alt="tv"> — тумбочка с ТВ,',
                '<img src="../../blocks/table/table_size_big.png" alt="big table"> — большой прямоугольный стол.'
            ].join('<br>')
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
                            name: 'video in center',
                            data: [{"x":49,"y":447,"angle":540},{"x":145,"y":353,"angle":180},{"x":50,"y":352,"angle":0},{"x":147,"y":258,"angle":0},{"x":45,"y":-78,"angle":0},{"x":44,"y":-269,"angle":180},{"x":142,"y":-269,"angle":0},{"x":140,"y":-460,"angle":180},{"x":30,"y":-730,"angle":180},{"x":296,"y":-310,"angle":0},{"x":223,"y":-861,"angle":990},{"x":130,"y":-1041,"angle":0},{"x":285,"y":-849,"angle":0},{"x":349,"y":-847,"angle":0}]
                        },
                        {
                            name: 'leads in center',
                            data: [{"x":149,"y":11,"angle":180},{"x":51,"y":-84,"angle":180},{"x":52,"y":-84,"angle":0},{"x":147,"y":-178,"angle":0},{"x":55,"y":164,"angle":0},{"x":54,"y":-28,"angle":180},{"x":152,"y":-25,"angle":0},{"x":151,"y":-218,"angle":180},{"x":37,"y":-473,"angle":90},{"x":137,"y":-626,"angle":900},{"x":137,"y":-625,"angle":720},{"x":315,"y":-491,"angle":0},{"x":272,"y":-900,"angle":0},{"x":349,"y":-847,"angle":0}]
                        },
                        {
                            name: 'sbmaxx on reception',
                            data: [{"x":149,"y":11,"angle":180},{"x":51,"y":-84,"angle":180},{"x":52,"y":-84,"angle":0},{"x":147,"y":-178,"angle":0},{"x":55,"y":164,"angle":0},{"x":54,"y":-28,"angle":180},{"x":152,"y":-25,"angle":0},{"x":151,"y":-218,"angle":180},{"x":287,"y":-448,"angle":180},{"x":23,"y":-624,"angle":900},{"x":22,"y":-625,"angle":720},{"x":315,"y":-491,"angle":0},{"x":272,"y":-900,"angle":0},{"x":118,"y":-888,"angle":0}]
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
