using AlgorithmsVisualizer.Service.Interfaces.SortingAlgorithms;

namespace AlgorithmsVisualizer.Service.Classes.SortingAlgorithms
{
    public class BogoSortAlgoService : ISortingAlgorithm
    {
        private readonly List<object> order = new List<object>();

        public List<object> SortList(List<int> arr)
        {
            while (!IsSorted(arr))
            {
                ShuffleArray(arr);
                order.Add(new object[] { null, null, arr.ToArray(), null, null });
            }

            for (int i = 0; i < arr.Count; i++)
            {
                order.Add(new object[] { null, null, null, i, null });
            }

            return order;
        }

        private void ShuffleArray(List<int> arr)
        {
            Random rand = new Random();
            int n = arr.Count;

            for (int i = n - 1; i > 0; i--)
            {
                int j = rand.Next(0, i + 1);
                int temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }

        private bool IsSorted(List<int> arr)
        {
            for (int i = 0; i < arr.Count - 1; i++)
            {
                if (arr[i] > arr[i + 1])
                {
                    return false;
                }
            }
            return true;
        }
    }
}
