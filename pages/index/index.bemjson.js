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
            block: 'json',
            js: [
                {
                    name: 'leads in center',
                    data: [{"x":149,"y":11,"angle":180},{"x":51,"y":-84,"angle":180},{"x":52,"y":-84,"angle":0},{"x":147,"y":-178,"angle":0},{"x":55,"y":164,"angle":0},{"x":54,"y":-28,"angle":180},{"x":152,"y":-25,"angle":0},{"x":151,"y":-218,"angle":180},{"x":37,"y":-473,"angle":90},{"x":137,"y":-626,"angle":900},{"x":137,"y":-625,"angle":720},{"x":315,"y":-491,"angle":0},{"x":272,"y":-900,"angle":0},{"x":349,"y":-847,"angle":0}]
                },
                {
                    name: 'video in center',
                    data: [{"x":53,"y":447,"angle":540},{"x":150,"y":352,"angle":180},{"x":53,"y":353,"angle":0},{"x":150,"y":259,"angle":0},{"x":50,"y":-78,"angle":0},{"x":50,"y":-269,"angle":180},{"x":147,"y":-270,"angle":0},{"x":146,"y":-460,"angle":180},{"x":30,"y":-730,"angle":180},{"x":294,"y":-312,"angle":1080},{"x":218,"y":-876,"angle":990},{"x":152,"y":-1039,"angle":0},{"x":285,"y":-849,"angle":0},{"x":349,"y":-847,"angle":0}]
                },
                {
                    name: 'sbmaxx on reception',
                    data: [{"x":149,"y":11,"angle":180},{"x":51,"y":-84,"angle":180},{"x":52,"y":-84,"angle":0},{"x":147,"y":-178,"angle":0},{"x":55,"y":164,"angle":0},{"x":54,"y":-28,"angle":180},{"x":152,"y":-25,"angle":0},{"x":151,"y":-218,"angle":180},{"x":287,"y":-448,"angle":180},{"x":23,"y":-624,"angle":900},{"x":22,"y":-625,"angle":720},{"x":315,"y":-491,"angle":0},{"x":272,"y":-900,"angle":0},{"x":118,"y":-888,"angle":0}]
                }
            ]
        }
    ]
}
