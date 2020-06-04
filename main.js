console.log("Electron is working");

const electron = require("electron");
const app = electron.app;
const Browserwindow = electron.BrowserWindow;
const path = require("path");
const url = require("url");


let win;

function createWindow() {
    win = new Browserwindow({
        width: 800,
        height: 880,
        icon: path.join(__dirname, 'app/assets/logo/emoy_logo.png'),
        webPreferences: {
            nodeIntegration: true,
            webviewTag: true,
            webSecurity: false,
            allowRunningInsecureContent: true,
        }
    });
    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file',
        slashes: true
    }))

}
app.on('ready', createWindow);

// app.on('window-all-closed', () => {
//     if(process.platform !== 'darwin'){
//         app.quit()
//     }
// });

// app.on('activate', () => {
//     if(win === null){
//         createWindow()
//     }
// });