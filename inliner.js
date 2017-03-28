var fs = require('fs');
var Inliner = require('inliner');
const commandLineArgs = require('command-line-args');

const optionDefinitions = [
    {name: 'src', type: String},
    {name: 'output', type: String}
];
const options = commandLineArgs(optionDefinitions);

console.log('Minifying', options.src);

new Inliner(options.src, function (error, html) {
    fs.writeFile(options.output, html, function (err) {
        if (err) {
            return console.log(err);
        }
        console.log('Compressed and inlined HTML page saved to', options.output);
    });
});