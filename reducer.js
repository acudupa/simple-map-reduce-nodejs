var fs = require('graceful-fs');
var lineReader = require('line-reader');

var reducer = function (obj) {
	fs.readdirSync(obj.grouper_output_dir).forEach(function(file){
  		lineReader.eachLine(obj.grouper_output_dir+file, function(line, last) {
  			var wordsArray = line.split(",");
  			var totalWords = wordsArray.length-1;
  			var entry = "There are " + totalWords + " words of " + wordsArray[0].length + " Characters";
  			fs.appendFile(obj.reducer_output, entry + "\n");
  		})
  	})
}
exports.reducer = reducer;