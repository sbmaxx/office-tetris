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
            block: 'json'
        }
    ]
}
