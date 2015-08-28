var fs = require('fs'),
    path = require('path'),
    dir = 'data';
module.exports = fs.readdirSync(dir).filter(function(file) {
    return /\.js$/.test(file);
}).map(function(file) {
    var data = require(path.join('.', dir, file));
    data.text = data.text.toLocaleLowerCase();
    data.id = file.replace('.js', '');
    return data;
});

