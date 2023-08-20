const path = require("path");
const {
  app,
  BrowserWindow,
  ipcMain,
  Tray,
  Menu,
  shell
} = require("electron");
const isDev = require("electron-is-dev");
const child = require('child_process').execFile;
const fetch = require('electron-fetch').default

let mainWindow = null;
let tray = null;

let connString = isDev
  ? path.normalize(path.join(__dirname, "\\Backend\\BackendProcess.exe"))
  : path.normalize(
      path.join(process.resourcesPath, "\\Backend\\BackendProcess.exe")
    );

child(connString, function(err, data) {
  if(err){
      console.error(err);
      return;
  }
});


function createWindow() {
  if (BrowserWindow.getAllWindows().length !== 0) {
    return;
  }
  // Create the browser window.
  mainWindow = new BrowserWindow({
    height: 768,
    width: 1024,
    useContentSize: true,
    frame: false,
    transparent: true,
    resizable: true,
    webPreferences: {
      enableRemoteModule: true,
      contextIsolation: false,
      nodeIntegration: true,
      nativeWindowOpen: true,
      preload: __dirname + "/preload.js",
      icon: path.join(__dirname, "/imgs/app.png"),
    },
  });

  mainWindow.maximize();
  mainWindow.on("unmaximize", () => mainWindow.maximize());
  mainWindow.loadURL(
    isDev
      ? "http://localhost:3000"
      : `file://${path.join(__dirname, "../build/index.html")}`
  );

  if (isDev) {
    mainWindow.webContents.openDevTools({ mode: "detach" });
  }

  mainWindow.once("ready-to-show", () => mainWindow.show());
  mainWindow.on("maximize", () => {
    mainWindow.reload();
  });
  
  mainWindow.on("closed", function () {
    mainWindow = null;
  });
  mainWindow.webContents.on("new-window", (event, url) => {
    event.preventDefault();
    mainWindow.loadURL(url);
  });
}

function createTray(){
  tray = new Tray(path.join('src/imgs/icons','AppIcon.png'))

  const contextMenu = Menu.buildFromTemplate([
    {
      label: 'Help/Documentation',
      click: _ => {
        shell.openExternal('https://your-documentation-url.com');  //TODO: PROVICE APP DOCUMENETATION and USER GUIDE
      }
    },
    {
      label: 'Support/Contact',
      click: _ => {
        shell.openExternal('mailto:e-algovishelp@gmail.com');
      }
    },
    {
      label:'Quit',
      click: _ => app.quit()
    }
  ])
  tray.setContextMenu(contextMenu)
  tray.setToolTip('E-AlgoVis')
}

app.whenReady().then((_) => {
  createWindow();
  createTray();
});

ipcMain.on("close-window", (_) => {
  if (process.platform !== 'darwin') {
    // For platforms other than macOS
    if (tray) {
      tray.destroy();
    }
    app.quit();
  }
});

ipcMain.on("minimise-window", (_) => {
  if (BrowserWindow.getAllWindows().length === 1) {
    BrowserWindow.getAllWindows()[0].minimize();
  }
});

ipcMain.on("reload-window", (_) => {
  mainWindow.reload();
});

ipcMain.on("maximise-window", (_) => {
  if (BrowserWindow.getAllWindows().length === 1) {
    if (!BrowserWindow.getAllWindows()[0].isMaximized()) {
      BrowserWindow.getAllWindows()[0].maximize();
    } else {
      BrowserWindow.getAllWindows()[0].unmaximize();
    }
    BrowserWindow.getAllWindows()[0].webContents.send("maximised-window");
  }
});

ipcMain.on("visualizeDijkstra", async (event, grid, startNode, endNode) => {
  console.log("Clicked");

  if (BrowserWindow.getAllWindows().length === 1) {
    try {
      const dijkstraVisualizerDTO = {
        grid: grid,
        startNode: startNode,
        endNode: endNode
      };

      fetch(
        "http://localhost:8080/api/frontend/Dijkstra",
        {
          method: "POST",
          headers: {
            Accept: "*/*",
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(dijkstraVisualizerDTO)
        }
      )
        .then((res) => {
          return res.text();
        })
        .then((result) => {
         
          event.sender.send("dijkstraResult", result);
        });
    } catch (err) {
      console.log(err);
    }
  }
});

