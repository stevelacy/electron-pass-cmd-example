'use strict';

var electron = require('electron');

var app = electron.app;
var BrowserWindow = electron.BrowserWindow;
var browserWindow;

function createWindow () {
  if (browserWindow) return;
  browserWindow = new BrowserWindow({
    width: 800,
    height: 450,
    autoHideMenuBar: true
  });
  browserWindow.loadURL('file://' + __dirname + '/app/index.html');
}
app.on('ready', createWindow);
app.on('activate', createWindow);
app.on('window-all-closed', function() {
  app.quit();
});
