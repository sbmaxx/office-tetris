var techs = {
        // essential
        fileProvider: require('enb/techs/file-provider'),
        fileMerge: require('enb/techs/file-merge'),

        // optimization
        borschik: require('enb-borschik/techs/borschik'),

        // css
        stylus: require('enb-stylus/techs/stylus'),

        // js
        browserJs: require('enb-diverse-js/techs/browser-js'),
        prependYm: require('enb-modules/techs/prepend-modules'),

        // bh
        bh: require('enb-bh/techs/bh-server'),
        bemjsonToHtml: require('enb-bh/techs/html-from-bemjson')
    },
    enbBemTechs = require('enb-bem-techs'),
    levels = [
        { path: 'libs/bem-core/common.blocks', check: false },
        { path: 'libs/bem-core/desktop.blocks', check: false },
        { path: 'libs/bem-components/common.blocks', check: false },
        { path: 'libs/bem-components/desktop.blocks', check: false },
        { path: 'libs/bem-components/design/common.blocks', check: false },
        { path: 'libs/bem-components/design/desktop.blocks', check: false },
        { path: 'libs/bem-polymer/common.blocks', check: false },
        'common.blocks',
        'desktop.blocks'
    ];

module.exports = function(config) {
    var isProd = process.env.YENV === 'production';

    config.nodes('*.bundles/*', function(nodeConfig) {
        nodeConfig.addTechs([
            // essential
            [enbBemTechs.levels, { levels: levels }],
            [techs.fileProvider, { target: '?.bemjson.js' }],
            [enbBemTechs.bemjsonToBemdecl],
            [enbBemTechs.deps],
            [enbBemTechs.files],

            // css
            [techs.stylus, {
                target: '?.css',
                autoprefixer: {
                    browsers: ['ie >= 10', 'last 2 versions', 'opera 12.1', '> 2%']
                }
            }],

            [techs.bh, {
                jsAttrName: 'data-bem',
                jsAttrScheme: 'json'
            }],

            // html
            [techs.bemjsonToHtml],

            // js
            [techs.browserJs],
            [techs.fileMerge, {
                target: '?.pre.js',
                sources: ['?.browser.js']
            }],
            [techs.prependYm, { source: '?.pre.js' }],

            // borschik
            [techs.borschik, { sourceTarget: '?.js', destTarget: '?.min.js', freeze: true, minify: isProd }],
            [techs.borschik, { sourceTarget: '?.css', destTarget: '?.min.css', tech: 'cleancss', freeze: true, minify: isProd }]
        ]);

        nodeConfig.addTargets(['?.html', '?.min.css', '?.min.js']);
    });
};
