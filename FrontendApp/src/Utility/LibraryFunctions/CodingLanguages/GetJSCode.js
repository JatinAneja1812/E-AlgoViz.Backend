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
    default:
      code = "Algorithm not supported";
  }

  return code;
}
