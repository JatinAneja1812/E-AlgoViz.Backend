namespace AlgorithmsVisualizer.Service.Classes.SortingAlgorithms.SortingAlgorithmsUtility
{
    public abstract class SwapArrayElements
    {
        public List<int> Swap(List<int> arr, int a, int b)
        {
            int temp = arr[a];
            arr[a] = arr[b];
            arr[b] = temp;
            return arr;
        }
    }
}
