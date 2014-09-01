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
                    {
                        block: 'table',
                        js: {
                            which: 'sbmaxx'
                        },
                        mods: {
                            size: 'big'
                        }
                    },
                    {
                        block: 'table',
                        js: {
                            which: 'allinne'
                        },
                        mods: {
                            size: 'small'
                        }
                    },
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
            js: {
                states: [{"x":147,"y":21,"angle":180},{"x":50,"y":-73,"angle":180},{"x":51,"y":-71,"angle":0},{"x":147,"y":-168,"angle":0},{"x":50,"y":143,"angle":0},{"x":49,"y":-49,"angle":180},{"x":147,"y":-47,"angle":0},{"x":146,"y":-238,"angle":180},{"x":42,"y":-483,"angle":90},{"x":251,"y":-629,"angle":630},{"x":238,"y":-926,"angle":270},{"x":318,"y":-459,"angle":0},{"x":267,"y":-654,"angle":0},{"x":278,"y":-825,"angle":0}]
            }
        }
    ]
}
