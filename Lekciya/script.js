// const colors = ['красный', 'зеленый', 'синий']

// colors.forEach((element, index, arr)=>{
//     console.log(`${index}: ${element}`)
//     console.log(arr);
// })

// //array.some(()={});
// //some проверяет, есть ли в массиве хотя бы 1 элемент, удовлетворяющий условию

// const numbers = [1,3,5,8];

// const hasEven = numbers.some((element)=>{return element % 2 === 0})
// console.log(hasEven)

// //array.every(()=>{})
// //Проверяет удовлетворяют ли все элементы массива условию

// const nums = [2,9191919199,6];
// const allEven = nums.every((element)=>{return element % 2 === 0})
// console.log(allEven)


// //Три основных метода для преобразования массивов

// //arrai.map(()=>{}) ИЗМЕНЯЕТ КАЖДЫЙ ЭЛЕМЕНТ МАССИВА, ВОЗВРАЩАЕТ НОВЫЙ МАССИВ ТОЙ ЖЕ
// //ДЛИНЫ С ИЗМЕНЕННЫМИ ЭЛЕМЕНТАМИ

// const oldNumbers = [7,16,59];
// const newNumbers = oldNumbers.map((elem)=>{return elem*2})

// console.log(...newNumbers)

// //arrai.filter(()=>{}) ВОЗВРАЩАЕТ МАССИВ В КОТОРОМ СОДЕРЖИТСЯ ТОЛЬКО ЧАСТЬ
// //ЭЛЕМЕНТОВ ИСХОДНОГО МАССИВА, КОТООРАЯ СООТВЕТСТВУЕТ УСЛОВИЮ

// const unFiltred = [1,4,7,10];
// const filtred = unFiltred.filter((elem)=>{return elem < 7})
// console.log(...filtred)

// //arrai.reduce(()=>{}) СВОРАЧИВАЕТ МАССИВ ДО 1 ЗНАЧЕНИЯ (ЧИСЛО ИЛИ СТРОКА)

// const reduceNumbers = [1,2,3,4,5,6,7,8,9];

// const sum = reduceNumbers.reduce((acc, elem)=>{return acc + elem}, 0)

// console.log(sum)

// const words = ['Привет', 'мир', '!'];

// const sentence = words.reduce((acc, elem)=>{return acc + ' ' + elem}, '')
// console.log(sentence)




const person = {
    name: 'Alex',
    age: 19,
    getAge: function(){
        return this.age
    },
    printName: function(){
        console.log(`Name: ${this.name}`)
    },
    upAge: function(){
        this.age = this.age + 1
    }
}

person.printName()

//Встроенные объекты в JS
//Math

console.log(Math.PI)

console.log(Math.min(-1,2,3,4,5,6,7,8,9))

const numbers = [1,5,765,3,2,4,7,8,8,2,2000]
console.log(Math.max(...numbers))
console.log(Math.min(...numbers))

//Date

const dateNow = new Date()
console.log(dateNow.toLocaleString())

const myBirth = new Date(2005, 3, 8)
// console.log(myBirth)
console.log(myBirth.toLocaleString())

//Получение компонентов даты и времени

console.log(myBirth.getFullYear())
console.log(myBirth.getMonth())
console.log(myBirth.getDay())
console.log(myBirth.getDate())
console.log(myBirth.getHours())

//Сколько прошло миллисекунд с 1 января 1970 года
console.log(myBirth.getTime())

//установка значений для компонентов даты и времени

const now = new Date()
console.log(now.toLocaleString())
now.setFullYear(2007)
now.setMonth(4)
now.setDate(1)
console.log(now.toLocaleString())


const mas = []

for (let i = 0; i < 1000; i++) {
    mas.push(i)
}

start = new Date();

for (let i = 0; 1 < 1000; i++) {
    let item = mas[i]
}



console.log()