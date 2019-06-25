class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }
  removeEdge(vertex1, vertex2) {
    let x = this.adjacencyList[vertex1];
    let y = this.adjacencyList[vertex2];
    x.splice(x.indexOf(vertex2), 1);
    y.splice(y.indexOf(vertex1), 1);
  }
  removeVertex(vertex) {
    while (thid.adjacencyList[vertex].length) {
      const list = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, list);
    }
    delete this.adjacencyList[vertex];
  }
}

let g = new Graph();
g.addVertex("Montreal");
g.addVertex("Bali");
g.addVertex("Manchester");
g.addEdge("Montreal", "Bali");
g.addEdge("Manchester", "Bali");
