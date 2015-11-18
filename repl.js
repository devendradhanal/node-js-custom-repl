var repl = require('repl');
var _ = require('lodash');

var replServer = repl.start({
	prompt: '#!',
	input: process.stdin,
    output: process.stdout,
//	eval : my_custom_eval_fn
});

replServer.context._ = _;

replServer.defineCommand('print', {
  help: 'print <text here>',
  action: function(name) {
    this.write('Priting , ' + name + '!\n');
    this.displayPrompt();
  }
});

function my_custom_eval_fn(cmd, context, filename, callback){
	console.log('You typed the command ' , cmd);
}
