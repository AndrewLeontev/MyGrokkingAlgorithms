'use strict'
const graph = {};
graph["you"] = ["alice", "bob", "claire"];
graph["bob"] = ["anuj", "peggy"];
graph["alice"] = ["peggy"];
graph["claire"] = ["thom", "jonny"];
graph["anuj"] = [];
graph["peggy"] = [];
graph["thom"] = [];
graph["jonny"] = [];

const person_is_seller = name => name[name.length - 1] === 'm';
const search = name => {
    let search_queue = [];
    search_queue = search_queue.concat(graph[name]);
    const searched = [];

    while (search_queue.length) {
    	let person = search_queue.shift();
    	if (searched.indexOf(person) === -1) {
    		if (person_is_seller(person)) {
    			console.log(person + ' is a mango seller!');
    			return true;
    		} else {
    			search_queue = search_queue.concat(graph[person]);
    			searched.push(person);
    		}
    	}
    }

    return false;
};

console.log(search('you'));