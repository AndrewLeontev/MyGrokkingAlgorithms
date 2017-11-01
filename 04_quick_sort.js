const quickSort = array => {
	if (array.length < 2) {
		return array; //базовый случай
	} else {
		let pivot = array[0];  // Рекурсивный случай (опорный элемент)
		// Подмассив всех элементов, меньших опорного
		let less = array.slice(1).filter(function(el) { return el <= pivot; });
		// Подмассив всех элементов, больших опорного
		let greater = array.slice(1).filter(function(el) { return el > pivot; });
		return quickSort(less).concat([pivot], quickSort(greater));
	}

};

console.log(quickSort([10, 5, 2, 3, 7, 9]));