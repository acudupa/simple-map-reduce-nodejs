var lineReader = require('line-reader');
var fs = require('graceful-fs');

var grouper = function (obj) {
	console.log("In grouper");
	lineReader.eachLine(obj.mapper_output, function(line, last) {
		var words = line.split(",");
		var fileName = obj.grouper_output_dir + "grouper-" + words[0].replace(/(\r\n|\n|\r)/gm,"") + ".txt";
		fs.appendFile(fileName, words[1].replace(/(\r\n|\n|\r)/gm,"") + ",");
  	})
}
exports.grouper = grouper;