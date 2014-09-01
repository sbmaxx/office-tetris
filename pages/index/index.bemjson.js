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
                states: [{"x":152,"y":30,"angle":180},{"x":49,"y":-66,"angle":180},{"x":52,"y":-63,"angle":0},{"x":154,"y":-160,"angle":0},{"x":54,"y":148,"angle":0},{"x":54,"y":-38,"angle":180},{"x":151,"y":-42,"angle":0},{"x":150,"y":-237,"angle":180},{"x":504,"y":-525,"angle":0},{"x":29,"y":-580,"angle":450},{"x":255,"y":-718,"angle":270},{"x":318,"y":-459,"angle":0},{"x":251,"y":-1071,"angle":0},{"x":278,"y":-825,"angle":0}]
            }
        }
    ]
}
