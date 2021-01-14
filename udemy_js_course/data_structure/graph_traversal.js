class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    // we override duplicates for now
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    return this;
  }

  addEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1]) this.adjacencyList[vertex1].push(vertex2);
    if (this.adjacencyList[vertex2]) this.adjacencyList[vertex2].push(vertex1);
  }

  removeEdge(v1, v2) {
    if (this.adjacencyList[v1])
      this.adjacencyList[v1].splice(this.adjacencyList[v1].indexOf(v2), 1);
    if (this.adjacencyList[v2])
      this.adjacencyList[v2].splice(this.adjacencyList[v2].indexOf(v1), 1);
  }

  removeVertex(vertex) {
    let edges = this.adjacencyList[vertex];
    if (edges.length) {
      this.removeEdge(edges[0], vertex);
      edges.slice(0);
      this.removeVertex(vertex);
    }
    delete this.adjacencyList[vertex];
    return this; // optional to return // optional to return the graph
  }

  depthFirstSearch(vertex) {
    let visited = {};
    return this.dfs_helper(vertex, visited, []);
  }

  dfs_helper(vertex, visited, result) {
    if (!vertex) return result;

    result.push(vertex);
    visited[vertex] = true;

    let neighbors = this.adjacencyList[vertex];
    for (let i = 0; i < neighbors.length; i++) {
      let v = neighbors[i];
      if (!visited[v]) this.dfs_helper(v, visited, result);
    }
    return result;
  }

  DFS_It(vertex) {
    let visited = {};
    let result = [];
    let stack = [];

    if (!vertex) return result;
    stack.push(vertex);

    let v;
    while (stack.length) {
      v = stack.pop();
      if (!visited[v]) {
        result.push(v);
        visited[v] = true;
        let neighbors = this.adjacencyList[v];
        for (let i = 0; i < neighbors.length; i++) {
          if (!visited[neighbors[i]]) stack.push(neighbors[i]);
        }
      }
    }
    return result;
  }

  breathFirstSearchV1(start) {
    let visited = {};
    let result = [];
    if (!start) return result;
    let queue = [start];

    let cur;
    while (queue.length) {
      cur = queue.shift();
      result.push(cur);
      visited[cur] = true;

      this.adjacencyList[cur].forEach((neighbor) => {
        if (!visited[neighbor]) {
          queue.push(neighbor);
        }
      });
    }
    return result;
  }

  breathFirstSearch(vertex) {
    let visited = {};
    let result = [];
    let queue = [];
    if (!vertex) return result;

    let v;
    queue.push(vertex);
    while (queue.length) {
      let len = queue.length;
      for (let i = 0; i < len; i++) {
        v = queue.shift();
        if (!visited[v]) {
          result.push(v);
          visited[v] = true;
        }

        let neighbors = this.adjacencyList[v];
        for (let i = 0; i < neighbors.length; i++) {
          if (!visited[neighbors[i]]) {
            queue.push(neighbors[i]);
          }
        }
      }
    }
    return result;
  }

  topologicalSort() {
    let result = [];
    if (!this.adjacencyList) return result;

    let stack = [];
    let visited = {};

    for (let node in this.adjacencyList) {
      this.traverse_topo(node, visited, stack);
    }

    while (stack.length) {
      result.push(stack.pop());
    }

    return result;
  }

  traverse_topo(node, visited, stack) {
    if (visited[node]) return;

    visited[node] = true;

    let neighbors = this.adjacencyList[node];
    for (let neighbor of neighbors) {
      if (!visited[neighbor]) this.traverse_topo(neighbor, visited, stack);
    }
    stack.push(node);
  }
}

let g = new Graph();
g.addVertex("X");
g.addVertex("A");
g.addVertex("B");
g.addVertex("P");

g.addEdge("X", "A");
g.addEdge("X", "B");
g.addEdge("B", "P");
g.addEdge("A", "P");

// remember topological sort work on directed Acyclic graphs
console.log(g.topologicalSort());
