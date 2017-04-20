'use strict';

var electron = require('electron');
var pkg = require('./package');
require('electron-debug')({ showDevTools: true });

var app = electron.app;
var BrowserWindow = electron.BrowserWindow;
var browserWindow;

function createWindow () {
  if (browserWindow) return;
  browserWindow = new BrowserWindow({
    width: 750,
    height: 420,
    autoHideMenuBar: true
  });
  browserWindow.setMenu(null);
  browserWindow.loadURL('file://' + __dirname + '/app/index.html');
}
app.on('ready', createWindow);
app.on('activate', createWindow);
app.on('window-all-closed', function() {
  app.quit();
});

app.setName(pkg.name);
