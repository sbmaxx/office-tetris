module.exports = {
    block : 'page',
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
            elem: 'content',
            content: {
                block: 'room'
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
                        block: 'controls'
                    }
                },
                {
                    elem: 'section',
                    title: 'Варианты рассадки',
                    content: [
                        //{
                        //    block: 'json',
                        //    variants: [
                        //        {
                        //            name: 'current',
                        //            data: [{"x":213,"y":921,"angle":1800},{"x":309,"y":826,"angle":1800},{"x":308,"y":565,"angle":540},{"x":212,"y":-43,"angle":180},{"x":213,"y":-285,"angle":360},{"x":308,"y":-233,"angle":540},{"x":212,"y":185,"angle":540},{"x":212,"y":-327,"angle":360},{"x":213,"y":-260,"angle":1620},{"x":311,"y":-255,"angle":1080},{"x":214,"y":-350,"angle":1440},{"x":308,"y":-707,"angle":360},{"x":310,"y":-640,"angle":180},{"x":309,"y":-1140,"angle":1080},{"x":499,"y":-912,"angle":630},{"x":483,"y":-804,"angle":0},{"x":499,"y":-806,"angle":1350},{"x":443,"y":-1050,"angle":0},{"x":460,"y":-1266,"angle":0},{"x":460,"y":-1266,"angle":0}]
                        //        },
                        //        {
                        //            name: 'ololo',
                        //            data: [{"x":206,"y":935,"angle":1980},{"x":401,"y":633,"angle":1800},{"x":306,"y":538,"angle":720},{"x":568,"y":240,"angle":360},{"x":640,"y":381,"angle":360},{"x":404,"y":361,"angle":540},{"x":208,"y":158,"angle":720},{"x":666,"y":-128,"angle":360},{"x":204,"y":77,"angle":1710},{"x":404,"y":78,"angle":1260},{"x":303,"y":-16,"angle":1620},{"x":565,"y":-615,"angle":540},{"x":303,"y":-302,"angle":360},{"x":660,"y":-794,"angle":1260},{"x":499,"y":-912,"angle":630},{"x":483,"y":-804,"angle":0},{"x":499,"y":-806,"angle":1350},{"x":443,"y":-1050,"angle":0},{"x":460,"y":-1266,"angle":0},{"x":460,"y":-1266,"angle":0}]
                        //        },
                        //        {
                        //            name: 'xescoder',
                        //            data: [{"x":213,"y":921,"angle":1800},{"x":309,"y":826,"angle":1800},{"x":308,"y":565,"angle":540},{"x":212,"y":-43,"angle":180},{"x":213,"y":-285,"angle":360},{"x":309,"y":-380,"angle":720},{"x":212,"y":185,"angle":540},{"x":212,"y":-327,"angle":360},{"x":213,"y":-260,"angle":1620},{"x":311,"y":-255,"angle":1080},{"x":214,"y":-350,"angle":1440},{"x":308,"y":-707,"angle":360},{"x":310,"y":-640,"angle":180},{"x":308,"y":-993,"angle":1260},{"x":499,"y":-912,"angle":630},{"x":483,"y":-804,"angle":0},{"x":499,"y":-806,"angle":1350},{"x":443,"y":-1050,"angle":0},{"x":460,"y":-1266,"angle":0},{"x":460,"y":-1266,"angle":0}]
                        //        }
                        //    ]
                        //}
                    ]
                }
            ]
        }
    ]
};
