using AlgorithmsVisualizer.Service.Classes.SortingAlgorithms.SortingAlgorithmsUtility;
using AlgorithmsVisualizer.Service.Interfaces.SortingAlgorithms;

namespace AlgorithmsVisualizer.Service.Classes.SortingAlgorithms
{
    public class OddEvenSortAlgoService : SwapArrayElements, ISortingAlgorithm
    {
        private readonly List<object> order = new List<object>();

        public List<object> SortList(List<int> arr)
        {
            List<int> dupArr = new List<int>(arr);

            OddEvenSortWorker(dupArr);

            for (int i = 0; i < arr.Count; i++)
            {
                order.Add(new object[] { null, null, null, i });
            }

            return order;
        }

        private void OddEvenSortWorker(List<int> arr)
        {
            int n = arr.Count;
            bool sorted = false;

            while (!sorted)
            {
                sorted = true;

                // Odd phase (compare and swap odd-indexed elements)
                for (int i = 1; i < n - 1; i += 2)
                {
                    order.Add(new object[] { i, i + 1, null, null });
                    if (arr[i] > arr[i + 1])
                    {

                        arr = Swap(arr, i, i + 1);
                        order.Add(new object[] { i, i + 1, arr.ToArray(), null });
                        sorted = false;
                    }
                }

                // Even phase (compare and swap even-indexed elements)
                for (int i = 0; i < n - 1; i += 2)
                {
                    order.Add(new object[] { i, i + 1, null, null });
                    if (arr[i] > arr[i + 1])
                    {
                        arr = Swap(arr, i, i + 1);
                        order.Add(new object[] { i, i + 1, arr.ToArray(), null });
                        sorted = false;
                    }
                }
            }
        }
    }
}

