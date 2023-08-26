using DataModels;

namespace AlgorithmsVisualizer.Repository.Interfaces
{
    public interface IAlgorithmsInfoRepo
    {
        List<Algorithm> GetAllAlgorithmsDataFromDatabase();
    }
}
