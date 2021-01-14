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
}
