using AlgorithmsVisualizer.Service.Classes.SortingAlgorithms.SortingAlgorithmsUtility;
using AlgorithmsVisualizer.Service.Interfaces.SortingAlgorithms;

namespace AlgorithmsVisualizer.Service.Classes.SortingAlgorithms
{
    public class ShakerSortAlgoService : SwapArrayElements, ISortingAlgorithm
    {
        private readonly List<object> order = new List<object>();
        public List<object> SortList(List<int> arr)
        {
            List<int> dupArr = new List<int>(arr);

            ShakerSortWorker(dupArr);

            for (int i = 0; i < arr.Count; i++)
            {
                order.Add(new object[] { null, null, null, i });
            }

            return order;
        }

        private void ShakerSortWorker(List<int> arr)
        {
            int start = 0;
            int end = arr.Count - 1;

            while (start <= end)
            {
                bool swapped = false;

                // Forward pass (similar to Bubble Sort)
                for (int i = start; i < end; i++)
                {
                    order.Add(new object[] { i, i + 1, null, null });

                    if (arr[i] > arr[i + 1])
                    {
                        arr = Swap(arr, i, i + 1);
                        order.Add(new object[] { i, i + 1, arr.ToArray(), null });
                        swapped = true;
                    }
                }

                if (!swapped) break;

                end--;

                // Backward pass
                for (int i = end; i > start; i--)
                {
                    order.Add(new object[] { i, i - 1, null, null });

                    if (arr[i] < arr[i - 1])
                    {
                        arr = Swap(arr, i, i - 1);
                        order.Add(new object[] { i, i - 1, arr.ToArray(), null });
                        swapped = true;
                    }
                }

                start++;
            }
        }
    }
}