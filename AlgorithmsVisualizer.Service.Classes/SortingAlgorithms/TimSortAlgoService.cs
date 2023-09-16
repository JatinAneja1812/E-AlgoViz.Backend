using AlgorithmsVisualizer.Service.Interfaces.SortingAlgorithms;

namespace AlgorithmsVisualizer.Service.Classes.SortingAlgorithms
{
    public class TimSortAlgoService : ISortingAlgorithm
    {
        private const int MIN_MERGE = 32;
        private readonly List<object> order = new List<object>();

        public List<object> SortList(List<int> arr)
        {
            List<int> dupArr = new List<int>(arr);

            TimSortWorker(dupArr);

            for (int i = 0; i < arr.Count; i++)
            {
                order.Add(new object[] { null, null, null, i });
            }

            return order;
        }

        private void InsertionSort(List<int> arr, int start, int end)
        {
            for (int i = start + 1; i <= end; i++)
            {
                int current = arr[i];
                int j = i - 1;

                order.Add(new object[] { i, j, arr.ToArray() }); // Highlight the current element being compared

                while (j >= start && arr[j] > current)
                {
                    arr[j + 1] = arr[j];
                    order.Add(new object[] { j + 1, j, arr.ToArray() }); // Swap elements in the order array
                    j--;
                }

                arr[j + 1] = current;
                order.Add(new object[] { j + 1, i, arr.ToArray() }); // Update the correct position for the current element
            }
        }

        private void Merge(List<int> arr, int start, int mid, int end)
        {
            int leftLength = mid - start + 1;
            int rightLength = end - mid;

            int[] leftArr = new int[leftLength];
            int[] rightArr = new int[rightLength];

            for (int i = 0; i < leftLength; i++)
            {
                leftArr[i] = arr[start + i];
            }

            for (int i = 0; i < rightLength; i++)
            {
                rightArr[i] = arr[mid + 1 + i];
            }

            int leftIndex = 0;
            int rightIndex = 0;
            int k = start;

            while (leftIndex < leftLength && rightIndex < rightLength)
            {
                order.Add(new object[] { k, null, null, k }); // Highlight elements being compared in both subarrays

                if (leftArr[leftIndex] <= rightArr[rightIndex])
                {
                    arr[k] = leftArr[leftIndex];
                    order.Add(new object[] { k, null, arr[k], null }); // Swap elements in the order array
                    leftIndex++;
                }
                else
                {
                    arr[k] = rightArr[rightIndex];
                    order.Add(new object[] { k, null, arr[k], null }); // Swap elements in the order array
                    rightIndex++;
                }

                k++;
            }

            while (leftIndex < leftLength)
            {
                arr[k] = leftArr[leftIndex];
                order.Add(new object[] { k, null, arr[k], null }); // Swap elements in the order array
                leftIndex++;
                k++;
            }

            while (rightIndex < rightLength)
            {
                arr[k] = rightArr[rightIndex];
                order.Add(new object[] { k, null, arr[k], null }); // Swap elements in the order array
                rightIndex++;
                k++;
            }
        }

        private void TimSortWorker(List<int> arr)
        {
            int n = arr.Count;

            for (int i = 0; i < n; i += MIN_MERGE)
            {
                InsertionSort(arr, i, Math.Min(i + MIN_MERGE - 1, n - 1));
            }

            int size = MIN_MERGE;

            while (size < n)
            {
                for (int left = 0; left < n; left += 2 * size)
                {
                    int mid = left + size - 1;
                    int right = Math.Min(left + 2 * size - 1, n - 1);

                    if (mid < right)
                    {
                        Merge(arr, left, mid, right);
                    }
                }

                size *= 2;
            }
        }
    }
}
