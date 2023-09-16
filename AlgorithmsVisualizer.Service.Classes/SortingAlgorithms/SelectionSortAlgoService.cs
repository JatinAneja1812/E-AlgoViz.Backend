using AlgorithmsVisualizer.Service.Classes.SortingAlgorithms.SortingAlgorithmsUtility;
using AlgorithmsVisualizer.Service.Interfaces.SortingAlgorithms;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AlgorithmsVisualizer.Service.Classes.SortingAlgorithms
{
    public class SelectionSortAlgoService : SwapArrayElements, ISortingAlgorithm
    {
        private readonly List<object> order = new List<object>();

        public List<object> SortList(List<int> arr)
        {
            List<int> dupArr = new List<int>(arr);

            SelectionSortWorker(dupArr);
            
            for (int i = 0; i < arr.Count; i++)
            {
                order.Add(new object[] { null, null, null, i });
            }
            
            return order;
        }

        private void SelectionSortWorker(List<int> arr)
        {
            int n = arr.Count;

            for (int i = 0; i < n - 1; i++)
            {
                int minIndex = i;

                for (int j = i + 1; j < n; j++)
                {
                    order.Add(new object[] { j, minIndex, null, null });

                    if (arr[j] < arr[minIndex])
                    {
                        minIndex = j;
                    }
                }

                order.Add(new object[] { i, minIndex, null, null });

                arr = Swap(arr, i, minIndex); // Update arr with the swapped result
                
                order.Add(new object[] { i, minIndex, arr.ToArray(), null });
            }
        }
    }
}
