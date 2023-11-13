using AlgorithmsVisualizer.Repository.Interfaces;
using DataModels;
using Microsoft.Extensions.DependencyInjection;
using System.Diagnostics;
using VisualizerDatabase.VisualizerContext;

namespace AlgorithmsVisualizer.Repository.Classes
{
    public class AlgorithmsInfoRepo : IAlgorithmsInfoRepo
    {
        private IServiceProvider _serviceProvider;

        public AlgorithmsInfoRepo(IServiceProvider serviceProvider)
        {
            _serviceProvider = serviceProvider;
        }

        public List<Algorithm> GetAllAlgorithmsDataFromDatabase()
        {
            try
            {
                using (var scope = _serviceProvider.CreateScope()) 
                {
                    var _dbContext = scope.ServiceProvider.GetService<VisContext>();

                    return _dbContext.AlgorithmsData.ToList();
                }
            }
            catch (Exception ex)
            {
                EventLog.WriteEntry("AlgorithmsVisualizer.Repository", $"Failed to retrieve algorithms data from the database. Error occured at AlgorithmsInfoRepo with error message and stack trace: " +
                    $"\n{ex.Message}. \n {ex.StackTrace}.\n Inner Exception: {ex.InnerException.Message} and {ex.InnerException.StackTrace}  ", EventLogEntryType.Error);

                return null;
            }

        }
    }
}
