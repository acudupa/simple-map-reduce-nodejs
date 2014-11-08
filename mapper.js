var util = require('util')
var lineReader = require('line-reader');
var fs = require('graceful-fs');

var mapper = function (obj) {
	lineReader.eachLine(obj.target_file, function(line, last) {
		var words = line.replace(/[^A-Za-z ]/g, " ").split(" ");
		words.forEach(function(word) {
			var clean_word = word;
			if (clean_word.length>0) {
				var entry = clean_word.length + "," + clean_word;
				console.log(entry)
				fs.appendFile(obj.mapper_output, entry + "\n");
			};
		})
  	})
}

exports.mapper = mapper;