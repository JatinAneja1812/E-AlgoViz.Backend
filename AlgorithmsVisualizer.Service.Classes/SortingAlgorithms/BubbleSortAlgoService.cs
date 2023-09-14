using AlgorithmsVisualizer.Service.Classes.SortingAlgorithms.SortingAlgorithmsUtility;
using AlgorithmsVisualizer.Service.Interfaces.SortingAlgorithms;

namespace AlgorithmsVisualizer.Service.Classes.SortingAlgorithms
{
    public class BubbleSortAlgoService : SwapArrayElements, ISortingAlgorithm
    {
        private readonly List<object> order = new List<object>();

        public List<object> SortList(List<int> arr)
        {
            List<int> dupArr = new List<int>(arr);
            BubbleSortWorker(dupArr);
            return order;
        }

        private void BubbleSortWorker(List<int> arr)
        {
            int n = arr.Count;

            for (int i = 0; i < n; i++)
            {
                for (int j = 0; j < n - i - 1; j++)
                {
                    order.Add(new object[] { j, j + 1, null, null });

                    if (arr[j] > arr[j + 1])
                    {
                        arr = Swap(arr, j, j + 1); // Update arr with the swapped result
                        order.Add(new object[] { j, j + 1, arr.ToArray(), null });
                    }
                }

                order.Add(new object[] { null, null, null, n - i - 1 });
            }
        }
    }
}
