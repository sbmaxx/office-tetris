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
                    ['sbmaxx', 'nerevar'].map(function(who) {
                        return {
                            block: 'table',
                            js: {
                                which: who
                            },
                            mods: {
                                size: 'big'
                            }
                        }
                    }),
                    {
                        block: 'table',
                        js: {
                            which: 'eroshinev'
                        },
                        mods: {
                            size: 'small'
                        }
                    },
                    {
                        block: 'table',
                        js: {
                            which: 'tech'
                        },
                        mods: {
                            size: 'big'
                        }
                    }
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
            content: {
                elem: 'legend',
                content: [
                    '<p>Управление мышкой или клавишами курсора (→, ←, ↑, ↓), space — повернуть. Без shift смещение на 5px, с shift — 1px.',
                    'Можно выделять через shift несколько элементов и перемещать их вместе.</p>',
                    '<p><img src="../../blocks/bean-bag/bean-bag.png" alt="bean-bag"> — пуфик,<br><br>',
                    '<img src="../../blocks/tv/tv.png" alt="tv"> — тумбочка с ТВ,<br><br>',
                    '<img src="../../blocks/table/table_size_big.png" alt="big table"> — большой прямоугольный стол.</p>'
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
                            name: 'the best one',
                            data: [{"x":50,"y":446,"angle":540},{"x":146,"y":351,"angle":180},{"x":50,"y":352,"angle":0},{"x":146,"y":257,"angle":0},{"x":50,"y":-78,"angle":0},{"x":50,"y":-269,"angle":180},{"x":146,"y":-268,"angle":0},{"x":146,"y":-459,"angle":180},{"x":28,"y":-751,"angle":900},{"x":296,"y":-310,"angle":0},{"x":231,"y":-848,"angle":990},{"x":177,"y":-1027,"angle":180},{"x":285,"y":-866,"angle":0},{"x":14,"y":-1065,"angle":0},{"x":341,"y":-934,"angle":0}]
                        },
                        {
                            name: 'leads in center',
                            data: [{"x":149,"y":11,"angle":180},{"x":51,"y":-84,"angle":180},{"x":52,"y":-84,"angle":0},{"x":147,"y":-178,"angle":0},{"x":55,"y":164,"angle":0},{"x":54,"y":-28,"angle":180},{"x":152,"y":-25,"angle":0},{"x":151,"y":-218,"angle":180},{"x":28,"y":-477,"angle":90},{"x":124,"y":-637,"angle":900},{"x":126,"y":-637,"angle":720},{"x":293,"y":-501,"angle":270},{"x":272,"y":-980,"angle":0},{"x":2,"y":-787,"angle":0}]
                        },
                        {
                            name: 'sbmaxx on reception',
                            data: [{"x":149,"y":11,"angle":180},{"x":51,"y":-84,"angle":180},{"x":52,"y":-84,"angle":0},{"x":147,"y":-178,"angle":0},{"x":55,"y":164,"angle":0},{"x":54,"y":-28,"angle":180},{"x":152,"y":-25,"angle":0},{"x":151,"y":-218,"angle":180},{"x":287,"y":-448,"angle":180},{"x":23,"y":-624,"angle":900},{"x":31,"y":-625,"angle":720},{"x":289,"y":-495,"angle":0},{"x":272,"y":-900,"angle":0},{"x":116,"y":-853,"angle":0},{"x":116,"y":-990,"angle":0}]
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
