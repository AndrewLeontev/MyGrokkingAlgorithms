'use strict'

//граф
const graph = {};
graph['start']['a'] = 6;
graph['start']['b'] = 2;

graph['a'] = {}
graph['a']['fin'] = 1;

graph['b'] = {}
graph['b']['a'] = 3;
graph['b']['fin'] = 5;

graph['fin'] = {};

//таблица стоимости
const costs = {};
costs['a'] = 6;
costs['b'] = 2;
costs['fin'] = Infinity;

//таблица родителей
const parents = {};
parents['a'] = 'start';
parents['b'] = 'start';
parents['fin'] = null;

let processed = [];

const find_lowest_cost_node = costs => {
    let lowest_cost = Infinity;
    let lowest_cost_node = null;

    for (let node in costs) {
    	let cost = costs[node];
    	if (cost < lowest_cost && (processed.indexOf(node) === -1)) {
    		lowest_cost = cost;
    		lowest_cost_node = node;
    	}
    }

    return lowest_cost_node;
};

let node = find_lowest_cost_node(costs);

while(node !== null) {
	let cost = costs[node];
	let neighbors = grapph[node];
	Object.keys(neighbors).forEach(function(n) {
		let new_cost = cost + neighbors[n];
if (costs[n] > new_cost) {
      // ... update the cost for this node
      costs[n] = new_cost;
      // This node becomes the new parent for this neighbor.
      parents[n] = node;
    }
  });

  // Mark the node as processed
  processed = processed.concat(node);
  
  // Find the next node to process, and loop
  node = find_lowest_cost_node(costs);
};

console.log("Cost from the start to each node:");
console.log(costs); // { a: 5, b: 2, fin: 6 }