export default function GetJavaCode(title) {
  // Replace this with the actual code generation logic for each algorithm
  let code = "";

  switch (title) {
    case "A* Search":
      code = `
        import java.util.*;

        class AStar 
        {
            static int[] dx = {-1, 0, 1, 0};
            static int[] dy = {0, 1, 0, -1};

            static boolean isValid(int x, int y, int[][] grid) {
                int n = grid.length;
                int m = grid[0].length;
                return x >= 0 && x < n && y >= 0 && y < m && grid[x][y] == 0;
            }

            static int manhattan(int x1, int y1, int[] end) {
                return Math.abs(x1 - end[0]) + Math.abs(y1 - end[1]);
            }

            public static List<int[]> findPath(int[][] grid, int[] start, int[] end) {
                int n = grid.length;
                int m = grid[0].length;
                int[][] dist = new int[n][m];
                int[][] parentX = new int[n][m];
                int[][] parentY = new int[n][m];

                for (int i = 0; i < n; i++) {
                    Arrays.fill(dist[i], Integer.MAX_VALUE);
                }

                dist[start[0]][start[1]] = 0;

                PriorityQueue<int[]> pq = new PriorityQueue<>((a, b) -> (dist[a[0]][a[1]] + manhattan(a[0], a[1], end))
                        - (dist[b[0]][b[1]] + manhattan(b[0], b[1], end)));

                pq.offer(start);

                while (!pq.isEmpty()) {
                    int[] current = pq.poll();
                    int x = current[0];
                    int y = current[1];

                    if (x == end[0] && y == end[1]) {
                        break;
                    }

                    for (int i = 0; i < 4; i++) {
                        int newX = x + dx[i];
                        int newY = y + dy[i];

                        if (isValid(newX, newY, grid)) {
                            int newDist = dist[x][y] + 1;

                            if (newDist < dist[newX][newY]) {
                                pq.remove(new int[]{newX, newY});
                                dist[newX][newY] = newDist;
                                parentX[newX][newY] = x;
                                parentY[newX][newY] = y;
                                pq.offer(new int[]{newX, newY});
                            }
                        }
                    }
                }

                List<int[]> path = new ArrayList<>();
                int curX = end[0], curY = end[1];

                while (curX != start[0] || curY != start[1]) {
                    path.add(new int[]{curX, curY});
                    int tempX = parentX[curX][curY];
                    curY = parentY[curX][curY];
                    curX = tempX;
                }

                Collections.reverse(path);
                return path;
            }

            public static void main(String[] args) {
                int[][] grid = {
                    {0, 1, 0, 0, 0, 0},
                    {0, 1, 0, 1, 1, 0},
                    {0, 0, 0, 0, 0, 0},
                    {0, 1, 1, 1, 1, 0},
                    {0, 0, 0, 0, 0, 0}
                };

                int[] start = {0, 0};
                int[] end = {4, 5};

                List<int[]> path = findPath(grid, start, end);

                System.out.println("A* Path:");
                for (int[] point : path) {
                    System.out.println("(" + point[0] + ", " + point[1] + ")");
                }
            }
        } `;
      break;
    case "Dijkstra":
      code = `
        import java.util.*;

        class Dijkstra {
            public static Map<String, Integer> findShortestPath(Map<String, Map<String, Integer>> graph, String startNode, String endNode) {
                Map<String, Integer> distance = new HashMap<>();
                for (String node : graph.keySet()) {
                    distance.put(node, Integer.MAX_VALUE);
                }

                distance.put(startNode, 0);

                Set<String> visitedNodes = new HashSet<>();
                while (true) {
                    String currentNode = null;
                    int currentDistance = Integer.MAX_VALUE;

                    for (Map.Entry<String, Integer> entry : distance.entrySet()) {
                        if (!visitedNodes.contains(entry.getKey()) && entry.getValue() < currentDistance) {
                            currentNode = entry.getKey();
                            currentDistance = entry.getValue();
                        }
                    }

                    if (currentNode == null)
                        break;

                    visitedNodes.add(currentNode);

                    for (Map.Entry<String, Integer> neighbor : graph.get(currentNode).entrySet()) {
                        int potential = distance.get(currentNode) + neighbor.getValue();
                        if (potential < distance.get(neighbor.getKey())) {
                            distance.put(neighbor.getKey(), potential);
                        }
                    }
                }

                return distance;
            }

            public static void main(String[] args) {
                Map<String, Map<String, Integer>> graph = new HashMap<>();
                graph.put("A", new HashMap<String, Integer>() {{
                    put("B", 4);
                    put("C", 2);
                }});
                graph.put("B", new HashMap<String, Integer>() {{
                    put("C", 5);
                    put("D", 10);
                }});
                graph.put("C", new HashMap<String, Integer>() {{
                    put("D", 3);
                }});
                graph.put("D", new HashMap<String, Integer>());

                String startNode = "A";
                String endNode = "D";

                Map<String, Integer> shortestPath = findShortestPath(graph, startNode, endNode);

                System.out.println("Shortest Path from " + startNode + " to " + endNode + ":");
                for (Map.Entry<String, Integer> entry : shortestPath.entrySet()) {
                    System.out.println(entry.getKey() + ": " + entry.getValue());
                }
            }
        }`;
      break;
    case "Greedy Best First Search":
      code = `
      import java.util.*;

      class GBFS {
          static int[] dx = {-1, 0, 1, 0};
          static int[] dy = {0, 1, 0, -1};
      
          static boolean isValid(int x, int y, int[][] grid) {
              int n = grid.length;
              int m = grid[0].length;
              return x >= 0 && x < n && y >= 0 && y < m && grid[x][y] == 0;
          }
      
          static int manhattan(int x1, int y1, int[] end) {
              return Math.abs(x1 - end[0]) + Math.abs(y1 - end[1]);
          }
      
          public static List<int[]> findPath(int[][] grid, int[] start, int[] end) {
              int n = grid.length;
              int m = grid[0].length;
      
              PriorityQueue<int[]> openSet = new PriorityQueue<>(Comparator.comparingInt(a -> a[2]));
      
              Map<String, int[]> cameFrom = new HashMap<>();
              Map<String, Integer> gScore = new HashMap<>();
      
              for (int i = 0; i < n; i++) {
                  for (int j = 0; j < m; j++) {
                      gScore.put(i + "," + j, Integer.MAX_VALUE);
                  }
              }
      
              gScore.put(start[0] + "," + start[1], 0);
      
              openSet.offer(new int[]{start[0], start[1], manhattan(start[0], start[1], end)});
      
              while (!openSet.isEmpty()) {
                  int[] current = openSet.poll();
                  int x = current[0];
                  int y = current[1];
      
                  if (x == end[0] && y == end[1]) {
                      List<int[]> path = new ArrayList<>();
                      while (x != start[0] || y != start[1]) {
                          path.add(new int[]{x, y});
                          int[] temp = cameFrom.get(x + "," + y);
                          x = temp[0];
                          y = temp[1];
                      }
                      path.add(start);
                      Collections.reverse(path);
                      return path;
                  }
      
                  for (int i = 0; i < 4; i++) {
                      int newX = x + dx[i];
                      int newY = y + dy[i];
      
                      if (isValid(newX, newY, grid)) {
                          int tentativeGScore = gScore.get(x + "," + y) + 1;
      
                          if (tentativeGScore < gScore.getOrDefault(newX + "," + newY, Integer.MAX_VALUE)) {
                              cameFrom.put(newX + "," + newY, new int[]{x, y});
                              gScore.put(newX + "," + newY, tentativeGScore);
                              int fScore = tentativeGScore + manhattan(newX, newY, end);
                              openSet.offer(new int[]{newX, newY, fScore});
                          }
                      }
                  }
              }
      
              return new ArrayList<>(); // No path found
          }
      
          public static void main(String[] args) {
              int[][] grid = {
                  {0, 1, 0, 0, 0, 0},
                  {0, 1, 0, 1, 1, 0},
                  {0, 0, 0, 0, 0, 0},
                  {0, 1, 1, 1, 1, 0},
                  {0, 0, 0, 0, 0, 0}
              };
      
              int[] start = {0, 0};
              int[] end = {4, 5};
      
              List<int[]> path = findPath(grid, start, end);
      
              System.out.println("GBFS Path:");
              for (int[] point : path) {
                  System.out.println("(" + point[0] + ", " + point[1] + ")");
              }
          }
      }`;
      break;
    case "Breath First Search":
      code = `
      import java.util.*;

      class BFS {
          static int[] dx = {-1, 0, 1, 0};
          static int[] dy = {0, 1, 0, -1};
      
          static boolean isValid(int x, int y, int[][] grid) {
              int n = grid.length;
              int m = grid[0].length;
              return x >= 0 && x < n && y >= 0 && y < m && grid[x][y] == 0;
          }
      
          public static List<int[]> findPath(int[][] grid, int[] start, int[] end) {
              int n = grid.length;
              int m = grid[0].length;
      
              Queue<int[]> queue = new LinkedList<>();
              Map<String, int[]> cameFrom = new HashMap<>();
              boolean[][] visited = new boolean[n][m];
      
              queue.offer(start);
              visited[start[0]][start[1]] = true;
      
              while (!queue.isEmpty()) {
                  int[] current = queue.poll();
      
                  if (current[0] == end[0] && current[1] == end[1]) {
                      List<int[]> path = new ArrayList<>();
                      while (!Arrays.equals(current, start)) {
                          path.add(current);
                          current = cameFrom.get(Arrays.toString(current));
                      }
                      path.add(start);
                      Collections.reverse(path);
                      return path;
                  }
      
                  for (int i = 0; i < 4; i++) {
                      int newX = current[0] + dx[i];
                      int newY = current[1] + dy[i];
      
                      if (isValid(newX, newY, grid) && !visited[newX][newY]) {
                          queue.offer(new int[]{newX, newY});
                          visited[newX][newY] = true;
                          cameFrom.put(Arrays.toString(new int[]{newX, newY}), current);
                      }
                  }
              }
      
              return new ArrayList<>(); // No path found
          }
      
          public static void main(String[] args) {
              int[][] grid = {
                  {0, 1, 0, 0, 0, 0},
                  {0, 1, 0, 1, 1, 0},
                  {0, 0, 0, 0, 0, 0},
                  {0, 1, 1, 1, 1, 0},
                  {0, 0, 0, 0, 0, 0}
              };
      
              int[] start = {0, 0};
              int[] end = {4, 5};
      
              List<int[]> path = findPath(grid, start, end);
      
              System.out.println("BFS Path:");
              for (int[] point : path) {
                  System.out.println("(" + point[0] + ", " + point[1] + ")");
              }
          }
      }`;
      break;
    case "Bidirectional Breath First Search":
      code = `
      import java.util.*;

      class BidirectionalBFS {
          static int[] dx = {-1, 0, 1, 0};
          static int[] dy = {0, 1, 0, -1};
      
          static boolean isValid(int x, int y, int[][] grid) {
              int n = grid.length;
              int m = grid[0].length;
              return x >= 0 && x < n && y >= 0 && y < m && grid[x][y] == 0;
          }
      
          public static List<int[]> findPath(int[][] grid, int[] start, int[] end) {
              int n = grid.length;
              int m = grid[0].length;
      
              Queue<int[]> startQueue = new LinkedList<>();
              Queue<int[]> endQueue = new LinkedList<>();
      
              Map<String, int[]> startCameFrom = new HashMap<>();
              Map<String, int[]> endCameFrom = new HashMap<>();
      
              boolean[][] startVisited = new boolean[n][m];
              boolean[][] endVisited = new boolean[n][m];
      
              startQueue.offer(start);
              startVisited[start[0]][start[1]] = true;
      
              endQueue.offer(end);
              endVisited[end[0]][end[1]] = true;
      
              while (!startQueue.isEmpty() && !endQueue.isEmpty()) {
                  int[] startCurrent = startQueue.poll();
                  int[] endCurrent = endQueue.poll();
      
                  if (startVisited[endCurrent[0]][endCurrent[1]]) {
                      // Paths have met in the middle
                      List<int[]> path = new ArrayList<>();
                      int[] current = endCurrent;
                      while (!Arrays.equals(current, end)) {
                          path.add(current);
                          current = endCameFrom.get(Arrays.toString(current));
                      }
                      path.add(end);
      
                      current = startCurrent;
                      while (!Arrays.equals(current, start)) {
                          path.add(0, current);
                          current = startCameFrom.get(Arrays.toString(current));
                      }
      
                      return path;
                  }
      
                  // Explore neighbors from the start point
                  for (int i = 0; i < 4; i++) {
                      int newX = startCurrent[0] + dx[i];
                      int newY = startCurrent[1] + dy[i];
      
                      if (isValid(newX, newY, grid) && !startVisited[newX][newY]) {
                          startQueue.offer(new int[]{newX, newY});
                          startVisited[newX][newY] = true;
                          startCameFrom.put(Arrays.toString(new int[]{newX, newY}), startCurrent);
                      }
                  }
      
                  // Explore neighbors from the end point
                  for (int i = 0; i < 4; i++) {
                      int newX = endCurrent[0] + dx[i];
                      int newY = endCurrent[1] + dy[i];
      
                      if (isValid(newX, newY, grid) && !endVisited[newX][newY]) {
                          endQueue.offer(new int[]{newX, newY});
                          endVisited[newX][newY] = true;
                          endCameFrom.put(Arrays.toString(new int[]{newX, newY}), endCurrent);
                      }
                  }
              }
      
              return new ArrayList<>(); // No path found
          }
      
          public static void main(String[] args) {
              int[][] grid = {
                  {0, 1, 0, 0, 0, 0},
                  {0, 1, 0, 1, 1, 0},
                  {0, 0, 0, 0, 0, 0},
                  {0, 1, 1, 1, 1, 0},
                  {0, 0, 0, 0, 0, 0}
              };
      
              int[] start = {0, 0};
              int[] end = {4, 5};
      
              List<int[]> path = findPath(grid, start, end);
      
              System.out.println("Bidirectional BFS Path:");
              for (int[] point : path) {
                  System.out.println("(" + point[0] + ", " + point[1] + ")");
              }
          }
      }`;
      break;
    case "Depth First Search":
      code = `
      import java.util.*;

      class DFS {
          static int[] dx = {-1, 0, 1, 0};
          static int[] dy = {0, 1, 0, -1};
      
          static boolean isValid(int x, int y, int[][] grid) {
              int n = grid.length;
              int m = grid[0].length;
              return x >= 0 && x < n && y >= 0 && y < m && grid[x][y] == 0;
          }
      
          public static List<int[]> findPath(int[][] grid, int[] start, int[] end) {
              List<int[]> path = new ArrayList<>();
              boolean[][] visited = new boolean[grid.length][grid[0].length];
      
              if (dfsHelper(grid, start[0], start[1], end[0], end[1], visited, path)) {
                  path.add(start);
                  Collections.reverse(path);
              }
      
              return path;
          }
      
          static boolean dfsHelper(int[][] grid, int x, int y, int targetX, int targetY, boolean[][] visited, List<int[]> path) {
              if (x == targetX && y == targetY) {
                  return true;
              }
      
              visited[x][y] = true;
      
              for (int i = 0; i < 4; i++) {
                  int newX = x + dx[i];
                  int newY = y + dy[i];
      
                  if (isValid(newX, newY, grid) && !visited[newX][newY]) {
                      if (dfsHelper(grid, newX, newY, targetX, targetY, visited, path)) {
                          path.add(new int[]{newX, newY});
                          return true;
                      }
                  }
              }
      
              return false;
          }
      
          public static void main(String[] args) {
              int[][] grid = {
                  {0, 1, 0, 0, 0, 0},
                  {0, 1, 0, 1, 1, 0},
                  {0, 0, 0, 0, 0, 0},
                  {0, 1, 1, 1, 1, 0},
                  {0, 0, 0, 0, 0, 0}
              };
      
              int[] start = {0, 0};
              int[] end = {4, 5};
      
              List<int[]> path = findPath(grid, start, end);
      
              System.out.println("DFS Path:");
              for (int[] point : path) {
                  System.out.println("(" + point[0] + ", " + point[1] + ")");
              }
          }
      }`;
      break;
    case "Quick Sort":
      code = `
      public void quickSort(int[] array, int start, int end) 
      {
        if (start < end) {
            int partitionIndex = partition(array, start, end);
    
            // Recursively sort the left and right subarrays.
            quickSort(array, start, partitionIndex - 1);
            quickSort(array, partitionIndex + 1, end);
        }
      }
      
      private int partition(int[] array, int start, int end) 
      {
          int pivot = array[end];
          int i = (start - 1);
      
          // Partition the array into elements less than or equal to the pivot (left) and greater than the pivot (right).
          for (int j = start; j < end; j++) {
              if (array[j] <= pivot) {
                  i++;
      
                  // Swap array[i] and array[j].
                  int temp = array[i];
                  array[i] = array[j];
                  array[j] = temp;
              }
          }
      
          // Swap pivot element (array[end]) with the element at index (i + 1).
          int temp = array[i + 1];
          array[i + 1] = array[end];
          array[end] = temp;
      
          // Return the index of the pivot element in its sorted position.
          return i + 1;
      }`;
      break;
    case "Merge Sort":
      code = `
      void merge(int arr[], int l, int m, int r) 
      {
          int n1 = m - l + 1;
          int n2 = r - m;
      
          // Create temporary arrays to hold the left and right subarrays
          int L[n1];
          int R[n2];
      
          // Copy data to the temporary arrays L[] and R[]
          for (int i = 0; i < n1; ++i)
              L[i] = arr[l + i];
          for (int j = 0; j < n2; ++j)
              R[j] = arr[m + 1 + j];
      
          int i = 0, j = 0, k = l;
      
          // Merge the two sorted subarrays back into the original array
          while (i < n1 && j < n2) {
              if (L[i] <= R[j]) {
                  arr[k] = L[i];
                  i++;
              }
              else {
                  arr[k] = R[j];
                  j++;
              }
              k++;
          }
      
          // Copy any remaining elements from the left subarray
          while (i < n1) {
              arr[k] = L[i];
              i++;
              k++;
          }
      
          // Copy any remaining elements from the right subarray
          while (j < n2) {
              arr[k] = R[j];
              j++;
              k++;
          }
      }
      
      void sort(int arr[], int l, int r) {
          if (l < r) {
              int m = l + (r - l) / 2;
      
              // Recursively sort the left and right halves
              sort(arr, l, m);
              sort(arr, m + 1, r);
      
              // Merge the two sorted halves
              merge(arr, l, m, r);
          }
      }`;
      break;
    case "Heap Sort":
      code = `
      public void sort(int arr[]) 
      {
          int n = arr.length;
      
          // Build a max-heap from the input array
          for (int i = n / 2 - 1; i >= 0; i--) {
              heapify(arr, n, i);
          }
      
          // Extract elements from the max-heap one by one
          for (int i = n - 1; i >= 0; i--) {
              // Swap the root (maximum element) with the last element in the array
              int temp = arr[0];
              arr[0] = arr[i];
              arr[i] = temp;
      
              // Call heapify on the reduced heap (excluding the sorted elements)
              heapify(arr, i, 0);
          }
      }
      
      void heapify(int arr[], int n, int i) {
          int largest = i;
          int left = 2 * i + 1;
          int right = 2 * i + 2;
      
          // Check if the left child is larger than the current largest
          if (left < n && arr[left] > arr[largest])
              largest = left;
      
          // Check if the right child is larger than the current largest
          if (right < n && arr[right] > arr[largest])
              largest = right;
      
          // If the largest is not the current node, swap them and recursively heapify the affected subtree
          if (largest != i) {
              int swap = arr[i];
              arr[i] = arr[largest];
              arr[largest] = swap;
      
              heapify(arr, n, largest);
          }
      }`;
      break;
    case "Shell Sort":
      code = `
      void shellSort(int arr[]) 
      {
          int n = arr.length;
      
          // Start with a large gap and reduce it over time
          for (int gap = n / 2; gap > 0; gap /= 2) {
              // Perform insertion sort for elements at each gap
              for (int i = gap; i < n; i++) {
                  int temp = arr[i];
      
                  // Move elements that are greater than temp by gap positions to the right
                  int j;
                  for (j = i; j >= gap && arr[j - gap] > temp; j -= gap) {
                      arr[j] = arr[j - gap];
                  }
      
                  // Place temp in its correct position
                  arr[j] = temp;
              }
          }
      }
        `;
      break;
    case "Bubble Sort":
      code = `
      static void bubbleSort(int[] arr) {
          int n = arr.length;
          int temp = 0;
      
          // Outer loop iterates over each element of the array
          for (int i = 0; i < n; i++) {
              // Inner loop compares adjacent elements and swaps them if they are in the wrong order
              for (int j = 1; j < (n - i); j++) {
                  if (arr[j - 1] > arr[j]) {
                      temp = arr[j - 1];
                      arr[j - 1] = arr[j];
                      arr[j] = temp;
                  }
              }
          }
      }`;
      break;
    case "Selection Sort":
      code = `
      void selectionSort(int arr[]) 
      {
          int n = arr.length;
      
          for (int i = 0; i < n - 1; i++) {
              // Assume the current index has the minimum value
              int min_idx = i;
      
              // Find the index of the minimum element in the remaining unsorted part of the array
              for (int j = i + 1; j < n; j++) {
                  if (arr[j] < arr[min_idx]) {
                      min_idx = j;
                  }
              }
      
              // Swap the found minimum element with the element at position i
              int temp = arr[min_idx];
              arr[min_idx] = arr[i];
              arr[i] = temp;
          }
      }
        `;
      break;
    case "Insertion Sort":
      code = `
      void insertionSort(int arr[]) {
          int n = arr.length;
          
          // Iterate through the array starting from the second element (index 1)
          for (int i = 1; i < n; ++i) {
              int key = arr[i];
              int j = i - 1;
      
              // Move elements of arr[0..i-1] that are greater than 'key' one position ahead of their current position
              while (j >= 0 && arr[j] > key) {
                  arr[j + 1] = arr[j];
                  j = j - 1;
              }
      
              // Place 'key' in its correct position
              arr[j + 1] = key;
          }
      }`;
      break;
    case "Gnome Sort":
      code = `
      public void gnomeSort(int arr[], int n) {
          int index = 0;
      
          while (index < n) {
              if (index == 0)
                  index++;
              
              // Compare adjacent elements and move them back if necessary
              if (arr[index] >= arr[index - 1])
                  index++;
              else {
                  int temp = arr[index];
                  arr[index] = arr[index - 1];
                  arr[index - 1] = temp;
                  index--;
              }
          }
      }`;
      break;
    case "Shaker Sort":
      code = `
      void cocktailSort(int a[]) 
      {
        boolean swapped = true;
        int start = 0;
        int end = a.length;
    
        while (swapped == true) {
            swapped = false;
    
            // Pass through the array from left to right
            for (int i = start; i < end - 1; ++i) {
                if (a[i] > a[i + 1]) {
                    // Swap elements if they are in the wrong order
                    int temp = a[i];
                    a[i] = a[i + 1];
                    a[i + 1] = temp;
                    swapped = true;
                }
            }
    
            if (swapped == false)
                break;
            
            swapped = false;
            end = end - 1;
    
            // Pass through the array from right to left
            for (int i = end - 1; i >= start; i--) {
                if (a[i] > a[i + 1]) {
                    // Swap elements if they are in the wrong order
                    int temp = a[i];
                    a[i] = a[i + 1];
                    a[i + 1] = temp;
                    swapped = true;
                }
            }
            start = start + 1;
        }
      }`;
      break;
    case "Odd-Even Sort":
      code = `
      public static void oddEvenSort(int[] arr, int n) {
          boolean sorted = false;
          
          while (!sorted) {
              sorted = true;
              
              // Compare and swap elements at odd indices
              for (int i = 1; i < n - 1; i += 2) {
                  if (arr[i] > arr[i + 1]) {
                      // Swap elements
                      int temp = arr[i];
                      arr[i] = arr[i + 1];
                      arr[i + 1] = temp;
                      sorted = false;
                  }
              }
      
              // Compare and swap elements at even indices
              for (int i = 0; i < n - 1; i += 2) {
                  if (arr[i] > arr[i + 1]) {
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
      // Function to flip the elements of the array from index 0 to k
      public static void flip(int[] arr, int k) {
          int left = 0;
          while (left < k) {
              // Swap elements
              int temp = arr[left];
              arr[left] = arr[k];
              arr[k] = temp;
              k--;
              left++;
          }
      }

      // Function to find the index of the maximum element in the first k elements of the array
      public static int maxIndex(int[] arr, int k) {
          int index = 0;
          for (int i = 0; i < k; i++) {
              if (arr[i] > arr[index]) {
                  index = i;
              }
          }
          return index;
      }
      
      public static void pancakeSort(int[] arr) {
          int maxdex;
          int n = arr.length;
          while (n > 1) {
              maxdex = maxIndex(arr, n);
              if (maxdex != n - 1) {
                  flip(arr, maxdex);   // Flip the maximum element to the beginning
                  flip(arr, n - 1);   // Flip the maximum element to its correct position
              }
              n--;
          }
      }`;
      break;
    case "Radix Sort":
      code = `
      // Function to find the maximum value in an array
      static int getMax(int arr[], int n) {
          int mx = arr[0];
          for (int i = 1; i < n; i++)
              if (arr[i] > mx)
                  mx = arr[i];
          return mx;
      }

      // Function to perform counting sort based on a specific digit (exp)
      static void countSort(int arr[], int n, int exp) {
          int output[] = new int[n];
          int i;
          int count[] = new int[10]; // Count array for digits 0 to 9, assuming decimal numbers
          Arrays.fill(count, 0);

          // Count the occurrences of each digit at the specified place (exp)
          for (i = 0; i < n; i++)
              count[(arr[i] / exp) % 10]++;

          // Modify the count array to store the actual position of each digit
          for (i = 1; i < 10; i++)
              count[i] += count[i - 1];

          // Build the output array by placing elements in their sorted order
          for (i = n - 1; i >= 0; i--) {
              output[count[(arr[i] / exp) % 10] - 1] = arr[i];
              count[(arr[i] / exp) % 10]--;
          }

          // Copy the sorted elements back to the original array
          for (i = 0; i < n; i++)
              arr[i] = output[i];
      }

      // Main Radix Sort function
      static void radixSort(int arr[], int n) {
          int m = getMax(arr, n);

          // Perform counting sort for each digit place, from least significant to most significant
          for (int exp = 1; m / exp > 0; exp *= 10)
              countSort(arr, n, exp);
      }
        `;
      break;
    case "Cycle Sort":
      code = `
        public class CycleSort 
        {
          public static void cycleSort(int[] arr) 
          {
              int n = arr.length;
      
              // Loop through the array
              for (int cycleStart = 0; cycleStart < n - 1; cycleStart++) {
                  int item = arr[cycleStart];
                  int pos = cycleStart;
      
                  // Find the correct position for the current item
                  for (int i = cycleStart + 1; i < n; i++) {
                      if (arr[i] < item) {
                          pos++;
                      }
                  }
      
                  // If the item is already in the correct position, continue to the next cycle
                  if (pos == cycleStart) {
                      continue;
                  }
      
                  // Swap the item to its correct position
                  while (item == arr[pos]) {
                      pos++;
                  }
                  int temp = arr[pos];
                  arr[pos] = item;
                  item = temp;
      
                  // Continue cycling until we return to the starting point of this cycle
                  while (pos != cycleStart) {
                      pos = cycleStart;
                      for (int i = cycleStart + 1; i < n; i++) {
                          if (arr[i] < item) {
                              pos++;
                          }
                      }
                      while (item == arr[pos]) {
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
      void bitonicSort(int[] arr) 
      {
          int n = arr.length;
          int k, j, l, i, temp;

          // Outer loop: Iterates over different subarray sizes
          for (k = 2; k <= n; k *= 2) {
              // Middle loop: Iterates over the distance between elements in subarrays
              for (j = k / 2; j > 0; j /= 2) {
                  // Inner loop: Iterates over each element in the array
                  for (i = 0; i < n; i++) {
                      l = i ^ j; // Calculate the index of the element in the other half of the subarray

                      // Compare and swap elements based on Bitonic order
                      if (l > i) {
                          if (((i & k) == 0 && arr[i] > arr[l]) || (((i & k) != 0) && arr[i] < arr[l])) {
                              temp = arr[i];
                              arr[i] = arr[l];
                              arr[l] = temp;
                          }
                      }
                  }
              }
          }
      }
        `;
      break;
    case "Tim Sort":
      code = `
      import java.util.Arrays;

      public class TimSort {
          private static final int MIN_MERGE = 32;

          // Function to find the minimum run length
          private static int calcMinRun(int n) {
              int r = 0;
              while (n >= MIN_MERGE) {
                  r |= (n & 1);
                  n >>= 1;
              }
              return n + r;
          }

          // Function to reverse an array slice
          private static void reverseSlice(int[] arr, int start, int end) {
              end--;
              while (start < end) {
                  int temp = arr[start];
                  arr[start] = arr[end];
                  arr[end] = temp;
                  start++;
                  end--;
              }
          }

          // Insertion sort for small runs
          private static void insertionSort(int[] arr, int left, int right) {
              for (int i = left + 1; i <= right; i++) {
                  int key = arr[i];
                  int j = i - 1;
                  while (j >= left && arr[j] > key) {
                      arr[j + 1] = arr[j];
                      j--;
                  }
                  arr[j + 1] = key;
              }
          }

          // Merge two runs
          private static void merge(int[] arr, int l, int m, int r) {
              int len1 = m - l + 1;
              int len2 = r - m;
              int[] left = Arrays.copyOfRange(arr, l, l + len1);
              int[] right = Arrays.copyOfRange(arr, m + 1, m + 1 + len2);

              int i = 0, j = 0, k = l;

              while (i < len1 && j < len2) {
                  if (left[i] <= right[j]) {
                      arr[k] = left[i];
                      i++;
                  } else {
                      arr[k] = right[j];
                      j++;
                  }
                  k++;
              }

              while (i < len1) {
                  arr[k] = left[i];
                  i++;
                  k++;
              }

              while (j < len2) {
                  arr[k] = right[j];
                  j++;
                  k++;
              }
          }

          // Main Tim Sort function
          public static void timSort(int[] arr) {
              int n = arr.length;
              int minRun = calcMinRun(n);

              for (int i = 0; i < n; i += minRun) {
                  insertionSort(arr, i, Math.min(i + minRun - 1, n - 1));
              }

              for (int size = minRun; size < n; size *= 2) {
                  for (int left = 0; left < n; left += 2 * size) {
                      int mid = Math.min(left + size - 1, n - 1);
                      int right = Math.min(left + 2 * size - 1, n - 1);
                      if (mid < right) {
                          merge(arr, left, mid, right);
                      }
                  }
              }
          }
      }`;
      break;
    case "Cube Sort":
      code = `
      import java.util.Arrays;

      public class CubeSort {
          public static void cubeSort(int[] arr) {
              int n = arr.length;
              int cubeSize = (int) Math.cbrt(n) + 1; // Cube size is the cube root of the array size rounded up

              // Function to sort a cube using any sorting algorithm (e.g., Arrays.sort)
              void sortCube(int[] cube) {
                  Arrays.sort(cube);
              }

              for (int i = 0; i < n; i += cubeSize) {
                  int endIndex = Math.min(i + cubeSize, n);
                  int[] cube = Arrays.copyOfRange(arr, i, endIndex); // Extract a cube
                  sortCube(cube); // Sort the cube
                  System.arraycopy(cube, 0, arr, i, cube.length); // Put the sorted cube back into the array
              }
          }
      } `;
      break;
    case "Bogo Sort":
      code = `
      // Constructor that performs BogoSort on an integer array 'i'
      public BogoSort(int[] i) {
          // Continue shuffling until the array is sorted
          while (!isSorted(i)) {
              shuffle(i);
          }
      }
  
      // Private method to shuffle the elements in the array randomly
      private void shuffle(int[] i) {
          for (int x = 0; x < i.length; ++x) {
              // Generate two random indices
              int index1 = (int) (Math.random() * i.length);
              int index2 = (int) (Math.random() * i.length);
  
              // Swap the elements at the randomly chosen indices
              int a = i[index1];
              i[index1] = i[index2];
              i[index2] = a;
          }
      }
  
      // Private method to check if the array is sorted
      private boolean isSorted(int[] i) {
          for (int x = 0; x < i.length - 1; ++x) {
              // If any element is greater than the next element, the array is not sorted
              if (i[x] > i[x + 1]) {
                  return false;
              }
          }
          // If the loop completes without finding an unsorted pair, the array is sorted
          return true;
      }`;
      break;
    case "Binary Search Tree Preorder Traversal":
      code = `
      // Define a Node class representing binary tree nodes
      class Node {
          int key;
          Node left, right;
      
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
          void printPreorder(Node node) {
              if (node == null)
                  return;
      
              // Visit and print the current node
              System.out.print(node.key + " ");
      
              // Recur on the left subtree
              printPreorder(node.left);
      
              // Recur on the right subtree
              printPreorder(node.right);
          }
      
          public static void main(String[] args) {
              BinaryTree tree = new BinaryTree();
      
              // Create a binary tree with sample nodes
              tree.root = new Node(1);
              tree.root.left = new Node(2);
              tree.root.right = new Node(3);
              tree.root.left.left = new Node(4);
              tree.root.left.right = new Node(5);
      
              // Print the preorder traversal of the binary tree
              System.out.println("Preorder traversal of binary tree:");
              tree.printPreorder(tree.root);
          }
      }
     `;
      break;
    case "Binary Search Tree Postorder Traversal":
      code = `
        // Define a class representing binary tree nodes
        class Node {
            int key;
            Node left, right;
        
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
                System.out.print(node.key + " ");
            }
        
            // Driver code
            public static void main(String[] args) {
                BinaryTree tree = new BinaryTree();
        
                // Create a binary tree with sample nodes
                tree.root = new Node(1);
                tree.root.left = new Node(2);
                tree.root.right = new Node(3);
                tree.root.left.left = new Node(4);
                tree.root.left.right = new Node(5);
        
                // Print the postorder traversal of the binary tree
                System.out.println("Postorder traversal of binary tree:");
                tree.PrintPostorder(tree.root);
            }
        }
      `;
      break;
    case "Binary Search Tree Inorder Traversal":
      code = `
        // Class definition for a node in a Binary Tree
        class Node {
            int key;
            Node left, right;
        
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
                System.out.print(node.key + " ");
        
                // Recur on the right child
                PrintInorder(node.right);
            }
        
            // Driver code
            public static void main(String[] args) {
                BinaryTree tree = new BinaryTree();
        
                // Create a binary tree with sample nodes
                tree.root = new Node(1);
                tree.root.left = new Node(2);
                tree.root.right = new Node(3);
                tree.root.left.left = new Node(4);
                tree.root.left.right = new Node(5);
        
                // Print the inorder traversal of the binary tree
                System.out.println("Inorder traversal of binary tree:");
                tree.PrintInorder(tree.root);
            }
        }
      `;
      break;
    case "Sieve of Eratosthenes":
      code = `
      import java.util.*;

      class SieveOfEratosthenes {
          public static void main(String[] args) {
              Scanner scanner = new Scanner(System.in);
              System.out.print("Enter the upper limit to find prime numbers up to: ");
              int upperLimit = scanner.nextInt();
      
              List<Boolean> isPrime = new ArrayList<>(upperLimit + 1);
              initializeSieve(isPrime);
              performSieve(isPrime);
      
              System.out.println("Prime numbers up to " + upperLimit + ":");
              printPrimes(isPrime);
          }
      
          // Initialize the sieve list, assuming all numbers are prime initially.
          static void initializeSieve(List<Boolean> isPrime) {
              for (int i = 0; i <= isPrime.size(); i++) {
                  isPrime.add(true);
              }
              isPrime.set(0, false);
              isPrime.set(1, false); // 0 and 1 are not prime.
          }
      
          // Perform the Sieve of Eratosthenes algorithm.
          static void performSieve(List<Boolean> isPrime) {
              for (int current = 2; current * current <= isPrime.size(); current++) {
                  if (isPrime.get(current)) {
                      for (int multiple = current * current; multiple < isPrime.size(); multiple += current) {
                          isPrime.set(multiple, false);
                      }
                  }
              }
          }
      
          // Print the prime numbers found by the sieve.
          static void printPrimes(List<Boolean> isPrime) {
              for (int i = 0; i < isPrime.size(); i++) {
                  if (isPrime.get(i)) {
                      System.out.print(i + " ");
                  }
              }
              System.out.println();
          }
      }
      `;
      break;
    default:
      code = "Algorithm not supported";
  }

  return code;
}
