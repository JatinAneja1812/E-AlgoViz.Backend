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


//Pathfinding Algorithms APIs

ipcMain.on("visualizeDijkstra", async (event, grid, startNode, endNode) => {
  if (BrowserWindow.getAllWindows().length === 1) {
    try {
      const dijkstraVisualizerDTO = {
        grid: grid,
        startNode: startNode,
        endNode: endNode
      };

      fetch(
        "http://localhost:5000/api/PathfindingAlgos/Dijkstra",
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

ipcMain.on("visualizeAStar", async (event, grid, startNode, endNode) => {
  if (BrowserWindow.getAllWindows().length === 1) {
    try {
      const aStarVisualizerDTO = {
        grid: grid,
        startNode: startNode,
        endNode: endNode
      };

      fetch(
        "http://localhost:5000/api/PathfindingAlgos/AStar",
        {
          method: "POST",
          headers: {
            Accept: "*/*",
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(aStarVisualizerDTO)
        }
      )
        .then((res) => {
          return res.text();
        })
        .then((result) => {
          event.sender.send("aStarResult", result);
        });
    } catch (err) {
      console.log(err);
    }
  }
});

ipcMain.on("visualizeDFS", async (event, grid, startNode, endNode) => {
  if (BrowserWindow.getAllWindows().length === 1) {
    try {
      const dfsVisualizerDTO = {
        grid: grid,
        startNode: startNode,
        endNode: endNode
      };

      fetch(
        "http://localhost:5000/api/PathfindingAlgos/DFS",
        {
          method: "POST",
          headers: {
            Accept: "*/*",
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(dfsVisualizerDTO)
        }
      )
        .then((res) => {
          return res.text();
        })
        .then((result) => {
          event.sender.send("DFSResult", result);
        });
    } catch (err) {
      console.log(err);
    }
  }
});

ipcMain.on("visualizeGreedyBFS", async (event, grid, startNode, endNode) => {
  if (BrowserWindow.getAllWindows().length === 1) {
    try {
      const greedyBFSVisualizerDTO = {
        grid: grid,
        startNode: startNode,
        endNode: endNode
      };

      fetch(
        "http://localhost:5000/api/PathfindingAlgos/GreedyBFS",
        {
          method: "POST",
          headers: {
            Accept: "*/*",
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(greedyBFSVisualizerDTO)
        }
      )
        .then((res) => {
          return res.text();
        })
        .then((result) => {
          event.sender.send("GreedyBFSResult", result);
        });
    } catch (err) {
      console.log(err);
    }
  }
});

ipcMain.on("visualizeBreadthFirstSearch", async (event, grid, startNode, endNode) => {
  if (BrowserWindow.getAllWindows().length === 1) {
    try {
      const bfsVisualizerDTO = {
        grid: grid,
        startNode: startNode,
        endNode: endNode
      };

      fetch(
        "http://localhost:5000/api/PathfindingAlgos/BFS",
        {
          method: "POST",
          headers: {
            Accept: "*/*",
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(bfsVisualizerDTO)
        }
      )
        .then((res) => {
          return res.text();
        })
        .then((result) => {
          event.sender.send("BreadthFirstSearchResult", result);
        });
    } catch (err) {
      console.log(err);
    }
  }
});

ipcMain.on("visualizeSwarmSearch", async (event, grid, startNode, endNode) => {
  if (BrowserWindow.getAllWindows().length === 1) {
    try {
      const swarmVisualizerDTO = {
        grid: grid,
        startNode: startNode,
        endNode: endNode
      };

      fetch(
        "http://localhost:5000/api/PathfindingAlgos/Swarm",
        {
          method: "POST",
          headers: {
            Accept: "*/*",
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(swarmVisualizerDTO)
        }
      )
        .then((res) => {
          return res.text();
        })
        .then((result) => {
          event.sender.send("swarmSearchResult", result);
        });
    } catch (err) {
      console.log(err);
    }
  }
});

ipcMain.on("visualizeConvergentSwarmSearch", async (event, grid, startNode, endNode) => {
  if (BrowserWindow.getAllWindows().length === 1) {
    try {
      const convergentSwarmVisualizerDTO = {
        grid: grid,
        startNode: startNode,
        endNode: endNode
      };

      fetch(
        "http://localhost:5000/api/PathfindingAlgos/ConvergentSwarm",
        {
          method: "POST",
          headers: {
            Accept: "*/*",
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(convergentSwarmVisualizerDTO)
        }
      )
        .then((res) => {
          return res.text();
        })
        .then((result) => {
          event.sender.send("convergentSwarmSearchResult", result);
        });
    } catch (err) {
      console.log(err);
    }
  }
});

ipcMain.on("visualizeQuickSort", async (event, array) => {
  if (BrowserWindow.getAllWindows().length === 1) {
    try {
      const quickSortDTO = {
        array: array
      };

      fetch(
        "http://localhost:5000/api/SortingAlgos/QuickSort",
        {
          method: "POST",
          headers: {
            Accept: "*/*",
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(quickSortDTO)
        }
      )
        .then((res) => {
          return res.text();
        })
        .then((result) => {
          event.sender.send("quickSortResult", result);
        });
    } catch (err) {
      console.log(err);
    }
  }
});

ipcMain.on("visualizeMergeSort", async (event, array) => {
  if (BrowserWindow.getAllWindows().length === 1) {
    try {
      const mergeSortDTO = {
        array: array
      };

      fetch(
        "http://localhost:5000/api/SortingAlgos/MergeSort",
        {
          method: "POST",
          headers: {
            Accept: "*/*",
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(mergeSortDTO)
        }
      )
        .then((res) => {
          return res.text();
        })
        .then((result) => {
          event.sender.send("mergeSortResult", result);
        });
    } catch (err) {
      console.log(err);
    }
  }
});

ipcMain.on("visualizeHeapSort", async (event, array) => {
  if (BrowserWindow.getAllWindows().length === 1) {
    try {
      const heapSortDTO = {
        array: array
      };

      fetch(
        "http://localhost:5000/api/SortingAlgos/HeapSort",
        {
          method: "POST",
          headers: {
            Accept: "*/*",
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(heapSortDTO)
        }
      )
        .then((res) => {
          return res.text();
        })
        .then((result) => {
          event.sender.send("heapSortResult", result);
        });
    } catch (err) {
      console.log(err);
    }
  }
});

ipcMain.on("visualizeShellSort", async (event, array) => {
  if (BrowserWindow.getAllWindows().length === 1) {
    try {
      const shellSortDTO = {
        array: array
      };

      fetch(
        "http://localhost:5000/api/SortingAlgos/ShellSort",
        {
          method: "POST",
          headers: {
            Accept: "*/*",
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(shellSortDTO)
        }
      )
        .then((res) => {
          return res.text();
        })
        .then((result) => {
          event.sender.send("shellSortResult", result);
        });
    } catch (err) {
      console.log(err);
    }
  }
});

ipcMain.on("visualizeBubbleSort", async (event, array) => {
  if (BrowserWindow.getAllWindows().length === 1) {
    try {
      const bubbleSortDTO = {
        array: array
      };

      fetch(
        "http://localhost:5000/api/SortingAlgos/BubbleSort",
        {
          method: "POST",
          headers: {
            Accept: "*/*",
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(bubbleSortDTO)
        }
      )
        .then((res) => {
          return res.text();
        })
        .then((result) => {
          event.sender.send("bubbleSortResult", result);
        });
    } catch (err) {
      console.log(err);
    }
  }
});

ipcMain.on("visualizeSelectionSort", async (event, array) => {
  if (BrowserWindow.getAllWindows().length === 1) {
    try {
      const selectionSortDTO = {
        array: array
      };

      fetch(
        "http://localhost:5000/api/SortingAlgos/SelectionSort",
        {
          method: "POST",
          headers: {
            Accept: "*/*",
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(selectionSortDTO)
        }
      )
        .then((res) => {
          return res.text();
        })
        .then((result) => {
          event.sender.send("selectionSortResult", result);
        });
    } catch (err) {
      console.log(err);
    }
  }
});


ipcMain.on("visualizeInsertionSort", async (event, array) => {
  if (BrowserWindow.getAllWindows().length === 1) {
    try {
      const insertionSortDTO = {
        array: array
      };

      fetch(
        "http://localhost:5000/api/SortingAlgos/InsertionSort",
        {
          method: "POST",
          headers: {
            Accept: "*/*",
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(insertionSortDTO)
        }
      )
        .then((res) => {
          return res.text();
        })
        .then((result) => {
          event.sender.send("insertionSortResult", result);
        });
    } catch (err) {
      console.log(err);
    }
  }
});