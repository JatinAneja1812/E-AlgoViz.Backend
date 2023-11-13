using AlgorithmsVisualizer.Service.Interfaces.SortingAlgorithms;

namespace AlgorithmsVisualizer.Service.Classes.SortingAlgorithms
{
    public class MergeSortAlgoService : ISortingAlgorithm
    {
        private readonly List<object> order = new List<object>();

        public List<object> SortList(List<int> arr)
        {
            List<int> dupArr = new List<int>(arr);
            MergeSortWorker(dupArr, 0, dupArr.Count - 1);

            for (int i = 0; i < arr.Count; i++)
            {
                order.Add(new object[] { null, null, null, i });
            }

            return order;
        }

        private void Combine(List<int> arr, int start, int middle, int end)
        {
            List<int> temp = new List<int>();

            int pos1 = start;
            int pos2 = middle + 1;

            while (pos1 <= middle && pos2 <= end)
            {
                order.Add(new object[] { pos1, pos2, null, null });

                if (arr[pos1] <= arr[pos2])
                {
                    temp.Add(arr[pos1]);
                    pos1++;
                }
                else
                {
                    temp.Add(arr[pos2]);
                    pos2++;
                }
            }

            while (pos1 <= middle)
            {
                order.Add(new object[] { pos1, null, arr.ToArray(), null });
                temp.Add(arr[pos1]);
                pos1++;
            }

            while (pos2 <= end)
            {
                order.Add(new object[] { null, pos2, arr.ToArray(), null });
                temp.Add(arr[pos2]);
                pos2++;
            }

            for (int i = start; i <= end; i++)
            {
                arr[i] = temp[i - start];
                order.Add(new object[] { i, null, arr.ToArray(), null });
            }
        }

        private void MergeSortWorker(List<int> arr, int start, int end)
        {
            if (start >= end)
            {
                return;
            }

            int middle = (start + end) / 2;

            MergeSortWorker(arr, start, middle);
            MergeSortWorker(arr, middle + 1, end);
            Combine(arr, start, middle, end);
        }
    }
}
