// This is the Main of the application. It has 2 parts starting main electron application  running as create-react-app on localhost:3000
// and Serve at using Node.js and express.js on localhost:8080

const path = require("path");
const {
  app,
  BrowserWindow,
  ipcMain,
  Tray,
  Menu,
  nativeImage,
  shell,
  BrowserView,
  session,
  screen,
} = require("electron");
const { ConnectionBuilder } = require("electron-cgi");
const isDev = require("electron-is-dev");
const menuTemplate = require("../src/Components/Menu/ElectronMenuTemplate");

let mainWindow = null;

let connString = isDev
  ? path.normalize(path.join(__dirname, "\\Backend\\BackendProcess.exe"))
  : path.normalize(
      path.join(process.resourcesPath, "\\Backend\\BackendProcess.exe")
    );
let connection = new ConnectionBuilder().connectTo(connString).build();

connection.onDisconnect = () => {
  console.log("lost");
  alert("Connection lost, restarting...");
  connection = new ConnectionBuilder().connectTo(connString).build();
};

function createWindow() {
  if (BrowserWindow.getAllWindows().length != 0) {
    return;
  }
  // Create the browser window.
  mainWindow = new BrowserWindow({
    // width: 800,
    // height: 720,
    // minWidth: 1920,
    // minHeight: 1180,
    height: 768,
    width: 1024,
    useContentSize: true,
    frame: false,
    transparent: true,
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
  // mainWindow.setResizable(false);
  mainWindow.on("unmaximize", () => mainWindow.maximize());
  // and load the index.html of the app.
  // win.loadFile("index.html");
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

  // Emitted when the window is closed.
  mainWindow.on("closed", function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
  });
  mainWindow.webContents.on("new-window", (event, url) => {
    event.preventDefault();
    mainWindow.loadURL(url);
  });

  // screenWidth = screen.getPrimaryDisplay().workAreaSize.width;
}

// const menuContents = Menu.buildFromTemplate(menuTemplate(mainWindow));

// let menuItem = menuContents.getMenuItemById("ViewMenu");

// menuItem.submenu.append(
//   new MenuItem({
//     label: "Dark Mode",
//     click: () => {
//       mainWindow.webContents.executeJavaScript(`
//       var element = document.body; element.classList.toggle("dark-mode");`);
//       mainWindow.webContents.executeJavaScript(`
//       document.getElementsByClassName("container").classList.toggle("darkContainer");`);
//     },
//   })
// );

// Menu.setApplicationMenu(menuContents);

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then((_) => {
  createWindow();
});

ipcMain.on("close-window", (_) => {
  app.quit();
});

ipcMain.on("minimise-window", (_) => {
  if (BrowserWindow.getAllWindows().length === 1) {
    BrowserWindow.getAllWindows()[0].minimize();
  }
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

ipcMain.on("greeting", async (event, data) => {
  console.log("Clicked");
  console.log(
    path.normalize(path.join(__dirname, "\\Backend\\BackendProcess.exe"))
  );
  if (BrowserWindow.getAllWindows().length === 1) {
    try {
      const greeting = await connection.send("greeting", "John");
      console.log(greeting);
    } catch (err) {
      console.log(err); //err is the serialized exception thrown in the .NET handler for the greeting request
    }
  }
});
