console.log('Номер 1')

const employees = [
    { name: 'Анна', salary: 60000 },
    { name: 'Игорь', salary: 80000 },
    { name: 'Лена', salary: 55000 },
    { name: 'Дмитрий', salary: 90000 },
    { name: 'Ольга', salary: 65000 }
];

const srSalary = employees.reduce((acc, item)=>{return acc + item.salary}, 0) / employees.length;
console.log(`Средняя зарплата ${srSalary}`)

const mostSalaryEmpoye = []

employees.forEach(item => {
    if (item.salary > srSalary) {
        mostSalaryEmpoye.push(item)
    }
})
console.log(...mostSalaryEmpoye)
// reduce - Когда нам надо получить из массива другой тип данных
// forEach - Когда нам надо перебрать элементы массива


// console.log('Номер 2')

// const projects = [
//     { name: 'Проект A', techs: ['React', 'Node.js', 'MongoDB'] },
//     { name: 'Проект B', techs: ['Angular', 'Node.js', 'MySQL'] },
//     { name: 'Проект C', techs: ['React', 'PostgreSQL'] }
// ];

// const uniqTech = projects.reduce((acc, item)=>{if (!acc[item.techs]) {acc[item.techs]=[]}
//     acc[item.techs].push(item); return acc
// }, [])

// console.log(uniqTech)


console.log('Номер 3')

const team = [
    { name: 'Петр', tasksCompleted: 25 },
    { name: 'Анна', tasksCompleted: 30 },
    { name: 'Михаил', tasksCompleted: 20 }
];

const sum = team.reduce((acc, item)=>{return acc + item.tasksCompleted}, 0)

console.log(sum)


console.log('Номер 4')

const users = [
    { name: 'Алекс', age: 24 },
    { name: 'Катя', age: 19 },
    { name: 'Владимир', age: 31 },
    { name: 'Лена', age: 22 },
    { name: 'Саша', age: 20 }
];

const minAge = users.sort((a, b)=>a.age - b.age)

const minAgeUsers = minAge.slice(0, 3)

console.log(minAgeUsers)


console.log('Номер 5')

const clients = [
    { name: 'Виктория', email: 'victoria@example.com' },
    { name: 'Михаил', email: 'mikhail@example.com' },
    { name: 'Антон', email: 'admin@example.com' }
];

console.log(...clients.filter(item => item.email.includes('admin@example.com')))
  //filter это метод массива, который отбирает элементы по условию и возвращает новый массив
  


console.log('Номер 6')

const stock = [
    { name: 'Мяч', quantity: 12 },
    { name: 'Кубик', quantity: 5 },
    { name: 'Ручка', quantity: 20 }
];

const inventory = {}

stock.forEach(item => {
    inventory[item.name] = item.quantity
})

console.log(inventory)