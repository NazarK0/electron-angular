import { app, BrowserWindow, ipcMain } from 'electron'
import * as path from 'path'
import userController from './entities/user/user.controller';
import { testConnection, syncModels, disconnect } from './dbConnect'
import { environment } from '../environments/environment';


let win: BrowserWindow | null;

app.on('ready', createWindow)

app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
})

function createWindow() {
    win = new BrowserWindow({ width: 800, height: 600, webPreferences: {
        worldSafeExecuteJavaScript: true,
        nodeIntegration: true,
        allowRunningInsecureContent: true,
        contextIsolation: false,  // false if you want to run 2e2 test with Spectron
        enableRemoteModule : false // true if you want to run 2e2 test  with Spectron or use remote module in renderer context (ie. Angular)
      }, });

    testConnection();

    if (!environment.production) {
      syncModels();
      win.webContents.openDevTools()
    }
      
    win.loadFile(path.join(__dirname, `/../../dist/renderer/index.html`));

    userController(win);

    win.on('closed', () => {
      win = null;
      disconnect();
    })
}