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
    case "Greedy Breath First Search":
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
    default:
      code = "Algorithm not supported";
  }

  return code;
}
