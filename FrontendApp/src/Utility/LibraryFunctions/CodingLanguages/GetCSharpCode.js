export default function GetCSharpCode(title) {
  // Replace this with the actual code generation logic for each algorithm
  let code = "";
 
  switch (title) {
    case "A* Search":
      code = `
      using System;
      using System.Collections.Generic;
      
      class AStar
      {
          static int[] dx = { -1, 0, 1, 0 };
          static int[] dy = { 0, 1, 0, -1 };
          
          static bool IsValid(int x, int y, int[,] grid)
          {
              int n = grid.GetLength(0);
              int m = grid.GetLength(1);
              return x >= 0 && x < n && y >= 0 && y < m && grid[x, y] == 0;
          }
      
          public static List<Tuple<int, int>> FindPath(int[,] grid, Tuple<int, int> start, Tuple<int, int> end)
          {
              int n = grid.GetLength(0);
              int m = grid.GetLength(1);
              int[,] dist = new int[n, m];
              int[,] parentX = new int[n, m];
              int[,] parentY = new int[n, m];
      
              for (int i = 0; i < n; i++)
              {
                  for (int j = 0; j < m; j++)
                  {
                      dist[i, j] = int.MaxValue;
                  }
              }
      
              dist[start.Item1, start.Item2] = 0;
      
              SortedSet<Tuple<int, int, int>> pq = new SortedSet<Tuple<int, int, int>>();
              pq.Add(new Tuple<int, int, int>(0, start.Item1, start.Item2));
      
              while (pq.Count > 0)
              {
                  Tuple<int, int, int> current = pq.Min;
                  pq.Remove(current);
                  int x = current.Item2;
                  int y = current.Item3;
      
                  if (x == end.Item1 && y == end.Item2)
                      break;
      
                  for (int i = 0; i < 4; i++)
                  {
                      int newX = x + dx[i];
                      int newY = y + dy[i];
      
                      if (IsValid(newX, newY, grid))
                      {
                          int newDist = dist[x, y] + 1;
      
                          if (newDist < dist[newX, newY])
                          {
                              pq.Remove(new Tuple<int, int, int>(dist[newX, newY], newX, newY));
                              dist[newX, newY] = newDist;
                              parentX[newX, newY] = x;
                              parentY[newX, newY] = y;
                              pq.Add(new Tuple<int, int, int>(newDist + Manhattan(newX, newY, end), newX, newY));
                          }
                      }
                  }
              }
      
              List<Tuple<int, int>> path = new List<Tuple<int, int>>();
              int curX = end.Item1, curY = end.Item2;
      
              while (curX != start.Item1 || curY != start.Item2)
              {
                  path.Add(new Tuple<int, int>(curX, curY));
                  int tempX = parentX[curX, curY];
                  curY = parentY[curX, curY];
                  curX = tempX;
              }
      
              path.Reverse();
              return path;
          }
      
          static int Manhattan(int x1, int y1, Tuple<int, int> end)
          {
              return Math.Abs(x1 - end.Item1) + Math.Abs(y1 - end.Item2);
          }
      
          public static void Main(string[] args)
          {
              int[,] grid = new int[,]
              {
                  {0, 1, 0, 0, 0, 0},
                  {0, 1, 0, 1, 1, 0},
                  {0, 0, 0, 0, 0, 0},
                  {0, 1, 1, 1, 1, 0},
                  {0, 0, 0, 0, 0, 0}
              };
      
              Tuple<int, int> start = new Tuple<int, int>(0, 0);
              Tuple<int, int> end = new Tuple<int, int>(4, 5);
      
              List<Tuple<int, int>> path = FindPath(grid, start, end);
      
              Console.WriteLine("A* Path:");
              foreach (var point in path)
              {
                  Console.WriteLine($"({point.Item1}, {point.Item2})");
              }
          }
      }`;
      break;
    case "Dijkstra":
      code = `
      using System;
      using System.Collections.Generic;

      class Dijkstra
      {
          public static Dictionary<string, int> FindShortestPath(Dictionary<string, Dictionary<string, int>> graph, string startNode, string endNode)
          {
              Dictionary<string, int> distance = new Dictionary<string, int>();
              foreach (string node in graph.Keys)
              {
                  distance[node] = int.MaxValue;
              }

              distance[startNode] = 0;

              HashSet<string> visitedNodes = new HashSet<string>();
              while (true)
              {
                  string currentNode = null;
                  int currentDistance = int.MaxValue;

                  foreach (var node in graph)
                  {
                      if (!visitedNodes.Contains(node.Key) && distance[node.Key] < currentDistance)
                      {
                          currentNode = node.Key;
                          currentDistance = distance[node.Key];
                      }
                  }

                  if (currentNode == null)
                      break;

                  visitedNodes.Add(currentNode);

                  foreach (var neighbor in graph[currentNode])
                  {
                      int potential = distance[currentNode] + neighbor.Value;
                      if (potential < distance[neighbor.Key])
                      {
                          distance[neighbor.Key] = potential;
                      }
                  }
              }

              return distance;
          }

          public static void Main(string[] args)
          {
              Dictionary<string, Dictionary<string, int>> graph = new Dictionary<string, Dictionary<string, int>>
              {
                  {"A", new Dictionary<string, int> {{"B", 4}, {"C", 2}}},
                  {"B", new Dictionary<string, int> {{"C", 5}, {"D", 10}}},
                  {"C", new Dictionary<string, int> {{"D", 3}}},
                  {"D", new Dictionary<string, int> {}}
              };

              string startNode = "A";
              string endNode = "D";

              Dictionary<string, int> shortestPath = FindShortestPath(graph, startNode, endNode);

              Console.WriteLine("Shortest Path from " + startNode + " to " + endNode + ":");
              foreach (var kvp in shortestPath)
              {
                  Console.WriteLine(kvp.Key + ": " + kvp.Value);
              }
          }
      }`;
      break;
    case "Greedy Best First Search":
      code = `
      using System;
      using System.Collections.Generic;

      class GBFS
      {
          static int[] dx = { -1, 0, 1, 0 };
          static int[] dy = { 0, 1, 0, -1 };

          static bool IsValid(int x, int y, int[,] grid)
          {
              int n = grid.GetLength(0);
              int m = grid.GetLength(1);
              return x >= 0 && x < n && y >= 0 && y < m && grid[x, y] == 0;
          }

          static int Manhattan(int x1, int y1, Tuple<int, int> end)
          {
              return Math.Abs(x1 - end.Item1) + Math.Abs(y1 - end.Item2);
          }

          public static List<Tuple<int, int>> FindPath(int[,] grid, Tuple<int, int> start, Tuple<int, int> end)
          {
              int n = grid.GetLength(0);
              int m = grid.GetLength(1);

              SortedSet<Tuple<int, int, int>> openSet = new SortedSet<Tuple<int, int, int>>(
                  Comparer<Tuple<int, int, int>>.Create((a, b) => a.Item3.CompareTo(b.Item3))
              );

              Dictionary<Tuple<int, int>, Tuple<int, int>> cameFrom = new Dictionary<Tuple<int, int>, Tuple<int, int>>();

              int[,] gScore = new int[n, m];
              for (int i = 0; i < n; i++)
              {
                  for (int j = 0; j < m; j++)
                  {
                      gScore[i, j] = int.MaxValue;
                  }
              }

              gScore[start.Item1, start.Item2] = 0;
              openSet.Add(new Tuple<int, int, int>(start.Item1, start.Item2, Manhattan(start.Item1, start.Item2, end)));

              while (openSet.Count > 0)
              {
                  Tuple<int, int, int> current = openSet.Min;
                  openSet.Remove(current);

                  int x = current.Item1;
                  int y = current.Item2;

                  if (x == end.Item1 && y == end.Item2)
                  {
                      List<Tuple<int, int>> path = new List<Tuple<int, int>>();
                      while (x != start.Item1 || y != start.Item2)
                      {
                          path.Add(new Tuple<int, int>(x, y));
                          var temp = cameFrom[new Tuple<int, int>(x, y)];
                          x = temp.Item1;
                          y = temp.Item2;
                      }
                      path.Add(start);
                      path.Reverse();
                      return path;
                  }

                  for (int i = 0; i < 4; i++)
                  {
                      int newX = x + dx[i];
                      int newY = y + dy[i];

                      if (IsValid(newX, newY, grid))
                      {
                          int tentativeGScore = gScore[x, y] + 1;

                          if (tentativeGScore < gScore[newX, newY])
                          {
                              cameFrom[new Tuple<int, int>(newX, newY)] = new Tuple<int, int>(x, y);
                              gScore[newX, newY] = tentativeGScore;
                              int fScore = tentativeGScore + Manhattan(newX, newY, end);
                              openSet.Add(new Tuple<int, int, int>(newX, newY, fScore));
                          }
                      }
                  }
              }

              return new List<Tuple<int, int>>(); // No path found
          }

          public static void Main(string[] args)
          {
              int[,] grid = new int[,]
              {
                  {0, 1, 0, 0, 0, 0},
                  {0, 1, 0, 1, 1, 0},
                  {0, 0, 0, 0, 0, 0},
                  {0, 1, 1, 1, 1, 0},
                  {0, 0, 0, 0, 0, 0}
              };

              Tuple<int, int> start = new Tuple<int, int>(0, 0);
              Tuple<int, int> end = new Tuple<int, int>(4, 5);

              List<Tuple<int, int>> path = FindPath(grid, start, end);

              Console.WriteLine("GBFS Path:");
              foreach (var point in path)
              {
                  Console.WriteLine($"({point.Item1}, {point.Item2})");
              }
          }
      }`;
      break;
    case "Breath First Search":
      code = `
      using System;
      using System.Collections.Generic;

      class BFS
      {
          static int[] dx = { -1, 0, 1, 0 };
          static int[] dy = { 0, 1, 0, -1 };

          static bool IsValid(int x, int y, int[,] grid)
          {
              int n = grid.GetLength(0);
              int m = grid.GetLength(1);
              return x >= 0 && x < n && y >= 0 && y < m && grid[x, y] == 0;
          }

          public static List<Tuple<int, int>> FindPath(int[,] grid, Tuple<int, int> start, Tuple<int, int> end)
          {
              int n = grid.GetLength(0);
              int m = grid.GetLength(1);

              Queue<Tuple<int, int>> queue = new Queue<Tuple<int, int>>();
              Dictionary<Tuple<int, int>, Tuple<int, int>> cameFrom = new Dictionary<Tuple<int, int>, Tuple<int, int>>();
              bool[,] visited = new bool[n, m];

              queue.Enqueue(start);
              visited[start.Item1, start.Item2] = true;

              while (queue.Count > 0)
              {
                  var current = queue.Dequeue();

                  if (current.Item1 == end.Item1 && current.Item2 == end.Item2)
                  {
                      List<Tuple<int, int>> path = new List<Tuple<int, int>>();
                      while (current != start)
                      {
                          path.Add(current);
                          current = cameFrom[current];
                      }
                      path.Add(start);
                      path.Reverse();
                      return path;
                  }

                  for (int i = 0; i < 4; i++)
                  {
                      int newX = current.Item1 + dx[i];
                      int newY = current.Item2 + dy[i];

                      if (IsValid(newX, newY, grid) && !visited[newX, newY])
                      {
                          queue.Enqueue(new Tuple<int, int>(newX, newY));
                          visited[newX, newY] = true;
                          cameFrom[new Tuple<int, int>(newX, newY)] = current;
                      }
                  }
              }

              return new List<Tuple<int, int>>(); // No path found
          }

          public static void Main(string[] args)
          {
              int[,] grid = new int[,]
              {
                  {0, 1, 0, 0, 0, 0},
                  {0, 1, 0, 1, 1, 0},
                  {0, 0, 0, 0, 0, 0},
                  {0, 1, 1, 1, 1, 0},
                  {0, 0, 0, 0, 0, 0}
              };

              Tuple<int, int> start = new Tuple<int, int>(0, 0);
              Tuple<int, int> end = new Tuple<int, int>(4, 5);

              List<Tuple<int, int>> path = FindPath(grid, start, end);

              Console.WriteLine("BFS Path:");
              foreach (var point in path)
              {
                  Console.WriteLine($"({point.Item1}, {point.Item2})");
              }
          }
      }`;
      break;
    case "Bidirectional Breath First Search":
      code = `
      using System;
      using System.Collections.Generic;
      
      class BidirectionalBFS
      {
          static int[] dx = { -1, 0, 1, 0 };
          static int[] dy = { 0, 1, 0, -1 };
      
          static bool IsValid(int x, int y, int[,] grid)
          {
              int n = grid.GetLength(0);
              int m = grid.GetLength(1);
              return x >= 0 && x < n && y >= 0 && y < m && grid[x, y] == 0;
          }
      
          public static List<Tuple<int, int>> FindPath(int[,] grid, Tuple<int, int> start, Tuple<int, int> end)
          {
              int n = grid.GetLength(0);
              int m = grid.GetLength(1);
      
              Queue<Tuple<int, int>> startQueue = new Queue<Tuple<int, int>>();
              Queue<Tuple<int, int>> endQueue = new Queue<Tuple<int, int>>();
      
              Dictionary<Tuple<int, int>, Tuple<int, int>> startCameFrom = new Dictionary<Tuple<int, int>, Tuple<int, int>>();
              Dictionary<Tuple<int, int>, Tuple<int, int>> endCameFrom = new Dictionary<Tuple<int, int>, Tuple<int, int>>();
      
              bool[,] startVisited = new bool[n, m];
              bool[,] endVisited = new bool[n, m];
      
              startQueue.Enqueue(start);
              startVisited[start.Item1, start.Item2] = true;
      
              endQueue.Enqueue(end);
              endVisited[end.Item1, end.Item2] = true;
      
              while (startQueue.Count > 0 && endQueue.Count > 0)
              {
                  var startCurrent = startQueue.Dequeue();
                  var endCurrent = endQueue.Dequeue();
      
                  if (startVisited[endCurrent.Item1, endCurrent.Item2])
                  {
                      // Paths have met in the middle
                      List<Tuple<int, int>> path = new List<Tuple<int, int>>();
                      var current = endCurrent;
                      while (current != end)
                      {
                          path.Add(current);
                          current = endCameFrom[current];
                      }
                      path.Add(end);
      
                      current = startCurrent;
                      while (current != start)
                      {
                          path.Insert(0, current);
                          current = startCameFrom[current];
                      }
      
                      return path;
                  }
      
                  // Explore neighbors from the start point
                  for (int i = 0; i < 4; i++)
                  {
                      int newX = startCurrent.Item1 + dx[i];
                      int newY = startCurrent.Item2 + dy[i];
      
                      if (IsValid(newX, newY, grid) && !startVisited[newX, newY])
                      {
                          startQueue.Enqueue(new Tuple<int, int>(newX, newY));
                          startVisited[newX, newY] = true;
                          startCameFrom[new Tuple<int, int>(newX, newY)] = startCurrent;
                      }
                  }
      
                  // Explore neighbors from the end point
                  for (int i = 0; i < 4; i++)
                  {
                      int newX = endCurrent.Item1 + dx[i];
                      int newY = endCurrent.Item2 + dy[i];
      
                      if (IsValid(newX, newY, grid) && !endVisited[newX, newY])
                      {
                          endQueue.Enqueue(new Tuple<int, int>(newX, newY));
                          endVisited[newX, newY] = true;
                          endCameFrom[new Tuple<int, int>(newX, newY)] = endCurrent;
                      }
                  }
              }
      
              return new List<Tuple<int, int>>(); // No path found
          }
      
          public static void Main(string[] args)
          {
              int[,] grid = new int[,]
              {
                  {0, 1, 0, 0, 0, 0},
                  {0, 1, 0, 1, 1, 0},
                  {0, 0, 0, 0, 0, 0},
                  {0, 1, 1, 1, 1, 0},
                  {0, 0, 0, 0, 0, 0}
              };
      
              Tuple<int, int> start = new Tuple<int, int>(0, 0);
              Tuple<int, int> end = new Tuple<int, int>(4, 5);
      
              List<Tuple<int, int>> path = FindPath(grid, start, end);
      
              Console.WriteLine("Bidirectional BFS Path:");
              foreach (var point in path)
              {
                  Console.WriteLine($"({point.Item1}, {point.Item2})");
              }
          }
      }`;
      break;
    case "Depth First Search":
      code = `
      using System;
      using System.Collections.Generic;
      
      class DFS
      {
          static int[] dx = { -1, 0, 1, 0 };
          static int[] dy = { 0, 1, 0, -1 };
      
          static bool IsValid(int x, int y, int[,] grid)
          {
              int n = grid.GetLength(0);
              int m = grid.GetLength(1);
              return x >= 0 && x < n && y >= 0 && y < m && grid[x, y] == 0;
          }
      
          public static List<Tuple<int, int>> FindPath(int[,] grid, Tuple<int, int> start, Tuple<int, int> end)
          {
              List<Tuple<int, int>> path = new List<Tuple<int, int>>();
              bool[,] visited = new bool[grid.GetLength(0), grid.GetLength(1)];
      
              if (DFSHelper(grid, start.Item1, start.Item2, end.Item1, end.Item2, visited, path))
              {
                  path.Add(start);
                  path.Reverse();
              }
      
              return path;
          }
      
          static bool DFSHelper(int[,] grid, int x, int y, int targetX, int targetY, bool[,] visited, List<Tuple<int, int>> path)
          {
              if (x == targetX && y == targetY)
                  return true;
      
              visited[x, y] = true;
      
              for (int i = 0; i < 4; i++)
              {
                  int newX = x + dx[i];
                  int newY = y + dy[i];
      
                  if (IsValid(newX, newY, grid) && !visited[newX, newY])
                  {
                      if (DFSHelper(grid, newX, newY, targetX, targetY, visited, path))
                      {
                          path.Add(new Tuple<int, int>(newX, newY));
                          return true;
                      }
                  }
              }
      
              return false;
          }
      
          public static void Main(string[] args)
          {
              int[,] grid = new int[,]
              {
                  {0, 1, 0, 0, 0, 0},
                  {0, 1, 0, 1, 1, 0},
                  {0, 0, 0, 0, 0, 0},
                  {0, 1, 1, 1, 1, 0},
                  {0, 0, 0, 0, 0, 0}
              };
      
              Tuple<int, int> start = new Tuple<int, int>(0, 0);
              Tuple<int, int> end = new Tuple<int, int>(4, 5);
      
              List<Tuple<int, int>> path = FindPath(grid, start, end);
      
              Console.WriteLine("DFS Path:");
              foreach (var point in path)
              {
                  Console.WriteLine($"({point.Item1}, {point.Item2})");
              }
          }
      }`;
      break;
    case "Quick Sort":
      code = `
      public static void QuickSort(int[] arr, int left, int right)
      {
          // Check if there are at least two elements to sort
          if (left < right)
          {
              // Find the pivot index
              int pivotIndex = Partition(arr, left, right);
      
              // Recursively sort the subarrays on the left and right of the pivot
              QuickSort(arr, left, pivotIndex - 1);
              QuickSort(arr, pivotIndex + 1, right);
          }
      }
      
      private static int Partition(int[] arr, int left, int right)
      {
          // Choose the rightmost element as the pivot
          int pivot = arr[right];
          int i = left - 1;
      
          for (int j = left; j < right; j++)
          {
              if (arr[j] < pivot)
              {
                  // Increment the index of smaller elements and swap arr[i] and arr[j]
                  i++;
                  Swap(arr, i, j);
              }
          }
      
          // Swap the pivot element with the element at (i + 1)
          Swap(arr, i + 1, right);
          return i + 1; // Return the index of the pivot element in its sorted position
      }
      
      private static void Swap(int[] arr, int i, int j)
      {
          // Swap two elements in the array
          int temp = arr[i];
          arr[i] = arr[j];
          arr[j] = temp;
      }`;
      break;
    case "Merge Sort":
      code = `
      using System;

      public class MergeSort
      {
          public static void MergeSortFunction(int[] arr)
          {
              if (arr.Length > 1)
              {
                  int mid = arr.Length / 2;
                  int[] left = new int[mid];
                  int[] right = new int[arr.Length - mid];

                  // Populate the left and right subarrays
                  for (int i = 0; i < mid; i++)
                  {
                      left[i] = arr[i];
                  }

                  for (int i = mid; i < arr.Length; i++)
                  {
                      right[i - mid] = arr[i];
                  }

                  // Recursively sort the left and right subarrays
                  MergeSortFunction(left);
                  MergeSortFunction(right);

                  int i = 0, j = 0, k = 0;

                  // Merge the sorted subarrays back into the original array
                  while (i < left.Length && j < right.Length)
                  {
                      if (left[i] < right[j])
                      {
                          arr[k] = left[i];
                          i++;
                      }
                      else
                      {
                          arr[k] = right[j];
                          j++;
                      }
                      k++;
                  }

                  // Copy any remaining elements from the left subarray
                  while (i < left.Length)
                  {
                      arr[k] = left[i];
                      i++;
                      k++;
                  }

                  // Copy any remaining elements from the right subarray
                  while (j < right.Length)
                  {
                      arr[k] = right[j];
                      j++;
                      k++;
                  }
              }
          }

          public static void Main(string[] args)
          {
              int[] arr = { 12, 11, 13, 5, 6, 7 };
              Console.WriteLine("Original array:");
              Console.WriteLine(string.Join(", ", arr));

              MergeSortFunction(arr);

              Console.WriteLine("Sorted array:");
              Console.WriteLine(string.Join(", ", arr));
          }
      }`;
      break;
    case "Heap Sort":
      code = `
      using System;
      
      public class HeapSort
      {
          public static void HeapSortFunction(int[] arr)
          {
              int n = arr.Length;

              // Build a max-heap from the input array
              for (int i = n / 2 - 1; i >= 0; i--)
              {
                  Heapify(arr, n, i);
              }

              // Extract elements from the max-heap one by one
              for (int i = n - 1; i >= 0; i--)
              {
                  // Swap the root (maximum element) with the last element in the array
                  int temp = arr[0];
                  arr[0] = arr[i];
                  arr[i] = temp;

                  // Call heapify on the reduced heap (excluding the sorted elements)
                  Heapify(arr, i, 0);
              }
          }

          private static void Heapify(int[] arr, int n, int i)
          {
              int largest = i;
              int left = 2 * i + 1;
              int right = 2 * i + 2;

              // Check if the left child exists and is greater than the current largest
              if (left < n && arr[left] > arr[largest])
              {
                  largest = left;
              }

              // Check if the right child exists and is greater than the current largest
              if (right < n && arr[right] > arr[largest])
              {
                  largest = right;
              }

              // If the largest is not the current node, swap them and recursively heapify the affected subtree
              if (largest != i)
              {
                  int temp = arr[i];
                  arr[i] = arr[largest];
                  arr[largest] = temp;

                  Heapify(arr, n, largest);
              }
          }
      }`;
      break;
    case "Shell Sort":
      code = `
      using System;
     
      public class ShellSort
      {
          public static void ShellSortFunction(int[] arr)
          {
              int n = arr.Length;
              int gap = n / 2;

              // Start with a large gap and reduce it over time
              while (gap > 0)
              {
                  // Perform insertion sort for elements at each gap
                  for (int i = gap; i < n; i++)
                  {
                      int temp = arr[i];
                      int j = i;

                      // Move elements that are greater than 'temp' by 'gap' positions to the right
                      while (j >= gap && arr[j - gap] > temp)
                      {
                          arr[j] = arr[j - gap];
                          j -= gap;
                      }

                      // Place 'temp' in its correct position
                      arr[j] = temp;
                  }

                  // Reduce the gap for the next iteration
                  gap /= 2;
              }
          }
      }
        `;
      break;
    case "Bubble Sort":
      code = `
      using System;
      
      public class BubbleSort
      {
          public static void BubbleSortFunction(int[] arr)
          {
              int n = arr.Length;
              int temp = 0;

              // Outer loop iterates over each element of the array
              for (int i = 0; i < n - 1; i++)
              {
                  // Inner loop compares adjacent elements and swaps them if they are in the wrong order
                  for (int j = 0; j < n - i - 1; j++)
                  {
                      if (arr[j] > arr[j + 1])
                      {
                          // Swap the elements
                          temp = arr[j];
                          arr[j] = arr[j + 1];
                          arr[j + 1] = temp;
                      }
                  }
              }
          }
      }
        `;
      break;
    case "Selection Sort":
      code = `
      using System;
      
      public class SelectionSort
      {
          public static void SelectionSortFunction(int[] arr)
          {
              int n = arr.Length;

              // Iterate over each element in the array
              for (int i = 0; i < n - 1; i++)
              {
                  // Assume the current index has the minimum value
                  int min_idx = i;

                  // Find the index of the minimum element in the remaining unsorted part of the array
                  for (int j = i + 1; j < n; j++)
                  {
                      if (arr[min_idx] > arr[j])
                      {
                          min_idx = j;
                      }
                  }

                  // Swap the found minimum element with the element at position i
                  int temp = arr[min_idx];
                  arr[min_idx] = arr[i];
                  arr[i] = temp;
              }
          }
      }`;
      break;
    case "Insertion Sort":
      code = `
      using System;
      public class InsertionSort
      {
          public static void InsertionSortFunction(int[] arr)
          {
              int n = arr.Length;

              // Iterate through the array starting from the second element (index 1)
              for (int i = 1; i < n; i++)
              {
                  int key = arr[i];
                  int j = i - 1;

                  // Move elements of arr[0..i-1] that are greater than 'key' one position ahead of their current position
                  while (j >= 0 && key < arr[j])
                  {
                      arr[j + 1] = arr[j];
                      j = j - 1;
                  }

                  // Place 'key' in its correct position
                  arr[j + 1] = key;
              }
          }
      }`;
      break;
    case "Gnome Sort":
      code = `
      using System;
      
      public class GnomeSort
      {
          public static void GnomeSortFunction(int[] arr, int n)
          {
              int index = 0;

              while (index < n)
              {
                  if (index == 0)
                      index++;

                  // Compare adjacent elements and move them back if necessary
                  if (arr[index] >= arr[index - 1])
                      index++;
                  else
                  {
                      // Swap the elements
                      int temp = arr[index];
                      arr[index] = arr[index - 1];
                      arr[index - 1] = temp;
                      index--;
                  }
              }
          }
      }`;
      break;
    case "Shaker Sort":
      code = `
      using System;
     
      public class CocktailShakerSort
      {
          public static void CocktailShakerSortFunction(int[] a)
          {
              int n = a.Length;
              bool swapped = true;
              int start = 0;
              int end = n - 1;

              while (swapped)
              {
                  swapped = false;

                  // Pass through the array from left to right
                  for (int i = start; i < end; i++)
                  {
                      if (a[i] > a[i + 1])
                      {
                          // Swap elements if they are in the wrong order
                          int temp = a[i];
                          a[i] = a[i + 1];
                          a[i + 1] = temp;
                          swapped = true;
                      }
                  }

                  if (!swapped)
                      break;

                  swapped = false;
                  end = end - 1;

                  // Pass through the array from right to left
                  for (int i = end - 1; i >= start; i--)
                  {
                      if (a[i] > a[i + 1])
                      {
                          // Swap elements if they are in the wrong order
                          int temp = a[i];
                          a[i] = a[i + 1];
                          a[i + 1] = temp;
                          swapped = true;
                      }
                  }

                  start = start + 1;
              }
          }
      }`;
      break;
    case "Odd-Even Sort":
      code = `
      using System;

      public static void OddEvenSort(int[] arr)
      {
          bool sorted = false;
          while (!sorted)
          {
              sorted = true;

              // Compare and swap elements at odd indices
              for (int i = 1; i < arr.Length - 1; i += 2)
              {
                  if (arr[i] > arr[i + 1])
                  {
                      // Swap elements
                      int temp = arr[i];
                      arr[i] = arr[i + 1];
                      arr[i + 1] = temp;
                      sorted = false;
                  }
              }

              // Compare and swap elements at even indices
              for (int i = 0; i < arr.Length - 1; i += 2)
              {
                  if (arr[i] > arr[i + 1])
                  {
                      // Swap elements
                      int temp = arr[i];
                      arr[i] = arr[i + 1];
                      arr[i + 1] = temp;
                      sorted = false;
                  }
              }
          }
      }`;
      break;
    case "Pancake Sort":
      code = `
      using System;
      
      public class PancakeSort
      {
          // Function to perform the pancake sorting algorithm
          public static void PancakeSort(int[] arr)
          {
              int n = arr.Length;
              while (n > 1)
              {
                  int maxIndex = FindMaxIndex(arr, n);
                  if (maxIndex != n - 1)
                  {
                      Flip(arr, maxIndex + 1);
                      Flip(arr, n);
                  }
                  n--;
              }
          }

          // Function to flip the elements of the array from index 0 to k
          private static void Flip(int[] arr, int k)
          {
              int left = 0;
              while (left < k)
              {
                  // Swap elements
                  int temp = arr[left];
                  arr[left] = arr[k - 1];
                  arr[k - 1] = temp;
                  k--;
                  left++;
              }
          }

          // Function to find the index of the maximum element in the first k elements of the array
          private static int FindMaxIndex(int[] arr, int k)
          {
              int maxIndex = 0;
              for (int i = 0; i < k; i++)
              {
                  if (arr[i] > arr[maxIndex])
                  {
                      maxIndex = i;
                  }
              }
              return maxIndex;
          }
      }`;
      break;
    case "Radix Sort":
      code = `
      using System;
      
      public class RadixSort
      {
          // Function to perform counting sort based on a specific digit (exp1)
          public static void CountingSort(int[] arr, int exp1)
          {
              int n = arr.Length;
              int[] output = new int[n];
              int[] count = new int[10];

              for (int i = 0; i < n; i++)
              {
                  int index = (arr[i] / exp1);
                  count[index % 10]++;
              }

              for (int i = 1; i < 10; i++)
              {
                  count[i] += count[i - 1];
              }

              for (int i = n - 1; i >= 0; i--)
              {
                  int index = (arr[i] / exp1);
                  output[count[index % 10] - 1] = arr[i];
                  count[index % 10]--;
              }

              for (int i = 0; i < n; i++)
              {
                  arr[i] = output[i];
              }
          }

          // Main Radix Sort function
          public static void Sort(int[] arr)
          {
              int max1 = arr[0];
              for (int i = 1; i < arr.Length; i++)
              {
                  if (arr[i] > max1)
                  {
                      max1 = arr[i];
                  }
              }

              int exp = 1;
              while (max1 / exp > 0)
              {
                  CountingSort(arr, exp);
                  exp *= 10;
              }
          }
      }
        `;
      break;
    case "Cycle Sort":
      code = `
      using System;
      
      public class CycleSort
      {
          public static void CycleSortArray(int[] arr)
          {
              int n = arr.Length;

              // Loop through the array
              for (int cycleStart = 0; cycleStart < n - 1; cycleStart++)
              {
                  int item = arr[cycleStart];
                  int pos = cycleStart;

                  // Find the correct position for the current item
                  for (int i = cycleStart + 1; i < n; i++)
                  {
                      if (arr[i] < item)
                      {
                          pos++;
                      }
                  }

                  // If the item is already in the correct position, continue to the next cycle
                  if (pos == cycleStart)
                  {
                      continue;
                  }

                  // Swap the item to its correct position
                  while (item == arr[pos])
                  {
                      pos++;
                  }
                  int temp = arr[pos];
                  arr[pos] = item;
                  item = temp;

                  // Continue cycling until we return to the starting point of this cycle
                  while (pos != cycleStart)
                  {
                      pos = cycleStart;
                      for (int i = cycleStart + 1; i < n; i++)
                      {
                          if (arr[i] < item)
                          {
                              pos++;
                          }
                      }
                      while (item == arr[pos])
                      {
                          pos++;
                      }
                      temp = arr[pos];
                      arr[pos] = item;
                      item = temp;
                  }
              }
          }
      }`;
      break;
    case "Bitonic Sort":
      code = `
      using System;
      public class BitonicSort
      {
          public static void BitonicSortArray(int[] arr)
          {
              int n = arr.Length;
              for (int k = 2; k <= n; k *= 2)
              {
                  for (int j = k / 2; j > 0; j /= 2)
                  {
                      for (int i = 0; i < n; i++)
                      {
                          int l = i ^ j; // Calculate the index of the element in the other half of the subarray

                          // Compare and swap elements based on Bitonic order
                          if (l > i)
                          {
                              if (((i & k) == 0 && arr[i] > arr[l]) || ((i & k) != 0 && arr[i] < arr[l]))
                              {
                                  int temp = arr[i];
                                  arr[i] = arr[l];
                                  arr[l] = temp;
                              }
                          }
                      }
                  }
              }
          }
      }`;
      break;
    case "Tim Sort":
      code = `
      using System;

      public class TimSort
      {
          private const int MIN_MERGE = 32;

          // Function to find the minimum run length
          private static int CalcMinRun(int n)
          {
              int r = 0;
              while (n >= MIN_MERGE)
              {
                  r |= (n & 1);
                  n >>= 1;
              }
              return n + r;
          }

          // Function to reverse an array slice
          private static void ReverseSlice(int[] arr, int start, int end)
          {
              end--;
              while (start < end)
              {
                  int temp = arr[start];
                  arr[start] = arr[end];
                  arr[end] = temp;
                  start++;
                  end--;
              }
          }

          // Insertion sort for small runs
          private static void InsertionSort(int[] arr, int left, int right)
          {
              for (int i = left + 1; i <= right; i++)
              {
                  int key = arr[i];
                  int j = i - 1;
                  while (j >= left && arr[j] > key)
                  {
                      arr[j + 1] = arr[j];
                      j--;
                  }
                  arr[j + 1] = key;
              }
          }

          // Merge two runs
          private static void Merge(int[] arr, int l, int m, int r)
          {
              int len1 = m - l + 1;
              int len2 = r - m;
              int[] left = new int[len1];
              int[] right = new int[len2];

              for (int i = 0; i < len1; i++)
              {
                  left[i] = arr[l + i];
              }
              for (int i = 0; i < len2; i++)
              {
                  right[i] = arr[m + 1 + i];
              }

              int x = 0, y = 0, z = l;

              while (x < len1 && y < len2)
              {
                  if (left[x] <= right[y])
                  {
                      arr[z] = left[x];
                      x++;
                  }
                  else
                  {
                      arr[z] = right[y];
                      y++;
                  }
                  z++;
              }

              while (x < len1)
              {
                  arr[z] = left[x];
                  x++;
                  z++;
              }

              while (y < len2)
              {
                  arr[z] = right[y];
                  y++;
                  z++;
              }
          }

          // Main Tim Sort function
          public static void TimSort(int[] arr)
          {
              int n = arr.Length;
              int minRun = CalcMinRun(n);

              for (int i = 0; i < n; i += minRun)
              {
                  InsertionSort(arr, i, Math.Min(i + minRun - 1, n - 1));
              }

              for (int size = minRun; size < n; size *= 2)
              {
                  for (int left = 0; left < n; left += 2 * size)
                  {
                      int mid = Math.Min(left + size - 1, n - 1);
                      int right = Math.Min(left + 2 * size - 1, n - 1);
                      if (mid < right)
                      {
                          Merge(arr, left, mid, right);
                      }
                  }
              }
          }
      }
        `;
      break;
    case "Cube Sort":
      code = `
      using System;

      public class CubeSort
      {
          public static void CubeSortArray(int[] arr)
          {
              int n = arr.Length;
              int cubeSize = (int)Math.Ceiling(Math.Pow(n, 1.0 / 3.0)); // Cube size is the cube root of the array size rounded up

              // Function to sort a cube using any sorting algorithm (e.g., Array.Sort)
              void SortCube(int[] cube)
              {
                  Array.Sort(cube);
              }

              for (int i = 0; i < n; i += cubeSize)
              {
                  int endIndex = Math.Min(i + cubeSize, n);
                  int[] cube = new int[endIndex - i];
                  Array.Copy(arr, i, cube, 0, cube.Length); // Extract a cube
                  SortCube(cube); // Sort the cube
                  Array.Copy(cube, 0, arr, i, cube.Length); // Put the sorted cube back into the array
              }
          }
      }`;
      break;
    case "Bogo Sort":
      code = `
      using System;

      public class BogoSort
      {
          public static void BogoSortArray(int[] arr)
          {
              while (!IsSorted(arr))
              {
                  Shuffle(arr);
              }
          }

          private static bool IsSorted(int[] arr)
          {
              int n = arr.Length;
              for (int i = 0; i < n - 1; i++)
              {
                  if (arr[i] > arr[i + 1])
                  {
                      return false;
                  }
              }
              return true;
          }

          private static void Shuffle(int[] arr)
          {
              Random random = new Random();
              int n = arr.Length;
              for (int i = 0; i < n; i++)
              {
                  int r = random.Next(0, n);
                  int temp = arr[i];
                  arr[i] = arr[r];
                  arr[r] = temp;
              }
          }
      }`;
      break;
    case "Binary Search Tree Preorder Traversal":
      code = `
        using System;

        // Define a Node class representing binary tree nodes
        class Node {
            public int key;
            public Node left, right;
        
            public Node(int item) {
                key = item;
                left = right = null;
            }
        }
        
        class BinaryTree {
        
            // Root of Binary Tree
            Node root;
        
            BinaryTree() {
                root = null;
            }
        
            // Preorder traversal: Node, Left, Right
            void PrintPreorder(Node node) {
                if (node == null)
                    return;
        
                // Visit and print the current node
                Console.Write(node.key + " ");
        
                // Recur on the left subtree
                PrintPreorder(node.left);
        
                // Recur on the right subtree
                PrintPreorder(node.right);
            }
        
            static public void Main(String[] args) {
                BinaryTree tree = new BinaryTree();
        
                // Create a binary tree with sample nodes
                tree.root = new Node(1);
                tree.root.left = new Node(2);
                tree.root.right = new Node(3);
                tree.root.left.left = new Node(4);
                tree.root.left.right = new Node(5);
        
                // Print the preorder traversal of the binary tree
                Console.WriteLine("Preorder traversal of binary tree:");
                tree.PrintPreorder(tree.root);
            }
        }
        `;
      break;
    case "Binary Search Tree Postorder Traversal":
      code = `
        using System;

        // Define a class representing binary tree nodes
        class Node {
            public int key;
            public Node left, right;
        
            public Node(int item) {
                key = item;
                left = right = null;
            }
        }
        
        class BinaryTree {
            // Root of Binary Tree
            Node root;
        
            BinaryTree() {
                root = null;
            }
        
            // Function to print nodes in a "bottom-up" postorder traversal
            void PrintPostorder(Node node) {
                if (node == null)
                    return;
        
                // Recur on the left subtree
                PrintPostorder(node.left);
        
                // Recur on the right subtree
                PrintPostorder(node.right);
        
                // Process the current node (print its key)
                Console.Write(node.key + " ");
            }
        
            // Driver code
            static public void Main(String[] args) {
                BinaryTree tree = new BinaryTree();
        
                // Create a binary tree with sample nodes
                tree.root = new Node(1);
                tree.root.left = new Node(2);
                tree.root.right = new Node(3);
                tree.root.left.left = new Node(4);
                tree.root.left.right = new Node(5);
        
                // Print the postorder traversal of the binary tree
                Console.WriteLine("Postorder traversal of binary tree:");
                tree.PrintPostorder(tree.root);
            }
        }
      `;
      break;
    case "Binary Search Tree Inorder Traversal":
      code = `
        using System;

        // Define a class representing binary tree nodes
        class Node {
            public int key;
            public Node left, right;
        
            public Node(int item) {
                key = item;
                left = right = null;
            }
        }
        
        class BinaryTree {
        
            // Root of Binary Tree
            Node root;
        
            BinaryTree() {
                root = null;
            }
        
            // Function to print nodes in an inorder traversal
            void PrintInorder(Node node) {
                if (node == null)
                    return;
        
                // Recur on the left child
                PrintInorder(node.left);
        
                // Process the current node (print its key)
                Console.Write(node.key + " ");
        
                // Recur on the right child
                PrintInorder(node.right);
            }
        
            // Wrapper function for the above recursive method
            void PrintInorder() { PrintInorder(root); }
        
            // Driver code
            static public void Main(String[] args) {
                BinaryTree tree = new BinaryTree();
        
                // Create a binary tree with sample nodes
                tree.root = new Node(1);
                tree.root.left = new Node(2);
                tree.root.right = new Node(3);
                tree.root.left.left = new Node(4);
                tree.root.left.right = new Node(5);
        
                // Print the inorder traversal of the binary tree
                Console.WriteLine("Inorder traversal of binary tree:");
                tree.PrintInorder();
            }
        }
      `;
      break;
    case "Sieve of Eratosthenes":
      code = `
      using System;
      using System.Collections.Generic;
      
      class SieveOfEratosthenes
      {
          static void Main()
          {
              Console.Write("Enter the upper limit to find prime numbers up to: ");
              int upperLimit = int.Parse(Console.ReadLine());
      
              List<bool> isPrime = new List<bool>(upperLimit + 1);
      
              InitializeSieve(isPrime);
              PerformSieve(isPrime);
      
              Console.WriteLine("Prime numbers up to " + upperLimit + ":");
              PrintPrimes(isPrime);
          }
      
          // Initialize the sieve list, assuming all numbers are prime initially.
          static void InitializeSieve(List<bool> isPrime)
          {
              for (int i = 0; i < isPrime.Capacity; i++)
              {
                  isPrime.Add(true);
              }
      
              isPrime[0] = isPrime[1] = false; // 0 and 1 are not prime.
          }
      
          // Perform the Sieve of Eratosthenes algorithm.
          static void PerformSieve(List<bool> isPrime)
          {
              for (int current = 2; current * current <= isPrime.Count; current++)
              {
                  if (isPrime[current])
                  {
                      for (int multiple = current * current; multiple < isPrime.Count; multiple += current)
                      {
                          isPrime[multiple] = false;
                      }
                  }
              }
          }
      
          // Print the prime numbers found by the sieve.
          static void PrintPrimes(List<bool> isPrime)
          {
              for (int i = 0; i < isPrime.Count; i++)
              {
                  if (isPrime[i])
                  {
                      Console.Write(i + " ");
                  }
              }
              Console.WriteLine();
          }
      }
      `;
      break;
    default:
      code = "Algorithm not supported";
  }

  return code;
}
