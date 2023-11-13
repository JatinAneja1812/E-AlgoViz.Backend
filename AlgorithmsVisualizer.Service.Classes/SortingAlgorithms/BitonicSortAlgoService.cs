using AlgorithmsVisualizer.Service.Interfaces.SortingAlgorithms;

namespace AlgorithmsVisualizer.Service.Classes.SortingAlgorithms
{
    public class BitonicSortAlgoService : ISortingAlgorithm
    {
        private readonly List<object> order = new List<object>();

        public List<object> SortList(List<int> arr)
        {
            List<int> dupArr = new List<int>(arr);

            BitonicSortWorker(dupArr);

            for (int i = 0; i < arr.Count; i++)
            {
                order.Add(new object[] { null, null, null, i });
            }

            return order;
        }

        private void CompAndSwap(List<int> a, int i, int j, int dir)
        {
            if ((a[i] > a[j] && dir == 1) || (a[i] < a[j] && dir == 0))
            {
                // Swapping elements
                int temp = a[i];
                a[i] = a[j];
                a[j] = temp;
                order.Add(new object[] { i, j, a.ToArray(), dir });
            }
        }

        private void BitonicMerge(List<int> a, int low, int cnt, int dir)
        {
            if (cnt > 1)
            {
                int k = cnt / 2;
                for (int i = low; i < low + k; i++)
                    CompAndSwap(a, i, i + k, dir);
                BitonicMerge(a, low, k, dir);
                BitonicMerge(a, low + k, k, dir);
            }
        }

        private void Sort(List<int> a, int low, int cnt, int dir)
        {
            if (cnt > 1)
            {
                int k = cnt / 2;

                // Sort in ascending order since dir here is 1
                Sort(a, low, k, 1);

                // Sort in descending order since dir here is 0
                Sort(a, low + k, k, 0);

                // Merge the whole sequence in ascending order since dir=1.
                BitonicMerge(a, low, cnt, dir);
            }
        }

        private void BitonicSortWorker(List<int> arr)
        {
            order.Add(new object[] { null, null, arr.ToArray(), null }); // Initial state of the array
            Sort(arr, 0, arr.Count, 1);

            // Perform the final swap to ensure the array is fully sorted
            int n = arr.Count;
            bool swapped;
            do
            {
                swapped = false;
                for (int i = 0; i < n - 1; i++)
                {
                    if (arr[i] > arr[i + 1])
                    {
                        int temp = arr[i];
                        arr[i] = arr[i + 1];
                        arr[i + 1] = temp;
                        order.Add(new object[] { i, i + 1, arr.ToArray(), 1 });
                        swapped = true;
                    }
                }
            } while (swapped);
        }
    }
}
