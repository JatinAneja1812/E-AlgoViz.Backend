using AlgorithmsVisualizer.Service.Classes.SortingAlgorithms.SortingAlgorithmsUtility;
using AlgorithmsVisualizer.Service.Interfaces.SortingAlgorithms;

namespace AlgorithmsVisualizer.Service.Classes.SortingAlgorithms
{
    public class InsertionSortAlgoService : SwapArrayElements, ISortingAlgorithm
    {
        private readonly List<object> order = new List<object>();

        public List<object> SortList(List<int> arr)
        {
            List<int> dupArr = new List<int>(arr);

            InsertionSortWorker(dupArr);

            for (int i = 0; i < arr.Count; i++)
            {
                order.Add(new object[] { null, null, null, i });
            }

            return order;
        }

        private void InsertionSortWorker(List<int> arr)
        {
            int n = arr.Count;

            for (int i = 1; i < n; i++)
            {
                int j = i - 1;
                int currentElem = arr[i];

                order.Add(new object[] { null, null, arr.ToArray(), null });

                while (j >= 0 && arr[j] > currentElem)
                {
                    arr = Swap(arr, j, j + 1);
                    order.Add(new object[] { j, j + 1, null, null });
                    order.Add(new object[] { j, j + 1, arr.ToArray(), null });
                    j--;
                }

                order.Add(new object[] { j, j + 1, null, null });
            }
        }
    }
}
