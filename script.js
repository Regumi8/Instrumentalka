const colors = ['красный', 'зеленый', 'синий']

colors.forEach((element, index, arr)=>{
    console.log(`${index}: ${element}`)
    console.log(arr);
})

//array.some(()={});
//some проверяет, есть ли в массиве хотя бы 1 элемент, удовлетворяющий условию

const numbers = [1,3,5,8];

const hasEven = numbers.some((element)=>{return element % 2 === 0})
console.log(hasEven)

//array.every(()=>{})
//Проверяет удовлетворяют ли все элементы массива условию

const nums = [2,9191919199,6];
const allEven = nums.every((element)=>{return element % 2 === 0})
console.log(allEven)


//Три основных метода для преобразования массивов

//arrai.map(()=>{}) ИЗМЕНЯЕТ КАЖДЫЙ ЭЛЕМЕНТ МАССИВА, ВОЗВРАЩАЕТ НОВЫЙ МАССИВ ТОЙ ЖЕ
//ДЛИНЫ С ИЗМЕНЕННЫМИ ЭЛЕМЕНТАМИ

const oldNumbers = [7,16,59];
const newNumbers = oldNumbers.map((elem)=>{return elem*2})

console.log(...newNumbers)

//arrai.filter(()=>{}) ВОЗВРАЩАЕТ МАССИВ В КОТОРОМ СОДЕРЖИТСЯ ТОЛЬКО ЧАСТЬ
//ЭЛЕМЕНТОВ ИСХОДНОГО МАССИВА, КОТООРАЯ СООТВЕТСТВУЕТ УСЛОВИЮ

const unFiltred = [1,4,7,10];
const filtred = unFiltred.filter((elem)=>{return elem < 7})
console.log(...filtred)

//arrai.reduce(()=>{}) СВОРАЧИВАЕТ МАССИВ ДО 1 ЗНАЧЕНИЯ (ЧИСЛО ИЛИ СТРОКА)

const reduceNumbers = [1,2,3,4,5,6,7,8,9];

const sum = reduceNumbers.reduce((acc, elem)=>{return acc + elem}, 0)

console.log(sum)