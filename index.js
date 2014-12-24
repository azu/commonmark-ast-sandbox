// LICENSE : MIT
"use strict";

var commonmark = require("commonmark");
var fs = require("fs");
var reader = new commonmark.DocParser();
var writer = new commonmark.HtmlRenderer();
var text = fs.readFileSync(__dirname + "/README.md","utf-8");
var parsed = reader.parse(text);
// AST: JSON object
console.log("AST",require("util").format(parsed));
var result = writer.render(parsed);
// => HTML