const electron = require("electron");

const app = electron.app;
const name  = electron.app.getName()

module.exports = (mainWindow) => {
  const template = [
    {
      label: "File",
      submenu: [
        {
          label: `About ${name}`,
          click: (_) => {
            console.log("clicked about");
          },
          role: "about",
        },
        {
          type: "separator",
        },
        {
          label: "Quit",
          click: (_) => {
            app.quit();
          },
          accelerator: "Ctrl+Q",
        },
      ],
    },

    {
      id: 'ViewMenu',
      label: "View",
      submenu: [
        {
          label: "Reload",
          accelerator: "CmdOrCtrl+R",
          click: (item, focusedWindow) => {
            if (focusedWindow) focusedWindow.reload();
          },
        },
        {
          label: "Force Reload",
          accelerator: "CmdOrCtrl+Shift+R",
          role: 'forceReload',
        },
        {
          type: "separator",
        },
        {
          label: "Toggle Developer Tools",
          accelerator: ((_) => {
            if (process.platform === "darwin") return "Alt+Command+I";
            else return "Ctrl+Shift+I";
          })(),
          click: function (item, focusedWindow) {
            if (focusedWindow) focusedWindow.toggleDevTools();
          },
        },
        {
          type: "separator",
        },
      ],
    },

    {
      label: "Window",
      submenu: [
        {
          label: "Maximize",
          accelerator: "CmdOrCtrl+N",
          click: (item, focusedWindow) => {
            if (focusedWindow) focusedWindow.maximize();
          },
        },
        {
          type: "separator",
        },
        {
          label: "Minimize",
          accelerator: "CmdOrCtrl+M",
          role: "minimize",
        },
      ],
    },
  ];

  var windowMenu = template.find(function (m) {
    return m.role === "window";
  });
  if (windowMenu) {
    windowMenu.submenu.push(
      {
        type: "separator",
      },
      {
        label: "Bring All to Front",
        role: "front",
      }
    );
  }

  return template;
};





