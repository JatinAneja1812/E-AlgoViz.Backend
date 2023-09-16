using AlgorithmsVisualizer.Service.Classes.SortingAlgorithms.SortingAlgorithmsUtility;
using AlgorithmsVisualizer.Service.Interfaces.SortingAlgorithms;

namespace AlgorithmsVisualizer.Service.Classes.SortingAlgorithms
{
    public class HeapSortAlgoService : SwapArrayElements, ISortingAlgorithm
    {
        private readonly List<object> order = new List<object>();

        public List<object> SortList(List<int> arr)
        {
            List<int> dupArr = new List<int>(arr);
            HeapSortWorker(dupArr);

            for (int i = 0; i < arr.Count; i++)
            {
                order.Add(new object[] { null, null, null, i });
            }

            return order;
        }

        private void Heapify(List<int> arr, int n, int i)
        {
            int largest = i;
            int left = 2 * i + 1;
            int right = 2 * i + 2;

            if (left < n && arr[left] > arr[largest])
            {
                largest = left;
            }

            if (right < n && arr[right] > arr[largest])
            {
                largest = right;
            }

            if (largest != i)
            {
                order.Add(new object[] { i, largest, arr.ToArray(), null });
                arr = Swap(arr, i, largest);
                Heapify(arr, n, largest);
            }
        }

        private void HeapSortWorker(List<int> arr)
        {
            int n = arr.Count;

            // Build max heap
            for (int i = n / 2 - 1; i >= 0; i--)
            {
                Heapify(arr, n, i);
            }

            // Heap sort
            for (int i = n - 1; i > 0; i--)
            {
                order.Add(new object[] { 0, i, null, null });
                arr = Swap(arr, 0, i);
                order.Add(new object[] { 0, i, arr.ToArray(), null });
                Heapify(arr, i, 0);
            }
        }
    }
}
