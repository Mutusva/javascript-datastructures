// just a simple implementation of a priority but not ideal.
class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(val, priority) {
    this.values.push({ val, priority });
    this.values.sort((a, b) => {
      return a.priority - b.priority;
    });
  }

  dequeue() {
    if (!this.values.length) return null;
    return this.values.shift();
  }
}

//Weighted graph.
class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    // we override duplicates for now
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    return this;
  }

  addEdge(vertex1, vertex2, weight) {
    if (this.adjacencyList[vertex1])
      this.adjacencyList[vertex1].push({ node: vertex2, weight });
    if (this.adjacencyList[vertex2])
      this.adjacencyList[vertex2].push({ node: vertex1, weight });
  }

  Dijkstra(start, finish) {
    let nodes = new PriorityQueue();
    let distances = {};
    let previous = {};
    let path = [];

    let smallestVertex;
    // build initial state;
    for (let vertex in this.adjacencyList) {
      if (vertex === start) {
        distances[vertex] = 0;
        nodes.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        //nodes.enqueue(vertex, Infinity);
      }

      previous[vertex] = null;
    }

    //As long as there is something to visit
    while (nodes.values.length) {
      smallestVertex = nodes.dequeue().val;
      if (smallestVertex === finish) {
        while (previous[smallestVertex]) {
          path.push(smallestVertex);
          smallestVertex = previous[smallestVertex];
        }
        break;
      }

      if (smallestVertex || distances[smallestVertex] !== Infinity) {
        for (let neighbor in this.adjacencyList[smallestVertex]) {
          // find neighboring node
          let nextNode = this.adjacencyList[smallestVertex][neighbor];
          //calculate the distance
          let candidate = distances[smallestVertex] + nextNode.weight;
          let nextNeighbor = nextNode.node;
          if (candidate < distances[nextNeighbor]) {
            // updating new smallest distance to neighbor
            distances[nextNeighbor] = candidate;
            //updating previous - How we got to neighbor
            previous[nextNeighbor] = smallestVertex;
            // enqueue in the priority queue with new priority
            nodes.enqueue(nextNeighbor, candidate);
          }
        }
      }
    }

    return path.concat(smallestVertex).reverse();
  }
}

let graph = new WeightedGraph();
graph.addVertex("A");
graph.addVertex("A");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("B", "E", 3);
graph.addEdge("C", "D", 2);
graph.addEdge("C", "F", 4);
graph.addEdge("D", "E", 3);
graph.addEdge("D", "F", 1);
graph.addEdge("E", "F", 1);

console.log(graph.Dijkstra("A", "E"));
