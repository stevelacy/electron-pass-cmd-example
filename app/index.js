'use strict';

var fs = require('fs');
var spawn = require('child_process').spawn;
var remote = require('electron').remote;
var pty = require('pty.js');
var Term = require('term.js/src/term.js');

var el = document.getElementById('term');
var shellOpts = {
  cols: Math.floor(el.clientWidth / 7.1),
  rows: Math.floor(el.clientHeight / 13),
  screenKeys: true,
  cursorBlink: false,
  focusKeys: false,
  noEvents: false,
  useStyle: true,
  name: require('fs').existsSync('/usr/share/terminfo/x/xterm-256color')
  ? 'xterm-256color'
  : 'screen-256color',
};
window.addEventListener('resize', function(){
  term.resize(
    Math.floor(el.clientWidth / 7.1),
    Math.floor(el.clientHeight / 13)
  );
});

var shell = pty.fork(process.env.SHELL || 'bash', [], shellOpts);
var term = new Term(shellOpts);
term.open(el);

shell.on('data', function(data) {
  term.write(data);
});
shell.on('close', function() {
  window.close();
});
term.on('data', function(data) {
  shell.write(data);
});
