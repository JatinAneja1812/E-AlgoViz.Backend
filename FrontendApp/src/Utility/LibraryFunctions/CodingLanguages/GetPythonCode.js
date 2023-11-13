export default function GetPythonCode(title) {
  // Replace this with the actual code generation logic for each algorithm
  let code = "";

  switch (title) {
    case "A* Search":
      code = `
        import heapq

        dx = [-1, 0, 1, 0]
        dy = [0, 1, 0, -1]
        
        def is_valid(x, y, grid):
            n = len(grid)
            m = len(grid[0])
            return 0 <= x < n and 0 <= y < m and grid[x][y] == 0
        
        def manhattan(x1, y1, end):
            return abs(x1 - end[0]) + abs(y1 - end[1])
        
        def find_path(grid, start, end):
            n = len(grid)
            m = len(grid[0])
            dist = [[float('inf')] * m for _ in range(n)]
            parentX = [[-1] * m for _ in range(n)]
            parentY = [[-1] * m for _ in range(n)]
        
            dist[start[0]][start[1]] = 0
        
            pq = [(0, start[0], start[1])]
        
            while pq:
                current = heapq.heappop(pq)
                x, y = current[1], current[2]
        
                if x == end[0] and y == end[1]:
                    break
        
                for i in range(4):
                    newX = x + dx[i]
                    newY = y + dy[i]
        
                    if is_valid(newX, newY, grid):
                        newDist = dist[x][y] + 1
        
                        if newDist < dist[newX][newY]:
                            dist[newX][newY] = newDist
                            parentX[newX][newY] = x
                            parentY[newX][newY] = y
                            heapq.heappush(pq, (newDist + manhattan(newX, newY, end), newX, newY))
        
            path = []
            curX, curY = end
        
            while curX != start[0] or curY != start[1]:
                path.append((curX, curY))
                tempX = parentX[curX][curY]
                curY = parentY[curX][curY]
                curX = tempX
        
            path.reverse()
            return path
        
        grid = [
            [0, 1, 0, 0, 0, 0],
            [0, 1, 0, 1, 1, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 1, 1, 1, 1, 0],
            [0, 0, 0, 0, 0, 0]
        ]
        
        start = (0, 0)
        end = (4, 5)
        
        path = find_path(grid, start, end)
        
        print("A* Path:")
        for point in path:
            print(point)`;
      break;
    case "Dijkstra":
      code = ` 
      import heapq

      def find_shortest_path(graph, start, end):
          distance = {}
          for node in graph:
              distance[node] = float('inf')
          distance[start] = 0
      
          visited = set()
          while True:
              current_node = None
              current_distance = float('inf')
              for node in graph:
                  if node not in visited and distance[node] < current_distance:
                      current_node = node
                      current_distance = distance[node]
      
              if current_node is None:
                  break
      
              visited.add(current_node)
      
              for neighbor, weight in graph[current_node].items():
                  potential = distance[current_node] + weight
                  if potential < distance[neighbor]:
                      distance[neighbor] = potential
      
          return distance
      
      graph = {
          "A": {"B": 4, "C": 2},
          "B": {"C": 5, "D": 10},
          "C": {"D": 3},
          "D": {}
      }
      
      start_node = "A"
      end_node = "D"
      
      shortest_path = find_shortest_path(graph, start_node, end_node)
      
      print("Shortest Path from", start_node, "to", end_node + ":")
      for node, dist in shortest_path.items():
          print(node + ":", dist)
       `;
      break;
    case "Greedy Best First Search":
      code = `
      import heapq

      dx = [-1, 0, 1, 0]
      dy = [0, 1, 0, -1]
      
      def is_valid(x, y, grid):
          n = len(grid)
          m = len(grid[0])
          return x >= 0 and x < n and y >= 0 and y < m and grid[x][y] == 0
      
      def manhattan(x1, y1, end):
          return abs(x1 - end[0]) + abs(y1 - end[1])
      
      def find_path(grid, start, end):
          n = len(grid)
          m = len(grid[0])
      
          open_set = [(start[0], start[1], manhattan(start[0], start[1], end))]
          heapq.heapify(open_set)
      
          came_from = {}
          g_score = {}
          for i in range(n):
              for j in range(m):
                  g_score[(i, j)] = float('inf')
      
          g_score[start] = 0
      
          while open_set:
              current = heapq.heappop(open_set)
              x, y, _ = current
      
              if x == end[0] and y == end[1]:
                  path = []
                  while (x, y) != start:
                      path.append((x, y))
                      x, y = came_from[(x, y)]
                  path.append(start)
                  path.reverse()
                  return path
      
              for i in range(4):
                  new_x = x + dx[i]
                  new_y = y + dy[i]
      
                  if is_valid(new_x, new_y, grid):
                      tentative_g_score = g_score[(x, y)] + 1
      
                      if tentative_g_score < g_score.get((new_x, new_y), float('inf')):
                          came_from[(new_x, new_y)] = (x, y)
                          g_score[(new_x, new_y)] = tentative_g_score
                          f_score = tentative_g_score + manhattan(new_x, new_y, end)
                          heapq.heappush(open_set, (new_x, new_y, f_score))
      
          return []  # No path found
      
      grid = [
          [0, 1, 0, 0, 0, 0],
          [0, 1, 0, 1, 1, 0],
          [0, 0, 0, 0, 0, 0],
          [0, 1, 1, 1, 1, 0],
          [0, 0, 0, 0, 0, 0]
      ]
      
      start = (0, 0)
      end = (4, 5)
      
      path = find_path(grid, start, end)
      
      print("GBFS Path:")
      for point in path:
          print("({}, {})".format(point[0], point[1]))
      `;
      break;
    case "Breath First Search":
      code = `
        from collections import deque
        
        dx = [-1, 0, 1, 0]
        dy = [0, 1, 0, -1]

        def is_valid(x, y, grid):
            n = len(grid)
            m = len(grid[0])
            return x >= 0 and x < n and y >= 0 and y < m and grid[x][y] == 0

        def find_path(grid, start, end):
            n = len(grid)
            m = len(grid[0])

            queue = deque()
            came_from = {}
            visited = [[False for _ in range(m)] for _ in range(n)]

            queue.append(start)
            visited[start[0]][start[1]] = True

            while queue:
                current = queue.popleft()

                if current == end:
                    path = []
                    while current != start:
                        path.append(current)
                        current = came_from[current]
                    path.append(start)
                    path.reverse()
                    return path

                for i in range(4):
                    new_x = current[0] + dx[i]
                    new_y = current[1] + dy[i]

                    if is_valid(new_x, new_y, grid) and not visited[new_x][new_y]:
                        queue.append((new_x, new_y))
                        visited[new_x][new_y] = True
                        came_from[(new_x, new_y)] = current

            return []  # No path found

        grid = [
            [0, 1, 0, 0, 0, 0],
            [0, 1, 0, 1, 1, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 1, 1, 1, 1, 0],
            [0, 0, 0, 0, 0, 0]
        ]

        start = (0, 0)
        end = (4, 5)

        path = find_path(grid, start, end)

        print("BFS Path:")
        for point in path:
            print("({}, {})".format(point[0], point[1]))
      `;
      break;
    case "Bidirectional Breath First Search":
      code = `
      from collections import deque

      dx = [-1, 0, 1, 0]
      dy = [0, 1, 0, -1]
      
      def is_valid(x, y, grid):
          n = len(grid)
          m = len(grid[0])
          return x >= 0 and x < n and y >= 0 and y < m and grid[x][y] == 0
      
      def find_path(grid, start, end):
          n = len(grid)
          m = len(grid[0])
      
          start_queue = deque()
          end_queue = deque()
      
          start_came_from = {}
          end_came_from = {}
      
          start_visited = [[False for _ in range(m)] for _ in range(n)]
          end_visited = [[False for _ in range(m)] for _ in range(n)]
      
          start_queue.append(start)
          start_visited[start[0]][start[1]] = True
      
          end_queue.append(end)
          end_visited[end[0]][end[1]] = True
      
          while start_queue and end_queue:
              start_current = start_queue.popleft()
              end_current = end_queue.popleft()
      
              if start_visited[end_current[0]][end_current[1]]:
                  # Paths have met in the middle
                  path = []
                  current = end_current
                  while current != end:
                      path.append(current)
                      current = end_came_from[current]
                  path.append(end)
      
                  current = start_current
                  while current != start:
                      path.insert(0, current)
                      current = start_came_from[current]
      
                  return path
      
              # Explore neighbors from the start point
              for i in range(4):
                  new_x = start_current[0] + dx[i]
                  new_y = start_current[1] + dy[i]
      
                  if is_valid(new_x, new_y, grid) and not start_visited[new_x][new_y]:
                      start_queue.append((new_x, new_y))
                      start_visited[new_x][new_y] = True
                      start_came_from[(new_x, new_y)] = start_current
      
              # Explore neighbors from the end point
              for i in range(4):
                  new_x = end_current[0] + dx[i]
                  new_y = end_current[1] + dy[i]
      
                  if is_valid(new_x, new_y, grid) and not end_visited[new_x][new_y]:
                      end_queue.append((new_x, new_y))
                      end_visited[new_x][new_y] = True
                      end_came_from[(new_x, new_y)] = end_current
      
          return []  # No path found
      
      grid = [
          [0, 1, 0, 0, 0, 0],
          [0, 1, 0, 1, 1, 0],
          [0, 0, 0, 0, 0, 0],
          [0, 1, 1, 1, 1, 0],
          [0, 0, 0, 0, 0, 0]
      ]
      
      start = (0, 0)
      end = (4, 5)
      
      path = find_path(grid, start, end)
      
      print("Bidirectional BFS Path:")
      for point in path:
          print(f"({point[0]}, {point[1]})")
      `;
      break;
    case "Depth First Search":
      code = `
      dx = [-1, 0, 1, 0]
      dy = [0, 1, 0, -1]
      
      def is_valid(x, y, grid):
          n = len(grid)
          m = len(grid[0])
          return x >= 0 and x < n and y >= 0 and y < m and grid[x][y] == 0
      
      def find_path(grid, start, end):
          def dfs(x, y):
              if x == end[0] and y == end[1]:
                  return True
      
              visited[x][y] = True
      
              for i in range(4):
                  new_x = x + dx[i]
                  new_y = y + dy[i]
      
                  if is_valid(new_x, new_y, grid) and not visited[new_x][new_y]:
                      if dfs(new_x, new_y):
                          path.append((new_x, new_y))
                          return True
      
              return False
      
          path = []
          visited = [[False for _ in range(len(grid[0]))] for _ in range(len(grid))]
      
          if dfs(start[0], start[1]):
              path.append(start)
              path.reverse()
      
          return path
      
      grid = [
          [0, 1, 0, 0, 0, 0],
          [0, 1, 0, 1, 1, 0],
          [0, 0, 0, 0, 0, 0],
          [0, 1, 1, 1, 1, 0],
          [0, 0, 0, 0, 0, 0]
      ]
      
      start = (0, 0)
      end = (4, 5)
      
      path = find_path(grid, start, end)
      
      print("DFS Path:")
      for point in path:
          print("({}, {})".format(point[0], point[1]))
      `;
      break;
    case "Quick Sort":
      code = `
    def partition(array, start, end):
        pivot_value = array[start]
        left = start + 1
        right = end
    
        while True:
            # Find an element on the right side smaller than pivot_value
            while left <= right and array[right] >= pivot_value:
                right -= 1
    
            # Find an element on the left side greater than pivot_value
            while left <= right and array[left] <= pivot_value:
                left += 1
    
            if left <= right:
                # Swap the elements at left and right
                array[left], array[right] = array[right], array[left]
            else:
                break
    
        # Swap pivot_value with the element at right
        array[start], array[right] = array[right], array[start]
    
        return right

    def quick_sort(array, start, end):
        if start >= end:
            return
    
        pivot_index = partition(array, start, end)
        
        # Recursively sort the subarrays on the left and right of the pivot
        quick_sort(array, start, pivot_index - 1)
        quick_sort(array, pivot_index + 1, end)`;
      break;
    case "Merge Sort":
      code = `
      def mergeSort(arr):
        # Check if the array has more than one element
        if len(arr) > 1:
            # Calculate the middle of the array
            mid = len(arr) // 2

            # Divide the array into two halves
            L = arr[:mid]
            R = arr[mid:]

            # Recursively sort the left and right halves
            mergeSort(L)
            mergeSort(R)

            i = j = k = 0

            # Merge the two sorted halves back into the original array
            while i < len(L) and j < len(R):
                if L[i] < R[j]:
                    arr[k] = L[i]
                    i += 1
                else:
                    arr[k] = R[j]
                    j += 1
                k += 1

            # Copy any remaining elements from the left subarray
            while i < len(L):
                arr[k] = L[i]
                i += 1
                k += 1

            # Copy any remaining elements from the right subarray
            while j < len(R):
                arr[k] = R[j]
                j += 1
                k += 1`;
      break;
    case "Heap Sort":
      code = `
    def heapify(arr, n, i):
        # Initialize the largest element as the root
        largest = i
        left = 2 * i + 1
        right = 2 * i + 2
    
        # Check if the left child exists and is greater than the current largest
        if left < n and arr[left] > arr[largest]:
            largest = left
    
        # Check if the right child exists and is greater than the current largest
        if right < n and arr[right] > arr[largest]:
            largest = right
    
        # If the largest is not the current node, swap them and recursively heapify the affected subtree
        if largest != i:
            arr[i], arr[largest] = arr[largest], arr[i]
            heapify(arr, n, largest)
    
    def heapSort(arr):
        n = len(arr)
    
        # Build a max-heap from the input array
        for i in range(n // 2, -1, -1):
            heapify(arr, n, i)
    
        # Extract elements from the max-heap one by one
        for i in range(n - 1, 0, -1):
            arr[i], arr[0] = arr[0], arr[i]  # Swap the root (maximum element) with the last element
            heapify(arr, i, 0)  # Call heapify on the reduced heap (excluding the sorted elements)
      `;
      break;
    case "Shell Sort":
      code = `
      def shellSort(arr):
        n = len(arr)
        gap = n // 2

        while gap > 0:
            for i in range(gap, n):
                temp = arr[i]
                j = i
                while j >= gap and arr[j - gap] > temp:
                    # Shift elements that are greater than 'temp' by 'gap' positions to the right
                    arr[j] = arr[j - gap]
                    j -= gap
                arr[j] = temp
            gap //= 2 `;
      break;
    case "Bubble Sort":
      code = `
      def bubbleSort(arr):
      n = len(arr)
      
      # Iterate through all elements in the array
      for i in range(n - 1):
          # Last i elements are already sorted, so we reduce the inner loop range
          for j in range(0, n - i - 1):
              # Swap if the element found is greater than the next element
              if arr[j] > arr[j + 1]:
                  arr[j], arr[j + 1] = arr[j + 1], arr[j]
          `;
      break;
    case "Selection Sort":
      code = `
      def selection_sort(A):
        # Iterate over each element in the array
        for i in range(len(A)):
            # Assume the current index has the minimum value
            min_idx = i

            # Find the index of the minimum element in the remaining unsorted part of the array
            for j in range(i + 1, len(A)):
                if A[min_idx] > A[j]:
                    min_idx = j

            # Swap the found minimum element with the element at position i
            A[i], A[min_idx] = A[min_idx], A[i]
        `;
      break;
    case "Insertion Sort":
      code = `
      def insertionSort(arr):
        # Iterate through the array starting from the second element (index 1)
        for i in range(1, len(arr)):
            key = arr[i]
            j = i - 1
            
            # Move elements of arr[0..i-1] that are greater than 'key' one position ahead of their current position
            while j >= 0 and key < arr[j]:
                arr[j + 1] = arr[j]
                j -= 1
            
            # Place 'key' in its correct position
            arr[j + 1] = key
        `;
      break;
    case "Gnome Sort":
      code = `
      def gnomeSort(arr, n):
        index = 0

        while index < n:
            if index == 0:
                index = index + 1
            
            # Compare adjacent elements and move them back if necessary
            if arr[index] >= arr[index - 1]:
                index = index + 1
            else:
                # Swap the elements
                arr[index], arr[index - 1] = arr[index - 1], arr[index]
                index = index - 1
          `;
      break;
    case "Shaker Sort":
      code = `
      def cocktailSort(a):
        n = len(a)
        swapped = True
        start = 0
        end = n - 1

        while swapped:
            swapped = False

            # Pass through the array from left to right
            for i in range(start, end):
                if a[i] > a[i + 1]:
                    a[i], a[i + 1] = a[i + 1], a[i]
                    swapped = True

            if not swapped:
                break

            swapped = False
            end = end - 1

            # Pass through the array from right to left
            for i in range(end - 1, start - 1, -1):
                if a[i] > a[i + 1]:
                    a[i], a[i + 1] = a[i + 1], a[i]
                    swapped = True

            start = start + 1
        `;
      break;
    case "Odd-Even Sort":
      code = `
      def odd_even_sort(L):
        sorted = False
        while not sorted:
            sorted = True

            # Compare and swap elements at odd indices
            for i in range(1, len(L) - 1, 2):
                if L[i] > L[i + 1]:
                    L[i], L[i + 1] = L[i + 1], L[i]
                    sorted = False

            # Compare and swap elements at even indices
            for i in range(0, len(L) - 1, 2):
                if L[i] > L[i + 1]:
                    L[i], L[i + 1] = L[i + 1], L[i]
                sorted = False
        `;
      break;
    case "Pancake Sort":
      code = `
        # Function to flip the elements of the array from index 0 to k
        def flip(arr, k):
            left = 0
            while left < k:
                arr[left], arr[k] = arr[k], arr[left]  # Swap elements
                k -= 1
                left += 1

        # Function to find the index of the maximum element in the first k elements of the array
        def max_index(arr, k):
            index = 0
            for i in range(k):
                if arr[i] > arr[index]:
                    index = i
            return index

        # Main Pancake Sorting function
        def pancake_sort(arr):
            n = len(arr)
            while n > 1:
                maxdex = max_index(arr, n)
                if maxdex != n - 1:
                    flip(arr, maxdex)   # Flip the maximum element to the beginning
                    flip(arr, n - 1)   # Flip the maximum element to its correct position
                n -= 1
        `;
      break;
    case "Radix Sort":
      code = `
      # Function to perform counting sort based on a specific digit (exp1)
        def countingSort(arr, exp1):
            n = len(arr)
            output = [0] * (n)
            count = [0] * (10)

            # Count the occurrences of each digit at the specified place (exp1)
            for i in range(0, n):
                index = (arr[i] / exp1)
                count[int(index % 10)] += 1

            # Modify the count array to store the actual position of each digit
            for i in range(1, 10):
                count[i] += count[i - 1]

            # Build the output array by placing elements in their sorted order
            i = n - 1
            while i >= 0:
                index = (arr[i] / exp1)
                output[count[int(index % 10)] - 1] = arr[i]
                count[int(index % 10)] -= 1
                i -= 1

            # Copy the sorted elements back to the original array
            for i in range(0, len(arr)):
                arr[i] = output[i]

        # Main Radix Sort function
        def radixSort(arr):
            max1 = max(arr)
            exp = 1
            while max1 / exp > 0:
                countingSort(arr, exp)
                exp *= 10
          `;
      break;
    case "Cycle Sort":
      code = `
      def cycle_sort(arr):
        n = len(arr)

        # Loop through the array
        for cycle_start in range(n - 1):
            item = arr[cycle_start]
            pos = cycle_start

            # Find the correct position for the current item
            for i in range(cycle_start + 1, n):
                if arr[i] < item:
                    pos += 1

            # If the item is already in the correct position, continue to the next cycle
            if pos == cycle_start:
                continue

            # Swap the item to its correct position
            while item == arr[pos]:
                pos += 1
            arr[pos], item = item, arr[pos]

            # Continue cycling until we return to the starting point of this cycle
            while pos != cycle_start:
                pos = cycle_start
                for i in range(cycle_start + 1, n):
                    if arr[i] < item:
                        pos += 1
                while item == arr[pos]:
                    pos += 1
                arr[pos], item = item, arr[pos]
        `;
      break;
    case "Bitonic Sort":
      code = `
      def bitonic_sort(arr):
        n = len(arr)
        for k in range(2, n + 1):
            j = k // 2
            while j > 0:
                for i in range(0, n):
                    l = i ^ j  # Calculate the index of the element in the other half of the subarray

                    # Compare and swap elements based on Bitonic order
                    if l > i:
                        if (((i & k) == 0 and arr[i] > arr[l]) or (((i & k) != 0) and arr[i] < arr[l])):
                            temp = arr[i]
                            arr[i] = arr[l]
                            arr[l] = temp
                j //= 2
        `;
      break;
    case "Tim Sort":
      code = `
      def tim_sort(arr):
        MIN_MERGE = 32

        # Function to find the minimum run length
        def calc_min_run(n):
            r = 0
            while n >= MIN_MERGE:
                r |= n & 1
                n >>= 1
            return n + r

        # Function to reverse an array slice
        def reverse_slice(arr, start, end):
            end -= 1
            while start < end:
                arr[start], arr[end] = arr[end], arr[start]
                start += 1
                end -= 1

        # Insertion sort for small runs
        def insertion_sort(arr, left, right):
            for i in range(left + 1, right + 1):
                key = arr[i]
                j = i - 1
                while j >= left and arr[j] > key:
                    arr[j + 1] = arr[j]
                    j -= 1
                arr[j + 1] = key

        # Merge two runs
        def merge(arr, l, m, r):
            len1 = m - l + 1
            len2 = r - m
            left = [0] * len1
            right = [0] * len2

            for i in range(len1):
                left[i] = arr[l + i]
            for i in range(len2):
                right[i] = arr[m + 1 + i]

            i = 0
            j = 0
            k = l

            while i < len1 and j < len2:
                if left[i] <= right[j]:
                    arr[k] = left[i]
                    i += 1
                else:
                    arr[k] = right[j]
                    j += 1
                k += 1

            while i < len1:
                arr[k] = left[i]
                i += 1
                k += 1

            while j < len2:
                arr[k] = right[j]
                j += 1
                k += 1

        # Main Tim Sort function
        def tim_sort_main(arr):
            n = len(arr)
            min_run = calc_min_run(n)

            for i in range(0, n, min_run):
                insertion_sort(arr, i, min(i + min_run - 1, n - 1))

            size = min_run
            while size < n:
                for left in range(0, n, 2 * size):
                    mid = min(left + size - 1, n - 1)
                    right = min(left + 2 * size - 1, n - 1)
                    if mid < right:
                        merge(arr, left, mid, right)
                size *= 2

        tim_sort_main(arr)
        `;
      break;
    case "Cube Sort":
      code = `
      def cube_sort(arr):
        n = len(arr)
        cube_size = int(n ** (1/3)) + 1  # Cube size is the cube root of the array size rounded up

        # Function to sort a cube using any sorting algorithm (e.g., insertion sort)
        def sort_cube(cube):
            return sorted(cube)

        for i in range(0, n, cube_size):
            cube = arr[i:i + cube_size]  # Extract a cube
            cube = sort_cube(cube)  # Sort the cube
            arr[i:i + cube_size] = cube  # Put the sorted cube back into the array
          `;
      break;
    case "Bogo Sort":
      code = `
        import random
        # Function to perform BogoSort
        def bogo_sort(a):
            while not is_sorted(a):
                shuffle(a)

        # Function to check if an array is sorted
        def is_sorted(a):
            n = len(a)
            for i in range(0, n - 1):
                if a[i] > a[i + 1]:
                    return False
            return True

        # Function to shuffle the elements in an array randomly
        def shuffle(a):
            n = len(a)
            for i in range(0, n):
                r = random.randint(0, n - 1)
                a[i], a[r] = a[r], a[i]

        `;
      break;
    case "Binary Search Tree Preorder Traversal":
      code = `
        # Class definition for a node in a Binary Tree
        class Node:
            def __init__(self, key):
                self.left = None
                self.right = None
                self.val = key
        
        # Function to perform a preorder tree traversal
        def PrintPreorder(root):
            if root:
        
                # Visit and print the data of the current node
                print(root.val, end=" ")
        
                # Recur on the left child
                PrintPreorder(root.left)
        
                # Recur on the right child
                PrintPreorder(root.right)
        
        # Driver code
        if __name__ == "__main__":
            # Create a binary tree with sample nodes
            root = Node(1)
            root.left = Node(2)
            root.right = Node(3)
            root.left.left = Node(4)
            root.left.right = Node(5)
        
            # Print the preorder traversal of the binary tree
            print("Preorder traversal of binary tree:")
            PrintPreorder(root)
      
        `;
      break;
    case "Binary Search Tree Postorder Traversal":
      code = `
        # Class definition for a node in a Binary Tree
        class Node:
            def __init__(self, key):
                self.left = None
                self.right = None
                self.val = key
        
        # Function to perform a postorder tree traversal
        def PrintPostorder(root):
            if root:
        
                # Recur on the left child
                PrintPostorder(root.left)
        
                # Recur on the right child
                PrintPostorder(root.right)
        
                # Process the current node (print its value)
                print(root.val, end=" ")
        
        # Driver code
        if __name__ == "__main__":
            # Create a binary tree with sample nodes
            root = Node(1)
            root.left = Node(2)
            root.right = Node(3)
            root.left.left = Node(4)
            root.left.right = Node(5)
        
            # Print the postorder traversal of the binary tree
            print("Postorder traversal of binary tree:")
            PrintPostorder(root)
        `;
      break;
    case "Binary Search Tree Inorder Traversal":
      code = `
        # Class definition for a node in a Binary Tree
        class Node:
            def __init__(self, key):
                self.left = None
                self.right = None
                self.val = key
        
        # Function to perform an inorder tree traversal
        def PrintInorder(root):
            if root:
        
                # Recur on the left child
                PrintInorder(root.left)
        
                # Process the current node (print its value)
                print(root.val, end=" ")
        
                # Recur on the right child
                PrintInorder(root.right)
        
        # Driver code
        if __name__ == "__main__":
            # Create a binary tree with sample nodes
            root = Node(1)
            root.left = Node(2)
            root.right = Node(3)
            root.left.left = Node(4)
            root.left.right = Node(5)
        
            # Print the inorder traversal of the binary tree
            print("Inorder traversal of binary tree is:")
            PrintInorder(root)
      `;
      break;
    case "Sieve of Eratosthenes":
      code = `
        def main():
            upper_limit = int(input("Enter the upper limit to find prime numbers up to: "))
        
            is_prime = [True] * (upper_limit + 1)
            initialize_sieve(is_prime)
            perform_sieve(is_prime)
        
            print(f"Prime numbers up to {upper_limit}:")
            print_primes(is_prime)
        
        def initialize_sieve(is_prime):
            is_prime[0] = is_prime[1] = False  # 0 and 1 are not prime
        
        def perform_sieve(is_prime):
            current = 2
            while current * current <= len(is_prime):
                if is_prime[current]:
                    multiple = current * current
                    while multiple < len(is_prime):
                        is_prime[multiple] = False
                        multiple += current
                current += 1
        
        def print_primes(is_prime):
            for i in range(len(is_prime)):
                if is_prime[i]:
                    print(i, end=' ')
            print()
        
        if __name__ == "__main__":
            main()
      
      `;
      break;
    default:
      code = "Algorithm not supported";
  }

  return code;
}
