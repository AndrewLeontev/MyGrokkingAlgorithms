let mas = [2, 3, 4, 7, 10, 1, 4, 5, 8, 2, 3];
// 4.1 Напишите код для функции sum
const sumarr = arr => {
    if (arr.length === 0) {
    	return 0;
    }
    return arr[arr.length - 1] + sumarr(arr.slice(1));
};

console.log(sumarr(mas));

// 4.2 Напишите рекурсивную функцию для подсчета элементов в списке
const countelem = arr => {
    if (arr.length === 0) {
    	return 0;
    }
    return 1 + countelem(arr.slice(1));
};
console.log(countelem(mas));

// 4.4 найдите найбольшее число в списке
const maxelem = arr => {
    // in progress
};