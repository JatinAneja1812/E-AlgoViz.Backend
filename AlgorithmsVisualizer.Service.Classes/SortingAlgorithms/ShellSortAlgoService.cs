using AlgorithmsVisualizer.Service.Interfaces.SortingAlgorithms;

namespace AlgorithmsVisualizer.Service.Classes.SortingAlgorithms
{
    public class ShellSortAlgoService : ISortingAlgorithm
    {
        private readonly List<object> order = new List<object>();

        public List<object> SortList(List<int> arr)
        {
            List<int> dupArr = new List<int>(arr);
            ShellSortWorker(dupArr);
            for (int i = 0; i < arr.Count; i++)
            {
                order.Add(new object[] { null, null, null, i });
            }
            return order;
        }

        private void ShellSortWorker(List<int> arr)
        {
            int n = arr.Count;
            int gap = n / 2;

            while (gap > 0)
            {
                for (int i = gap; i < n; i++)
                {
                    int temp = arr[i];
                    int j = i;

                    order.Add(new object[] { j, j - gap, null, null });

                    while (j >= gap && arr[j - gap] > temp)
                    {
                        arr[j] = arr[j - gap];
                        j -= gap;
                        order.Add(new object[] { j, j - gap, arr.ToArray(), null });
                    }

                    arr[j] = temp;
                    order.Add(new object[] { j, null, arr.ToArray(), null }); // Record the last swap
                }

                gap = gap / 2;
            }
        }
    }
}
