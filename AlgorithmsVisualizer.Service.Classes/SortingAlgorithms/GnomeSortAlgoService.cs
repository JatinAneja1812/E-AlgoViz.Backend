using AlgorithmsVisualizer.Service.Classes.SortingAlgorithms.SortingAlgorithmsUtility;
using AlgorithmsVisualizer.Service.Interfaces.SortingAlgorithms;

namespace AlgorithmsVisualizer.Service.Classes.SortingAlgorithms
{
    public class GnomeSortAlgoService : SwapArrayElements, ISortingAlgorithm
    {
        private readonly List<object> order = new List<object>();
        public List<object> SortList(List<int> arr)
        {
            List<int> dupArr = new List<int>(arr);

            GnomeSortWorker(dupArr);

            for (int i = 0; i < arr.Count; i++)
            {
                order.Add(new object[] { null, null, null, i });
            }

            return order;
        }

        private void GnomeSortWorker(List<int> arr)
        {
            int index = 0;

            while (index < arr.Count)
            {
                if (index == 0 || arr[index] >= arr[index - 1])
                {
                    order.Add(new object[] { index, index - 1, null, null });
                    index++;
                }
                else
                {
                    order.Add(new object[] { index, index - 1, null, null });
                    arr = Swap(arr, index, index - 1);
                    order.Add(new object[] { index, index - 1, arr.ToArray(), null });
                    index--;
                }
            }
        }
    }
}
