using AlgorithmsVisualizer.Repository.Interfaces;
using AlgorithmsVisualizer.Service.Interfaces;
using DataModels;

namespace AlgorithmsVisualizer.Service.Classes
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
