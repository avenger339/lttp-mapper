var pug = require('pug')
var fs = require('fs')
const path = require('path')


fs.readFile(path.join(__dirname, './src/'). 
// compile 
var fn = pug.compile('string of pug', options);
var html = fn(locals);
 
// render 
var html = pug.render('string of pug', merge(options, locals));
 
// renderFile 
var html = pug.renderFile('filename.pug', merge(options, locals));