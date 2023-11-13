using AlgorithmsVisualizer.Service.Interfaces.SortingAlgorithms;

namespace AlgorithmsVisualizer.Service.Classes.SortingAlgorithms
{
    public class CubeSortAlgoService : ISortingAlgorithm
    {
        private readonly List<object> order = new List<object>();

        public List<object> SortList(List<int> arr)
        {
            List<int> dupArr = new List<int>(arr);

            CubeSortWorker(dupArr, 0, dupArr.Count - 1);

            for (int i = 0; i < arr.Count; i++)
            {
                order.Add(new object[] { null, null, null, i });
            }

            return order;
        }

        private void CubeSortWorker(List<int> arr, int low, int high)
        {
            if (low < high)
            {
                // Choose a pivot element
                int pivot = arr[(low + high) / 2];

                // Partition the array
                int i = low;
                int j = high;
                while (i <= j)
                {
                    while (arr[i] < pivot) i++;
                    while (arr[j] > pivot) j--;

                    if (i <= j)
                    {
                        int temp = arr[i];
                        arr[i] = arr[j];
                        arr[j] = temp;

                        // Store the step in the order array
                        order.Add(new object[] { i, j, arr.ToArray(), pivot });

                        i++;
                        j--;
                    }
                }

                // Sort the sub-arrays
                CubeSortWorker(arr, low, j);
                CubeSortWorker(arr, i, high);
            }
        }
    }
}
