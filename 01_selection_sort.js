'use strict'

//поиск найменьшего значений в списке
const findSmallest = (arr) => {
	let smallest = arr[0];
	let smallest_index = 0;
	for (let i = 1; i < arr.length; i += 1) {
		if (arr[i] < smallest) {
			smallest = arr[i];
			smallest_index = i;
		}
	}

    return smallest_index;
};

//сортировка массива
const selectionSort = (arr) => {
	const newArr = [];
	for (let i = 0, length = arr.length; i < length; i += 1) {
		//Поиск меньшего элемента в списке и добавление его в новый список
		let smallest = findSmallest(arr);
		newArr.push(arr.splice(smallest, 1)[0]);
	}

	return newArr;
};

console.log(selectionSort([4, 2, 5, 3, 8, 7, 12, 9]));