using AlgorithmsVisualizer.Repository.Interfaces;
using AlgorithmsVisualizer.Services.Classes;
using DataModels;

namespace AlgorithmsVisualizer.Services.Interfaces
{
    public class AlgorithmsInfo : IAlgorithmsInfo
    {
        private IAlgorithmsInfoRepo _algorithmsInfoRepo;

        public AlgorithmsInfo(IAlgorithmsInfoRepo AlgorithmsInfoRepo)
        {
            _algorithmsInfoRepo = AlgorithmsInfoRepo;
        }

        public List<Algorithm> GetAllAlgorithmsData()
        {
            var list = _algorithmsInfoRepo.GetAllAlgorithmsDataFromDatabase();
            return list;
        }
    }
}
