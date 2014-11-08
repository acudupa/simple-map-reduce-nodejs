var jf = require('jsonfile')
var fs = require('graceful-fs');
var mapper = require("./mapper");
var grouper = require("./grouper");
var reducer = require ("./reducer");

var file = './config.json';

jf.readFile(file, function(err, obj) {
	try {
		clearFiles(obj);
	} catch(ex) {

	}

  console.log(obj.target_file);
  mapper.mapper(obj);
  grouper.grouper(obj);
  reducer.reducer(obj);
});

var clearFiles = function (obj) {
fs.exists(obj.mapper_output, function(exists) {
  	if(exists) {
  		fs.unlinkSync(obj.mapper_output);
  		fs.readdirSync(obj.grouper_output_dir).forEach(function(file){
  			fs.unlinkSync(obj.grouper_output_dir + file);
  		})
  		fs.unlinkSync(obj.reducer_output);
  	}
  })
}