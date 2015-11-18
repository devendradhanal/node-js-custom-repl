var repl = require('repl');


var replServer = repl.start({
	prompt: '#!'
});

replServer.defineCommand('print', {
  help: 'print <text here>',
  action: function(name) {
    this.write('Priting , ' + name + '!\n');
    this.displayPrompt();
  }
});
