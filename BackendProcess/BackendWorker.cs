using Microsoft.Extensions.Hosting;
using ElectronCgi.DotNet;
using System.Diagnostics;


namespace BackendProcess
{
    public class BackendWorker : BackgroundService
    {
        //Frontend Connection
        private readonly Connection _connection = new ConnectionBuilder().WithLogging().Build();


        public BackendWorker()
        {
            
        }

        protected override async Task ExecuteAsync(CancellationToken stoppingToken)
        {
            CreateFrontendListeners();

            while (!stoppingToken.IsCancellationRequested)
            {
                await Task.Delay(1000, stoppingToken);
            }
        }

        private void CreateFrontendListeners()
        {
            //_connection.On<string, WindowsConfigurationDTO>("get-windows-config", (string request) =>
            //{
            //    EventLog.WriteEntry("Collector", "Windows Configuration Requested", EventLogEntryType.Information);

            //    return GetWindowsConfigListener();
            //});

            //_connection.On<string, TestCredentialsResultsDTO>("saved-credentials-test", (string request) =>
            //{
            //    return SavedCredentialsTestRequestListener();
            //});

            //_connection.On<TestCredentialsDTO, TestCredentialsResultsDTO>("unsaved-credentials-test", (TestCredentialsDTO testCredentialsDTO) =>
            //{
            //    return UnsavedCredentialsTestRequestListener(testCredentialsDTO);
            //});

            //_connection.On<string, string>("request-test", (string text) =>
            //{
            //    EventLog.WriteEntry("AlgorithmsVisualizer", "Requesting a Frontend connection Test", EventLogEntryType.Information);
            //    return TestUnityConnection(text);
            //});

            _connection.On<string, string>("greeting", (string name) =>
            {
                
                string text = $"Hello {name}!";

                EventLog.WriteEntry("AlgorithmsVisualizer", $"Requesting a Frontend connection Test data: {text}", EventLogEntryType.Information);

                return text;
            });


            //_connection.On<string, EngineConfigurationDTO>("get-engine-config", (string request) =>
            //{
            //    EventLog.WriteEntry("Collector", "Engine Configuration Requested", EventLogEntryType.Information);

            //    return GetEngineConfigListener();
            //});

            //_connection.On<string, UserConfigurationDTO>("get-initial-config", (string request) =>
            //{
            //    EventLog.WriteEntry("Collector", "Initial Configuration Requested", EventLogEntryType.Information);

            //    return GetUserConfigListener();
            //});

            //_connection.On<UserConfigurationDTO, bool>("save-user-config", (UserConfigurationDTO userConfigurationDTO) =>
            //{
            //    EventLog.WriteEntry("Collector", "User Configuration Saved", EventLogEntryType.Information);

            //    return SaveUserConfigListener(userConfigurationDTO);
            //});

            new Thread(delegate ()
            {
                _connection.Listen();
            }).Start();
        }

        //private WindowsConfigurationDTO GetWindowsConfigListener()
        //{
        //    return _windowsConfigurationService.GetWindowsConfigurationFromDatabase();
        //}

        //private EngineConfigurationDTO GetEngineConfigListener()
        //{
        //    return _engineConfigurationService.GetEngineConfigurationFromDatabase();
        //}

        //private UserConfigurationDTO GetUserConfigListener()
        //{
        //    EngineConfigurationDTO engineConfig = GetEngineConfigListener();
        //    WindowsConfigurationDTO windowsConfig = GetWindowsConfigListener();

        //    EventLog.WriteEntry("Collector", "EngineConfig is: " + engineConfig.NetworkEngine + " " + engineConfig.WindowsEngine, EventLogEntryType.Information);

        //    return new UserConfigurationDTO
        //    {
        //        EngineConfig = engineConfig,
        //        WindowsConfig = windowsConfig
        //    };
        //}

        //private bool SaveUserConfigListener(UserConfigurationDTO userConfigurationDTO)
        //{
        //    bool savedSuccessfully = _engineConfigurationService.SaveEngineConfigToDatabase(userConfigurationDTO.EngineConfig);

        //    savedSuccessfully = _windowsConfigurationService.SaveWindowsConfigToDatabase(userConfigurationDTO.WindowsConfig);

        //    _powershellUtility.RestartWindowsCollectionService();

        //    return savedSuccessfully;
        //}

        //private TestCredentialsResultsDTO UnsavedCredentialsTestRequestListener(TestCredentialsDTO testCredentialsDTO)
        //{
        //    TestCredentialsResultsDTO test = _jointPowershellUtilities.GetTestCredentialsResults(testCredentialsDTO).Result;

        //    EventLog.WriteEntry("Collector", "TestCredentialsResults are: " + test, EventLogEntryType.Information);

        //    return test;
        //}

        //private TestCredentialsResultsDTO SavedCredentialsTestRequestListener()
        //{
        //    TestCredentialsResultsDTO test = _jointPowershellUtilities.GetTestCredentialsResults().Result;

        //    EventLog.WriteEntry("Collector", "TestCredentialsResults are: " + test, EventLogEntryType.Information);

        //    return test;
        //}

        private string TestUnityConnection(string text)
        {
            //
            if (text != null)
            {
                return text;
            }
            else
            {
                return "Failed";
            }
        }
    }
}
