export default function GetJSCode(title) {
  // Replace this with the actual code generation logic for each algorithm
  let code = "";

  switch (title) {
    case "A* Search":
      code = `
        function isValid(x, y, grid) {
            const n = grid.length;
            const m = grid[0].length;
            return x >= 0 && x < n && y >= 0 && y < m && grid[x][y] === 0;
        }
            
        function manhattan(x1, y1, end) {
            return Math.abs(x1 - end[0]) + Math.abs(y1 - end[1]);
        }
            
        function findPath(grid, start, end) {
            const n = grid.length;
            const m = grid[0].length;
            const dist = new Array(n).fill().map(() => new Array(m).fill(Infinity));
            const parentX = new Array(n).fill().map(() => new Array(m).fill(-1));
            const parentY = new Array(n).fill().map(() => new Array(m).fill(-1));
        
            dist[start[0]][start[1]] = 0;
        
            const pq = [[0, start[0], start[1]]];
        
            while (pq.length > 0) {
                pq.sort((a, b) => (dist[a[1]][a[2]] + manhattan(a[1], a[2], end)) - (dist[b[1]][b[2]] + manhattan(b[1], b[2], end)));
        
                const current = pq.shift();
                const x = current[1];
                const y = current[2];
        
                if (x === end[0] && y === end[1]) {
                    break;
                }
        
                const dx = [-1, 0, 1, 0];
                const dy = [0, 1, 0, -1];
        
                for (let i = 0; i < 4; i++) {
                    const newX = x + dx[i];
                    const newY = y + dy[i];
        
                    if (isValid(newX, newY, grid)) {
                        const newDist = dist[x][y] + 1;
        
                        if (newDist < dist[newX][newY]) {
                            dist[newX][newY] = newDist;
                            parentX[newX][newY] = x;
                            parentY[newX][newY] = y;
                            pq.push([newDist + manhattan(newX, newY, end), newX, newY]);
                        }
                    }
                }
            }
            
            const path = [];
            let curX = end[0];
            let curY = end[1];
        
            while (curX !== start[0] || curY !== start[1]) {
                path.push([curX, curY]);
                const tempX = parentX[curX][curY];
                curY = parentY[curX][curY];
                curX = tempX;
            }
        
            path.reverse();
            return path;
        }
            
        const grid = [
            [0, 1, 0, 0, 0, 0],
            [0, 1, 0, 1, 1, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 1, 1, 1, 1, 0],
            [0, 0, 0, 0, 0, 0]
        ];
        
        const start = [0, 0];
        const end = [4, 5];
        
        const path = findPath(grid, start, end);
        
        console.log("A* Path:");
        path.forEach(point => console.log(('$'{point[0]}, '$'{point[1]})));`;
      break;
    case "Dijkstra":
      code = `
        function findShortestPath(graph, startNode, endNode) {
            const distance = {};
            for (const node in graph) {
                distance[node] = Infinity;
            }
            distance[startNode] = 0;
        
            const visitedNodes = new Set();
            while (true) {
                let currentNode = null;
                let currentDistance = Infinity;
                for (const node in distance) {
                    if (!visitedNodes.has(node) && distance[node] < currentDistance) {
                        currentNode = node;
                        currentDistance = distance[node];
                    }
                }
        
                if (currentNode === null)
                    break;
        
                visitedNodes.add(currentNode);
        
                for (const neighbor in graph[currentNode]) {
                    const weight = graph[currentNode][neighbor];
                    const potential = distance[currentNode] + weight;
                    if (potential < distance[neighbor]) {
                        distance[neighbor] = potential;
                    }
                }
            }
        
            return distance;
        }
        
        const graph = {
            "A": {"B": 4, "C": 2},
            "B": {"C": 5, "D": 10},
            "C": {"D": 3},
            "D": {}
        };
        
        const startNode = "A";
        const endNode = "D";
        
        const shortestPath = findShortestPath(graph, startNode, endNode);
        
        console.log("Shortest Path from", startNode, "to", endNode + ":");
        for (const node in shortestPath) {
            console.log(node + ":", shortestPath[node]);
      }`;
      break;
    case "Greedy Breath First Search":
      code = ` 
        function isValid(x, y, grid) {
            const n = grid.length;
            const m = grid[0].length;
            return x >= 0 && x < n && y >= 0 && y < m && grid[x][y] === 0;
        }
        
        function manhattan(x1, y1, end) {
            return Math.abs(x1 - end[0]) + Math.abs(y1 - end[1]);
        }
        
        function findPath(grid, start, end) {
            const n = grid.length;
            const m = grid[0].length;
        
            const openSet = new PriorityQueue({ comparator: (a, b) => a[2] - b[2] });
        
            const cameFrom = new Map();
            const gScore = new Map();
        
            for (let i = 0; i < n; i++) {
                for (let j = 0; j < m; j++) {
                    gScore.set(i + "," + j, Infinity);
                }
            }
        
            gScore.set(start[0] + "," + start[1], 0);
        
            openSet.enqueue([start[0], start[1], manhattan(start[0], start[1], end)]);
        
            while (!openSet.isEmpty()) {
                const current = openSet.dequeue();
                const x = current[0];
                const y = current[1];
        
                if (x === end[0] && y === end[1]) {
                    const path = [];
                    while (x !== start[0] || y !== start[1]) {
                        path.push([x, y]);
                        const temp = cameFrom.get(x + "," + y);
                        x = temp[0];
                        y = temp[1];
                    }
                    path.push(start);
                    path.reverse();
                    return path;
                }
        
                for (let i = 0; i < 4; i++) {
                    const newX = x + dx[i];
                    const newY = y + dy[i];
        
                    if (isValid(newX, newY, grid)) {
                        const tentativeGScore = gScore.get(x + "," + y) + 1;
        
                        if (tentativeGScore < (gScore.get(newX + "," + newY) || Infinity)) {
                            cameFrom.set(newX + "," + newY, [x, y]);
                            gScore.set(newX + "," + newY, tentativeGScore);
                            const fScore = tentativeGScore + manhattan(newX, newY, end);
                            openSet.enqueue([newX, newY, fScore]);
                        }
                    }
                }
            }
        
            return []; // No path found
        }
        
        class PriorityQueue {
            constructor({ comparator }) {
                this.comparator = comparator;
                this.elements = [];
            }
        
            enqueue(element) {
                this.elements.push(element);
                this.bubbleUp();
            }
        
            dequeue() {
                const min = this.elements[0];
                const end = this.elements.pop();
                if (this.elements.length > 0) {
                    this.elements[0] = end;
                    this.sinkDown();
                }
                return min;
            }
        
            isEmpty() {
                return this.elements.length === 0;
            }
        
            bubbleUp() {
                let index = this.elements.length - 1;
                while (index > 0) {
                    const current = this.elements[index];
                    const parentIndex = Math.floor((index - 1) / 2);
                    const parent = this.elements[parentIndex];
        
                    if (this.comparator(current, parent) >= 0) {
                        break;
                    }
        
                    this.elements[index] = parent;
                    this.elements[parentIndex] = current;
                    index = parentIndex;
                }
            }
        
            sinkDown() {
                let index = 0;
                const length = this.elements.length;
                const current = this.elements[0];
        
                while (true) {
                    const leftChildIndex = 2 * index + 1;
                    const rightChildIndex = 2 * index + 2;
                    let leftChild, rightChild;
                    let swap = null;
        
                    if (leftChildIndex < length) {
                        leftChild = this.elements[leftChildIndex];
                        if (this.comparator(leftChild, current) < 0) {
                            swap = leftChildIndex;
                        }
                    }
        
                    if (rightChildIndex < length) {
                        rightChild = this.elements[rightChildIndex];
                        if ((swap === null && this.comparator(rightChild, current) < 0) ||
                            (swap !== null && this.comparator(rightChild, leftChild) < 0)) {
                            swap = rightChildIndex;
                        }
                    }
        
                    if (swap === null) {
                        break;
                    }
        
                    this.elements[index] = this.elements[swap];
                    this.elements[swap] = current;
                    index = swap;
                }
            }
        }
        
        const grid = [
            [0, 1, 0, 0, 0, 0],
            [0, 1, 0, 1, 1, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 1, 1, 1, 1, 0],
            [0, 0, 0, 0, 0, 0]
        ];
        
        const start = [0, 0];
        const end = [4, 5];
        
        const path = findPath(grid, start, end);
        
        console.log("GBFS Path:");
        for (const point of path) {
            console.log(('$'{point[0]}, '$'{point[1]}));
      }`;
      break;
    case "Breath First Search":
      code = `
        function isValid(x, y, grid) {
            const n = grid.length;
            const m = grid[0].length;
            return x >= 0 && x < n && y >= 0 && y < m && grid[x][y] === 0;
        }
        
        function findPath(grid, start, end) {
            const n = grid.length;
            const m = grid[0].length;
        
            const queue = [];
            const cameFrom = {};
            const visited = new Array(n).fill(null).map(() => new Array(m).fill(false));
        
            queue.push(start);
            visited[start[0]][start[1]] = true;
        
            while (queue.length > 0) {
                const current = queue.shift();
        
                if (current[0] === end[0] && current[1] === end[1]) {
                    const path = [];
                    while (!compareArrays(current, start)) {
                        path.push(current);
                        current = cameFrom['$'{current[0]},'$'{current[1]}]; // fix the string
                    }
                    path.push(start);
                    return path.reverse();
                }
        
                for (let i = 0; i < 4; i++) {
                    const newX = current[0] + dx[i];
                    const newY = current[1] + dy[i];
        
                    if (isValid(newX, newY, grid) && !visited[newX][newY]) {
                        queue.push([newX, newY]);
                        visited[newX][newY] = true;
                        cameFrom['$'{newX},'$'{newY}] = current; // fix the string
                    }
                }
            }
        
            return []; // No path found
        }
        
        function compareArrays(arr1, arr2) {
            return arr1[0] === arr2[0] && arr1[1] === arr2[1];
        }
        
        const grid = [
            [0, 1, 0, 0, 0, 0],
            [0, 1, 0, 1, 1, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 1, 1, 1, 1, 0],
            [0, 0, 0, 0, 0, 0]
        ];
        
        const start = [0, 0];
        const end = [4, 5];
        
        const path = findPath(grid, start, end);
        
        console.log("BFS Path:");
        for (const point of path) {
            console.log(('$'{point[0]}, '$'{point[1]})); // fix the string
      }`;
      break;
    case "Bidirectional Breath First Search":
      code = `
        function isValid(x, y, grid) {
            const n = grid.length;
            const m = grid[0].length;
            return x >= 0 && x < n && y >= 0 && y < m && grid[x][y] === 0;
        }
    
        function findPath(grid, start, end) {
            const n = grid.length;
            const m = grid[0].length;
        
            const startQueue = [];
            const endQueue = [];
        
            const startCameFrom = {};
            const endCameFrom = {};
        
            const startVisited = new Array(n).fill(null).map(() => new Array(m).fill(false));
            const endVisited = new Array(n).fill(null).map(() => new Array(m).fill(false));
        
            startQueue.push(start);
            startVisited[start[0]][start[1]] = true;
        
            endQueue.push(end);
            endVisited[end[0]][end[1]] = true;
        
            while (startQueue.length > 0 && endQueue.length > 0) {
                const startCurrent = startQueue.shift();
                const endCurrent = endQueue.shift();
        
                if (startVisited[endCurrent[0]][endCurrent[1]]) {
                    // Paths have met in the middle
                    const path = [];
                    let current = endCurrent;
                    while (!compareArrays(current, end)) {
                        path.push(current);
                        current = endCameFrom['$'{current[0]},'$'{current[1]}]; // fix the string
                    }
                    path.push(end);
        
                    current = startCurrent;
                    while (!compareArrays(current, start)) {
                        path.unshift(current);
                        current = startCameFrom['$'{current[0]},'$'{current[1]}]; // fix the string
                    }
        
                    return path;
                }
        
                // Explore neighbors from the start point
                for (let i = 0; i < 4; i++) {
                    const newX = startCurrent[0] + dx[i];
                    const newY = startCurrent[1] + dy[i];
        
                    if (isValid(newX, newY, grid) && !startVisited[newX][newY]) {
                        startQueue.push([newX, newY]);
                        startVisited[newX][newY] = true;
                        startCameFrom['$'{newX},'$'{newY}] = startCurrent; // fix the string
                    }
                }
        
                // Explore neighbors from the end point
                for (let i = 0; i < 4; i++) {
                    const newX = endCurrent[0] + dx[i];
                    const newY = endCurrent[1] + dy[i];
        
                    if (isValid(newX, newY, grid) && !endVisited[newX][newY]) {
                        endQueue.push([newX, newY]);
                        endVisited[newX][newY] = true;
                        endCameFrom['$'{newX},'$'{newY}] = endCurrent; // fix the string
                    }
                }
            }
        
            return []; // No path found
        }
        
        function compareArrays(arr1, arr2) {
            return arr1[0] === arr2[0] && arr1[1] === arr2[1];
        }
        
        const grid = [
            [0, 1, 0, 0, 0, 0],
            [0, 1, 0, 1, 1, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 1, 1, 1, 1, 0],
            [0, 0, 0, 0, 0, 0]
        ];
        
        const start = [0, 0];
        const end = [4, 5];
        
        const path = findPath(grid, start, end);
        
        console.log("Bidirectional BFS Path:");
        for (const point of path) {
            console.log(('$'{point[0]}, '$'{point[1]}));  // fix the string
      }`;
      break;
    case "Depth First Search":
      code = `
        function isValid(x, y, grid) {
            const n = grid.length;
            const m = grid[0].length;
            return x >= 0 && x < n && y >= 0 && y < m && grid[x][y] === 0;
        }
    
        function findPath(grid, start, end) {
            const path = [];
            const visited = new Array(grid.length).fill(null).map(() => new Array(grid[0].length).fill(false));
        
            function dfs(x, y) {
                if (x === end[0] && y === end[1]) {
                    return true;
                }
        
                visited[x][y] = true;
        
                for (let i = 0; i < 4; i++) {
                    const newX = x + dx[i];
                    const newY = y + dy[i];
        
                    if (isValid(newX, newY, grid) && !visited[newX][newY]) {
                        if (dfs(newX, newY)) {
                            path.push([newX, newY]);
                            return true;
                        }
                    }
                }
        
                return false;
            }
        
            if (dfs(start[0], start[1])) {
                path.push(start);
                path.reverse();
            }
        
            return path;
        }
        
        const grid = [
            [0, 1, 0, 0, 0, 0],
            [0, 1, 0, 1, 1, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 1, 1, 1, 1, 0],
            [0, 0, 0, 0, 0, 0]
        ];
        
        const start = [0, 0];
        const end = [4, 5];
        
        const path = findPath(grid, start, end);
        
        console.log("DFS Path:");
        for (const point of path) {
            console.log(('$'{point[0]}, '$'{point[1]}));  // fix the string
      }`;
      break;
    case "Quick Sort":
      code = `
    // Function to perform Quick Sort on an array.
    function quickSort(arr, leftIndex, rightIndex) 
    {
        // If leftIndex and rightIndex are not provided, set them to the entire array.
        if (leftIndex === undefined) {
            leftIndex = 0;
            rightIndex = arr.length - 1;
        } else if (leftIndex >= rightIndex) {
            // If the leftIndex is greater than or equal to rightIndex, the array is sorted.
            return arr;
        }

        // Initialize variables to keep track of the current partition range.
        var partitionStart = leftIndex;
        var partitionEnd = rightIndex;

        // Choose a random pivot element from the current range.
        var pivot = arr[Math.floor(Math.random() * (rightIndex - leftIndex + 1) + leftIndex)];

        // Partition the array into two subarrays.
        while (leftIndex < rightIndex) {
            while (arr[leftIndex] <= pivot) leftIndex++; // Find an element greater than the pivot from the left.
            while (arr[rightIndex] > pivot) rightIndex--; // Find an element less than or equal to the pivot from the right.

            if (leftIndex < rightIndex) {
            // Swap the elements if they are out of place.
            var temp = arr[leftIndex];
            arr[leftIndex] = arr[rightIndex];
            arr[rightIndex] = temp;
            }
        }

        // Recursively sort the subarrays on the left and right of the pivot.
        quickSort(arr, partitionStart, leftIndex - 1);
        quickSort(arr, leftIndex, partitionEnd);
    }`;
      break;
    case "Merge Sort":
      code = `
      function mergeSort(array) {
        // Base case: If the array has only one or zero elements, it's already sorted.
        if (array.length < 2) {
          return array;
        }
      
        // Split the array into two halves.
        const half = array.length / 2;
        const left = array.splice(0, half);
      
        // Recursively merge and sort the left and right halves.
        return merge(mergeSort(left), mergeSort(array));
      }
      
      function merge(left, right) {
        let arr = [];
      
        // Compare and merge the two sorted arrays.
        while (left.length && right.length) {
          if (left[0] < right[0]) {
            arr.push(left.shift()); // Append the smaller element from the left array.
          } else {
            arr.push(right.shift()); // Append the smaller element from the right array.
          }
        }
      
        // Concatenate the remaining elements from both arrays.
        return [...arr, ...left, ...right];
      }`;
      break;
    case "Heap Sort":
      code = `
      // Function to perform Heap Sort on an array
        function heapSort(array) 
        {
            let size = array.length;

            // Build a max-heap from the input array
            for (let i = Math.floor(size / 2 - 1); i >= 0; i--)
                heapify(array, size, i);

            // Extract elements from the max-heap one by one
            for (let i = size - 1; i >= 0; i--) {
                // Swap the root (maximum element) with the last element in the array
                let temp = array[0];
                array[0] = array[i];
                array[i] = temp;

                // Call heapify on the reduced heap (excluding the sorted elements)
                heapify(array, i, 0);
            }
        }

            // Function to heapify a subtree rooted at given index
        function heapify(array, size, i) 
        {
            let max = i;
            let left = 2 * i + 1;
            let right = 2 * i + 2;

            // Check if the left child is larger than the current max
            if (left < size && array[left] > array[max])
                max = left;

            // Check if the right child is larger than the current max
            if (right < size && array[right] > array[max])
                max = right;

            // If the max is not the current node, swap them and recursively heapify the affected subtree
            if (max != i) {
                let temp = array[i];
                array[i] = array[max];
                array[max] = temp;

                heapify(array, size, max);
            }
        }`;
      break;
    case "Shell Sort":
      code = `
      function shellSort(arr) 
      {
        let n = arr.length;
    
        // Start with a large gap and reduce it over time
        for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
            // Perform insertion sort for elements at each gap
            for (let i = gap; i < n; i++) {
                let temp = arr[i];
    
                // Move elements that are greater than temp by gap positions to the right
                let j;
                for (j = i; j >= gap && arr[j - gap] > temp; j -= gap) {
                    arr[j] = arr[j - gap];
                }
    
                // Place temp in its correct position
                arr[j] = temp;
            }
        }
        return arr;
      }`;
      break;
    case "Bubble Sort":
      code = `
      function bubbleSort(arr) 
      {
        for (var i = 0; i < arr.length; i++) 
         {
            for (var j = 0; j < (arr.length - i - 1); j++) {
              // Compare adjacent elements and swap them if they are in the wrong order
              if (arr[j] > arr[j + 1]) {
                 var temp = arr[j];
                 arr[j] = arr[j + 1];
                 arr[j + 1] = temp;
              }
            }
         }
      }`;
      break;
    case "Selection Sort":
      code = `
      function selectionSort(arr) 
      {
        for (var i = 0; i < arr.length; i++) {
            let min = i;
    
            // Find the index of the minimum element in the remaining unsorted part of the array
            for (var j = i + 1; j < arr.length; j++) {
                if (arr[min] > arr[j]) {
                    min = j;
                }
            }
    
            // Swap the found minimum element with the element at position i
            if (i !== min) {
                [arr[i], arr[min]] = [arr[min], arr[i]];
            }
        }
        return arr;
      }`;
      break;
    case "Insertion Sort":
      code = `
        function insertionSort(arr, n) 
        {
            let i, key, j;
        
            // Start from the second element (index 1)
            for (i = 1; i < n; i++) {
                key = arr[i];
                j = i - 1;
        
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
    function gnomeSort(arr) {
        // Helper function to move an element back in the array
        function moveBack(i) {
            for (; i > 0 && arr[i - 1] > arr[i]; i--) {
                var t = arr[i];
                arr[i] = arr[i - 1];
                arr[i - 1] = t;
            }
        }
        
        // Iterate through the array
        for (var i = 1; i < arr.length; i++) {
            // If the previous element is greater, move the current element back
            if (arr[i - 1] > arr[i]) {
                moveBack(i);
            }
        }
    }`;
      break;
    case "Shaker Sort":
      code = `
      function cocktailShakerSort(nums) 
      {
            let is_Sorted = true;
            while (is_Sorted) 
            {
                // Pass through the array from left to right
                for (let i = 0; i < nums.length - 1; i++) {
                    if (nums[i] > nums[i + 1]) {
                        // Swap elements if they are in the wrong order
                        let temp = nums[i];
                        nums[i] = nums[i + 1];
                        nums[i + 1] = temp;
                        is_Sorted = true;
                    }
                }
        
                if (!is_Sorted)
                    break;
        
                is_Sorted = false;
        
                // Pass through the array from right to left
                for (let j = nums.length - 1; j > 0; j--) {
                    if (nums[j - 1] > nums[j]) {
                        // Swap elements if they are in the wrong order
                        let temp = nums[j];
                        nums[j] = nums[j - 1];
                        nums[j - 1] = temp;
                        is_Sorted = true;
                    }
                }
            }
        }`;
      break;
    case "Odd-Even Sort":
      code = `
        function oddEvenSort(list) 
        {
            var sorted = false;
            while (!sorted) {
                sorted = true;
        
                // Compare and swap elements at odd indices
                for (var i = 1; i < list.length - 1; i += 2) {
                    if (list[i] > list[i + 1]) {
                        [list[i], list[i + 1]] = [list[i + 1], list[i]]; // Swap elements
                        sorted = false;
                    }
                }
        
                // Compare and swap elements at even indices
                for (var i = 0; i < list.length - 1; i += 2) {
                    if (list[i] > list[i + 1]) {
                        [list[i], list[i + 1]] = [list[i + 1], list[i]]; // Swap elements
                        sorted = false;
                    }
                }
            }
        }`;
      break;
    case "Pancake Sort":
      code = `
    // Function to flip the elements of the array from index 0 to k
    function flip(arr, k) {
        let left = 0;
        while (left < k) {
            [arr[left], arr[k]] = [arr[k], arr[left]]; // Swap elements
            k--;
            left++;
        }
    }

    // Function to find the index of the maximum element in the first k elements of the array
    function max_index(arr, k) {
        let index = 0;
        for (let i = 0; i < k; i++) {
            if (arr[i] > arr[index]) {
                index = i;
            }
        }
        return index;
    }

    // Main Pancake Sorting function
    function pancakeSort(arr) {
        let n = arr.length;
        while (n > 1) {
            let maxdex = max_index(arr, n);
            if (maxdex !== n - 1) {
                flip(arr, maxdex);   // Flip the maximum element to the beginning
                flip(arr, n - 1);   // Flip the maximum element to its correct position
            }
            n--;
        }
    }`;
      break;
    case "Radix Sort":
      code = `
        // Function to find the maximum number of digits in an array of numbers
        function findMaxDigitCount(arr) {
            let maxDigitCount = 0;
            for (let number of arr) {
                const currentDigitCount = number.toString().length;
                if (maxDigitCount < currentDigitCount) {
                    maxDigitCount = currentDigitCount;
                }
            }
            return maxDigitCount;
        }

        // Function to get the digit at a specified place (e.g., ones, tens, hundreds) in a number
        function getDigit(number, place) {
            return Math.floor(Math.abs(number) / Math.pow(10, place)) % 10;
        }

        // Radix Sort algorithm implementation
        function radixSort(arr) {
            const maxDigitCount = findMaxDigitCount(arr);

            for (let digitPlace = 0; digitPlace < maxDigitCount; digitPlace++) {
                // Create 10 empty buckets for each possible digit (0-9)
                let buckets = Array.from({ length: 10 }, () => []);

                // Distribute numbers into the buckets based on the current digit place
                for (let j = 0; j < arr.length; j++) {
                    const currentDigit = getDigit(arr[j], digitPlace);
                    buckets[currentDigit].push(arr[j]);
                }

                // Concatenate the buckets to form the updated array
                arr = [].concat(...buckets);
            }
            
            return arr;
        }`;
      break;
    case "Cycle Sort":
      code = `
      function cycleSort(arr) 
      {
        const n = arr.length;
    
        // Loop through the array
        for (let cycleStart = 0; cycleStart < n - 1; cycleStart++) {
            let item = arr[cycleStart];
            let pos = cycleStart;
    
            // Find the correct position for the current item
            for (let i = cycleStart + 1; i < n; i++) {
                if (arr[i] < item) {
                    pos++;
                }
            }
    
            // If the item is already in the correct position, continue to the next cycle
            if (pos === cycleStart) {
                continue;
            }
    
            // Swap the item to its correct position
            while (item === arr[pos]) {
                pos++;
            }
            const temp = arr[pos];
            arr[pos] = item;
            item = temp;
    
            // Continue cycling until we return to the starting point of this cycle
            while (pos !== cycleStart) {
                pos = cycleStart;
                for (let i = cycleStart + 1; i < n; i++) {
                    if (arr[i] < item) {
                        pos++;
                    }
                }
                while (item === arr[pos]) {
                    pos++;
                }
                const temp = arr[pos];
                arr[pos] = item;
                item = temp;
            }
        }
      }`;
      break;
    case "Bitonic Sort":
      code = `
      function bitonicSort(arr) {
            let n = arr.length;
            let k, j, l, i, temp;
            
            // Outer loop: It iterates over the different subarray sizes.
            for (k = 2; k <= n; k *= 2) {
                
                // Middle loop: Iterates over the distance between elements in subarrays.
                for (j = k / 2; j > 0; j /= 2) {
                    
                    // Inner loop: Iterates over each element in the array.
                    for (i = 0; i < n; i++) {
                        l = i ^ j; // Calculate the index of the element in the other half of the subarray.
                        
                        // Compare and swap elements based on Bitonic order.
                        if (l > i) {
                            if (((i & k) == 0 && arr[i] > arr[l]) || ((i & k) != 0 && arr[i] < arr[l])) {
                                temp = arr[i];
                                arr[i] = arr[l];
                                arr[l] = temp;
                            }
                        }
                    }
                }
            }
        }`;
      break;
    case "Tim Sort":
      code = `
        function timSort(arr) 
        {
            const MIN_MERGE = 32;
            const n = arr.length;
        
            // Function to find the minimum run length
            function calcMinRun(n) {
                let r = 0;
                while (n >= MIN_MERGE) {
                    r |= n & 1;
                    n >>= 1;
                }
                return n + r;
            }
        
            // Function to reverse an array slice
            function reverseSlice(arr, start, end) {
                end--;
                while (start < end) {
                    const temp = arr[start];
                    arr[start] = arr[end];
                    arr[end] = temp;
                    start++;
                    end--;
                }
            }
        
            // Insertion sort for small runs
            function insertionSort(arr, left, right) {
                for (let i = left + 1; i <= right; i++) {
                    const key = arr[i];
                    let j = i - 1;
                    while (j >= left && arr[j] > key) {
                        arr[j + 1] = arr[j];
                        j--;
                    }
                    arr[j + 1] = key;
                }
            }
        
            // Merge two runs
            function merge(arr, l, m, r) 
            {
                const len1 = m - l + 1;
                const len2 = r - m;
                const left = new Array(len1);
                const right = new Array(len2);
        
                for (let i = 0; i < len1; i++) {
                    left[i] = arr[l + i];
                }
                for (let i = 0; i < len2; i++) {
                    right[i] = arr[m + 1 + i];
                }
        
                let i = 0;
                let j = 0;
                let k = l;
        
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
            function timSortMain(arr) 
            {
                const n = arr.length;
                const minRun = calcMinRun(n);
        
                for (let i = 0; i < n; i += minRun) {
                    insertionSort(arr, i, Math.min(i + minRun - 1, n - 1));
                }
        
                for (let size = minRun; size < n; size = 2 * size) {
                    for (let left = 0; left < n; left += 2 * size) {
                        const mid = Math.min(left + size - 1, n - 1);
                        const right = Math.min(left + 2 * size - 1, n - 1);
                        if (mid < right) {
                            merge(arr, left, mid, right);
                        }
                    }
                }
            }
            timSortMain(arr);
        }`;
      break;
    case "Cube Sort":
      code = `
      function cubeSort(arr) 
      {
        const n = arr.length;
        const cubeSize = Math.ceil(Math.cbrt(n)); // Cube size is the cube root of the array size
    
        // Function to sort a cube using any sorting algorithm (e.g., insertion sort)
        function sortCube(cube) {
            return cube.sort((a, b) => a - b);
        }
    
        for (let i = 0; i < n; i += cubeSize) {
            const cube = arr.slice(i, i + cubeSize); // Extract a cube
            sortCube(cube); // Sort the cube
            arr.splice(i, cubeSize, ...cube); // Put the sorted cube back into the array
        }
      }`;
      break;
    case "Bogo Sort":
      code = `
      // Function to check if an array is sorted
        function isSorted(arr) {
            for (var i = 1; i < arr.length; i++) {
                if (arr[i - 1] > arr[i]) {
                    return false;
                }
            }
            return true;
        }

        // Function to shuffle the elements in an array randomly
        function shuffle(arr) {
            var count = arr.length, temp, index;
            while (count > 0) {
                index = Math.floor(Math.random() * count);
                count--;

                temp = arr[count];
                arr[count] = arr[index];
                arr[index] = temp;
            }

            return arr;
        }

        // Function to perform BogoSort
        function bogoSort(arr) {
            var sorted = false;
            while (!sorted) {
                arr = shuffle(arr); // Shuffle the array randomly
                sorted = isSorted(arr); // Check if it's sorted
            }
            return arr;
        }`;
      break;
    case "Binary Search Tree Preorder Traversal":
      code = `
        // Class definition for a node with left and right children and a key value
        class Node {
            constructor(value) {
                this.key = value;
                this.left = null;
                this.right = null;
            }
        }
        
        // Initialize the root of the Binary Tree
        var root = null;
        
        // Function to print the nodes of a binary tree in a preorder traversal
        function printPreorder(node) {
            if (node == null)
                return;
        
            // Print the data of the current node
            document.write(node.key + " ");
        
            // Recursively traverse and print the left subtree
            printPreorder(node.left);
        
            // Recursively traverse and print the right subtree
            printPreorder(node.right);
        }
        
        // Driver code
        // Create a binary tree and demonstrate preorder traversal
        
        // Create a root node with a value of 1
        root = new Node(1);
        
        // Add child nodes and build the tree structure
        root.left = new Node(2);
        root.right = new Node(3);
        root.left.left = new Node(4);
        root.left.right = new Node(5);
        
        // Display a message and perform the preorder traversal
        console.log("Preorder traversal of the binary tree is ");
        printPreorder(root);
    `;
      break;
    case "Binary Search Tree Postorder Traversal":
      code = `
        // Define a Node class representing binary tree nodes
        class Node {
            constructor(value) {
                this.key = value;
                this.left = null;
                this.right = null;
            }
        }
        
        // Initialize the root of the Binary Tree
        var root = null;
        
        // Function to print nodes in a "bottom-up" postorder traversal
        function PrintPostorder(node) {
            if (node == null)
                return;
        
            // Recur on the left subtree
            PrintPostorder(node.left);
        
            // Recur on the right subtree
            PrintPostorder(node.right);
        
            // Process the current node (print its key)
            console.log(node.key + " ");
        }
        
        // Driver code
        
        // Create a binary tree with sample nodes
        root = new Node(1);
        root.left = new Node(2);
        root.right = new Node(3);
        root.left.left = new Node(4);
        root.left.right = new Node(5);
        
        // Print the postorder traversal of the binary tree
        console.log("Postorder traversal of binary tree is:");
        PrintPostorder(root);
      `;
      break;
    case "Binary Search Tree Inorder Traversal":
      code = `
        // Define a class representing binary tree nodes
        class Node {
            constructor(value) {
                this.key = value;
                this.left = null;
                this.right = null;
            }
        }
        
        // Initialize the root of the Binary Tree
        var root = null;
        
        // Function to print nodes in an inorder traversal
        function PrintInorder(node) {
            if (node == null)
                return;
        
            // Recur on the left child
            PrintInorder(node.left);
        
            // Process the current node (print its key)
            console.log(node.key + " ");
        
            // Recur on the right child
            PrintInorder(node.right);
        }
        
        // Driver code
        
        // Create a binary tree with sample nodes
        root = new Node(1);
        root.left = new Node(2);
        root.right = new Node(3);
        root.left.left = new Node(4);
        root.left.right = new Node(5);
        
        // Print the inorder traversal of the binary tree
        console.log("Inorder traversal of binary tree is:");
        PrintInorder(root);
      `;
      break;
    case "Sieve of Eratosthenes":
      code = `
      const readline = require('readline');

      const rl = readline.createInterface({
          input: process.stdin,
          output: process.stdout
      });
      
      rl.question('Enter the upper limit to find prime numbers up to: ', (input) => {
          const upperLimit = parseInt(input);
      
          const isPrime = new Array(upperLimit + 1).fill(true);
          initializeSieve(isPrime);
          performSieve(isPrime);
      
          console.log(Prime numbers up to '$'{upperLimit}:);
          printPrimes(isPrime);
      
          rl.close();
      });
      
      // Initialize the sieve list, assuming all numbers are prime initially.
      function initializeSieve(isPrime) {
          isPrime[0] = isPrime[1] = false; // 0 and 1 are not prime.
      }
      
      // Perform the Sieve of Eratosthenes algorithm.
      function performSieve(isPrime) {
          for (let current = 2; current * current <= isPrime.length; current++) {
              if (isPrime[current]) {
                  for (let multiple = current * current; multiple < isPrime.length; multiple += current) {
                      isPrime[multiple] = false;
                  }
              }
          }
      }
      
      // Print the prime numbers found by the sieve.
      function printPrimes(isPrime) {
          for (let i = 0; i < isPrime.length; i++) {
              if (isPrime[i]) {
                  process.stdout.write(i + ' ');
              }
          }
          console.log();
      }
      `;
      break;
    default:
      code = "Algorithm not supported";
  }

  return code;
}
