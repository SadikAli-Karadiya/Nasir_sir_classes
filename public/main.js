const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const EventEmitter = require('events')


const path = require("path");

let mainWindow;
const loadingEvents = new EventEmitter()

function createWindow() {
  mainWindow = new BrowserWindow({ 
    icon: path.join(__dirname, 'software_icon.png'),
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,
      preload: path.join(__dirname, '../src/server.js')
    },
  });
  mainWindow.maximize()
  
  mainWindow.loadURL(
      `file://${path.join(__dirname, "/loader.html")}`
    );

   mainWindow.webContents.once('dom-ready', () => {
    mainWindow.loadURL(
      `file://${path.join(__dirname, "/index.html")}`
    );
  })
  mainWindow.on( "closed", () => { mainWindow = null; localStorage.clear() } );
}

app.on("ready", createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
    localStorage.clear()
  }
});

app.on("activate", () => {
  if (mainWindow === null) {
    createWindow();
  }
});


