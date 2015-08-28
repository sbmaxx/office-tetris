var states = require('../../data.js');

module.exports = {
    block : 'page',
    mix: [{ block: 'room', js: true }],
    title : 'Office Tetris',
    favicon : '/favicon.ico',
    head : [
        { elem : 'meta', attrs : { name : 'description', content : '' } },
        { elem : 'meta', attrs : { name : 'viewport', content : 'width=device-width, initial-scale=1' } },
        { elem : 'css', url : 'index.min.css' }
    ],
    scripts: [
        { elem : 'js', url : 'index.bh.client.js' },
        { elem : 'js', url : 'index.min.js' }
    ],
    mods : { theme : 'islands' },
    content : [
        {
            elem: 'section',
            title: 'Комната',
            mix: [{ elem: 'content' }],
            content: {
                block: 'room',
                elem: 'wrapper'
            }
        },
        {
            elem: 'side',
            content: [
                {
                    elem: 'section',
                    title: 'Легенда',
                    content: {
                        block: 'legend'
                    }
                },
                {
                    elem: 'section',
                    title: 'Управление',
                    content: {
                        block: 'room-controls'
                    }
                }
            ]
        },
        {
            elem: 'side',
            mix: [{ elem: 'json-wrapper' }],
            elemMods: { position: 'right' },
            content: [{
                elem: 'section',
                title: 'JSON текущей рассадки',
                content: {
                    block: 'json'
                }
            }, {
                elem: 'section',
                title: 'Варианты рассадки',
                content: states.map(function(state) {
                    return {
                        block: 'room-state',
                        state: state
                    };
                })
            }]
        }
    ]
};
