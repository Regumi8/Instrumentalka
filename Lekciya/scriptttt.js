// const prices = [50, 30, 200, 150];
// const hasHighPrice = prices.some(price => price > 100);
// console.log(hasHighPrice); // true


// filter - Когда нам надо получить массив с частью исходных данных
// map - Когда нам надо получить массив изменив каждый элемент
// reduce - Когда нам надо получить из массива другой тип данных
// forEach - Когда нам надо перебрать элементы массива
// acc - 


const users = [
    { id: 101, name: 'Анатолий', age: 30 },
    { id: 102, name: 'Юлия', age: 25 },
    { id: 103, name: 'Игорь', age: 35 }
];

const result = users.reduce((acc, item)=>{
    acc[item.id] = {name: item.name, age: item.age}; return acc}, {})

console.log(result)


const orders = [
    { orderId: 1, status: 'Обрабатывается' },
    { orderId: 2, status: 'Доставлен' },
    { orderId: 3, status: 'Обрабатывается' },
    { orderId: 4, status: 'Отменён' }
];

const groupedOrders = orders.reduce((acc, order) => {
    if (!acc[order.status]) { acc[order.status] = [] }
    acc[order.status].push(order); return acc },
    {});

console.log(groupedOrders);