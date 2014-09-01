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
                    [0,1,2,3,4,5,6,7,8,9].map(function() {
                        return {
                            block: 'table',
                            mods: {
                                size: 'big'
                            }
                        };
                    }),
                    {
                        block: 'table',
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
                states: [{"x":147,"y":21,"angle":180},{"x":50,"y":-73,"angle":180},{"x":51,"y":-71,"angle":0},{"x":147,"y":-168,"angle":0},{"x":50,"y":143,"angle":0},{"x":49,"y":-49,"angle":180},{"x":147,"y":-47,"angle":0},{"x":146,"y":-238,"angle":180},{"x":504,"y":-334,"angle":0},{"x":30,"y":-576,"angle":450},{"x":257,"y":-706,"angle":270},{"x":318,"y":-459,"angle":0},{"x":251,"y":-1071,"angle":0},{"x":278,"y":-825,"angle":0}]
            }
        }
    ]
}
