using AlgorithmsVisualizer.Service.Classes.SortingAlgorithms.SortingAlgorithmsUtility;
using AlgorithmsVisualizer.Service.Interfaces.SortingAlgorithms;

namespace AlgorithmsVisualizer.Service.Classes.SortingAlgorithms
{
    public class QuickSortAlgoService : SwapArrayElements, ISortingAlgorithm
    {
        private readonly List<object> order = new List<object>();

        public List<object> SortList(List<int> arr)
        {
            List<int> dupArr = new List<int>(arr);
            QuickSortWorker(dupArr, 0, dupArr.Count - 1);
            return order;
        }


        private int Partition(List<int> arr, int start, int end)
        {
            int pivotSpot = start;
            int pivot = start;
            order.Add(new object[] { null, null, null, null, pivotSpot });

            for (int i = pivot + 1; i <= end; i++)
            {
                order.Add(new object[] { i, pivot, null, null, null });
                if (arr[pivot] > arr[i])
                {
                    pivotSpot++;
                    order.Add(new object[] { null, null, null, null, pivotSpot });

                    var swapResult = Swap(arr, pivotSpot, i);
                    order.Add(new object[] { pivotSpot, i, swapResult.ToList(), null, null });
                }
            }

            return pivotSpot;
        }

        private void QuickSortWorker(List<int> arr, int start, int end)
        {
            if (start >= end)
            {
                if (start == end)
                {
                    order.Add(new object[] { null, null, null, start, null });
                }
                return;
            }

            int pivot = (start + end) / 2;
            var pivotSwapResult = Swap(arr, start, pivot);
            order.Add(new object[] { start, pivot, pivotSwapResult.ToList(), null, null });

            int pivotSpot = Partition(arr, start, end);
            var finalSwapResult = Swap(arr, start, pivotSpot);
            order.Add(new object[] { start, pivotSpot, finalSwapResult.ToList(), null, null });

            order.Add(new object[] { null, null, null, pivotSpot, null });

            if (start <= pivotSpot - 1)
            {
                QuickSortWorker(arr, start, pivotSpot - 1);
            }

            if (pivotSpot + 1 <= end)
            {
                QuickSortWorker(arr, pivotSpot + 1, end);
            }
        }
    }
}
