using AlgorithmsVisualizer.Service.Interfaces.SortingAlgorithms;

namespace AlgorithmsVisualizer.Service.Classes.SortingAlgorithms
{
    public class RadixSortAlgoService : ISortingAlgorithm
    {
        private readonly List<object> order = new List<object>();

        public List<object> SortList(List<int> arr)
        {
            List<int> dupArr = new List<int>(arr);

            RadixSortWorker(dupArr);

            for (int i = 0; i < arr.Count; i++)
            {
                order.Add(new object[] { null, null, null, i });
            }

            return order;
        }

        private void CountingSort(List<int> arr, int exp)
        {
            int n = arr.Count;
            List<int> output = new List<int>(new int[n]);
            int[] count = new int[10];

            for (int i = 0; i < n; i++)
            {
                count[(arr[i] / exp) % 10]++;
            }

            for (int i = 1; i < 10; i++)
            {
                count[i] += count[i - 1];
            }

            for (int i = n - 1; i >= 0; i--)
            {
                int index = (arr[i] / exp) % 10;
                output[count[index] - 1] = arr[i];
                count[index]--;
            }

            for (int i = 0; i < n; i++)
            {
                order.Add(new object[] { i, null, null, null });
                arr[i] = output[i];
                order.Add(new object[] { i, null, arr.ToArray(), null });
            }
        }

        private void RadixSortWorker(List<int> arr)
        {
            int maxNum = arr.Max();

            for (int exp = 1; maxNum / exp > 0; exp *= 10)
            {
                CountingSort(arr, exp);
            }
        }
    }
}
