using AlgorithmsVisualizer.Service.Interfaces.SortingAlgorithms;

namespace AlgorithmsVisualizer.Service.Classes.SortingAlgorithms
{
    public class PancakeSortAlgoService : ISortingAlgorithm
    {
        private readonly List<object> order = new List<object>();

        public List<object> SortList(List<int> arr)
        {
            List<int> dupArr = new List<int>(arr);

            PancakeSortWorker(dupArr);

            for (int i = 0; i < arr.Count; i++)
            {
                order.Add(new object[] { null, null, null, i });
            }

            return order;
        }

        private void PancakeSortWorker(List<int> arr)
        {
            int n = arr.Count;

            while (n > 1)
            {
                // Find the index of the maximum element in the first n elements
                int maxIndex = FindMaxIndex(arr, n);

                if (maxIndex != n - 1)
                {
                    // Flip the array up to the maximum element (bringing it to the first position)
                    order.Add(new object[] { 0, maxIndex, null, null });
                    arr = Swap(0, maxIndex, arr);
                    order.Add(new object[] { 0, maxIndex, arr.ToArray(), null });

                    // Flip the entire array (bringing the maximum element to the correct position)
                    order.Add(new object[] { 0, n - 1, null, null });
                    arr = Swap(0, n - 1, arr);
                    order.Add(new object[] { 0, n - 1, arr.ToArray(), null });
                }

                // Reduce the size of the unsorted array
                n--;
            }
        }

        private List<int> Swap(int i, int j, List<int> arr)
        {
            while (i < j)
            {
                int temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
                i++;
                j--;
            }
            return arr;
        }

        private int FindMaxIndex(List<int> arr, int n)
        {
            int maxIndex = 0;
            for (int i = 0; i < n; i++)
            {
                if (arr[i] > arr[maxIndex])
                {
                    maxIndex = i;
                }
            }
            return maxIndex;
        }
    }
}
