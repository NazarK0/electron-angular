import { app, BrowserWindow, ipcMain } from 'electron'
import * as path from 'path'
import * as fs from 'fs'
import userController from './entities/user/user.controller';


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
        contextIsolation: true,  // false if you want to run 2e2 test with Spectron
        enableRemoteModule : false // true if you want to run 2e2 test  with Spectron or use remote module in renderer context (ie. Angular)
      }, })

    win.loadFile(path.join(__dirname, `/../../dist/renderer/index.html`))
    
    win.webContents.openDevTools()
    userController(win);

    win.on('closed', () => {
    win = null
    })
  }

  ipcMain.on('getFiles', (event, arg) => {
    const files = fs.readdirSync(__dirname)
    win?.webContents.send('getFilesResponse', files)
  })