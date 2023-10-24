// Import necessary modules
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

// Initialize variables for the main window and tray
let mainWindow = null;
let tray = null;

// Determine the path to the backend process executable
let connString = isDev
  ? path.normalize(path.join(__dirname, "\\Backend\\BackendProcess.exe"))
  : path.normalize(
      path.join(process.resourcesPath, "\\Backend\\BackendProcess.exe")
    );

// Start the backend process
child(connString, function(err, data) {
  if(err){
      console.error(err);
      return;
  }
});

// Function to create the main Electron window
function createWindow() {
  if (BrowserWindow.getAllWindows().length !== 0) {
    return;
  }
  // Load the application's HTML content based on whether in development or production mode
  // Handle window events
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
  
  mainWindow.on("closed", function () {
    mainWindow = null;
  });
  mainWindow.webContents.on("new-window", (event, url) => {
    event.preventDefault();
    mainWindow.loadURL(url);
  });
}

// Create the tray icon and context menu
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

// Initialize the application window and tray
app.whenReady().then((_) => {
  createWindow();
  createTray();
});

// Handle IPC (Inter-Process Communication) events
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


// APIS 

ipcMain.on("GetAlgorithmsList", async (event) => {
  if (BrowserWindow.getAllWindows().length === 1) {
    try {
      fetch(
        "http://localhost:5000/api/Algorithms/AlgorithmsInfo",
        {
          method: "GET",
          headers: {
            Accept: "text/plain",
            "Content-Type": "text/plain",
          },
        }
      )
        .then((res) => {
          return res.text();
        })
        .then((result) => {
          event.sender.send("resultList", result);
        });
    } catch (err) {
      console.log(err);
    }
  }
});

//Sorting Algorithms API

ipcMain.on("visualizeSort", async (event, array, algorithmType) => {
  if (BrowserWindow.getAllWindows().length === 1) {
    try {
      const sortDTO = {
        array: array,
        sortingAlgorithmType: algorithmType
      };

      fetch(
        "http://localhost:5000/api/SortingAlgos/Sort",
        {
          method: "POST",
          headers: {
            Accept: "*/*",
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(sortDTO)
        }
      )
        .then((res) => {
          return res.text();
        })
        .then((result) => {
          event.sender.send("sortResult", result);
        });
    } catch (err) {
      console.log(err);
    }
  }
});

//Pathfinding Algorithms API

ipcMain.on("visualizeShortestPath", async (event, grid, startNode, endNode, algorithmType ) => {
  if (BrowserWindow.getAllWindows().length === 1) {
    try {
      const dijkstraVisualizerDTO = {
        grid: grid,
        startNode: startNode,
        endNode: endNode,
        pathfindingAlgorithmType: algorithmType
      };

      fetch(
        "http://localhost:5000/api/PathfindingAlgos/ShortestPath",
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
           event.sender.send("pathfindingAlgoResult", result);
        });
    } catch (err) {
      console.log(err);
    }
  }
});
