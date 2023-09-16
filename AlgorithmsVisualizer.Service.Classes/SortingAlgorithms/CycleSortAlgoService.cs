using AlgorithmsVisualizer.Service.Interfaces.SortingAlgorithms;

namespace AlgorithmsVisualizer.Service.Classes.SortingAlgorithms
{
    public class CycleSortAlgoService : ISortingAlgorithm
    {
        private readonly List<object> order = new List<object>();

        public List<object> SortList(List<int> arr)
        {

            List<int> dupArr = new List<int>(arr);

            CycleSortWorker(dupArr);

            for (int i = 0; i < arr.Count; i++)
            {
                order.Add(new object[] { null, null, null, i });
            }

            return order;
        }

        private void CycleSortWorker(List<int> arr)
        {
            int n = arr.Count;

            for (int cycleStart = 0; cycleStart < n - 1; cycleStart++)
            {
                int item = arr[cycleStart];
                int pos = cycleStart;

                for (int i = cycleStart + 1; i < n; i++)
                {
                    order.Add(new object[] { i, null, null, null }); // Highlight the current element being compared

                    if (arr[i] < item)
                    {
                        pos++;
                    }
                }

                if (pos == cycleStart)
                {
                    order.Add(new object[] { null, null, arr.ToArray(), null }); // No rotation needed
                    continue;
                }

                while (item == arr[pos])
                {
                    pos++;
                }

                if (pos != cycleStart)
                {
                    order.Add(new object[] { cycleStart, pos, arr.ToArray(), null }); // Swap elements in the order array
                    int temp = item;
                    item = arr[pos];
                    arr[pos] = temp;
                    order.Add(new object[] { cycleStart, pos, arr.ToArray(), null });
                }

                while (pos != cycleStart)
                {
                    pos = cycleStart;

                    for (int i = cycleStart + 1; i < n; i++)
                    {
                        order.Add(new object[] { i, null, null, null }); // Highlight the current element being compared

                        if (arr[i] < item)
                        {
                            pos++;
                        }
                    }

                    while (item == arr[pos])
                    {
                        pos++;
                    }

                    if (item != arr[pos])
                    {
                        order.Add(new object[] { cycleStart, pos, arr.ToArray(), null }); // Swap elements in the order array
                        int temp = item;
                        item = arr[pos];
                        arr[pos] = temp;
                        order.Add(new object[] { cycleStart, pos, arr.ToArray(), null });
                    }
                }
            }
        }
    }
}
