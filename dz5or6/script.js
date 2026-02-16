// 1 номер

const orders = [
    {
      orderId: 1,
      customerName: 'Алексей',
      items: ['iPhone', 'Apple Watch'],
      totalPrice: 1200
    },
    {
      orderId: 2,
      customerName: 'Ольга',
      items: ['Samsung TV'],
      totalPrice: 800
    },
    {
      orderId: 3,
      customerName: 'Дмитрий',
      items: ['iPhone', 'MacBook'],
      totalPrice: 2500
    }
  ];
  
  console.log(orders.filter(item => item.items.includes('iPhone')))
  
  //filter это метод массива, который отбирает элементы по условию и возвращает новый массив
  
  // 2 номер
  
  const participants = [
      { name: 'Иван', age: 25, interests: ['JavaScript', 'Python'] },
      { name: 'Мария', age: 17, interests: ['Drawing', 'JavaScript'] },
      { name: 'Павел', age: 30, interests: ['Football', 'Java'] },
      { name: 'Ольга', age: 22, interests: ['JavaScript', 'Music'] }
  ];
  
  
  const suitableParticipants =[]
  
  participants.forEach(participant => {
  
      if (participant.age > 18 && participant.interests.includes('JavaScript')) {
          suitableParticipants.push(participant.name);
      }
  });
  
  console.log(suitableParticipants);
  
  //forEach метод, который позволяет перебирать каждый элемент массива и выполнять для него заданное действие. 
  //push метод, который добавляет один или несколько элементов в конец массива и возвращает новую длину массива
  //includes способ проверить наличие элемента в массиве или подстроки в строке.
  
  // 3 номер
  
  const products = [
    { id: 101, name: 'Карандаш', quantityInStock: 150 },
    { id: 102, name: 'Ручка', quantityInStock: 300 },
    { id: 103, name: 'Ластик', quantityInStock: 75 }
  ];
  
  
  const sumTovar = products.reduce((acc, product) => {
    return acc + product.quantityInStock;
  }, 0);
  
  console.log(`Общее количество товаров: ${sumTovar}`); 
  
  // Reduce это метод для работы с массивами, который применяет одну и ту же функцию
  // ко всем элементам слева-направо, возвращая на каждом этапе результирующее значение.
  
  // acc - аккумулятор, в который складываются промежуточные результаты.
  // В каждой следующей итерации значение в acc будет результатом, который вернулся на предыдущем шаге.
  
  // 4 номер
  
  const employees = [
      { name: 'Светлана', department: 'HR', salary: 50000 },
      { name: 'Алексей', department: 'IT', salary: 70000 },
      { name: 'Ирина', department: 'HR', salary: 52000 }
  ];
  
  
  function updateHR(employeesArray) {
      
      employeesArray.forEach(employee => {
          
          if (employee.department === 'HR') {
              
              employee.salary =  Math.round(employee.salary * 1.1);
          }
      });
  }
  
  updateHR(employees);
  console.log(...employees);
  
  // 5 номер
  
  const users = [
      { email: 'user1@example.com', roles: ['user', 'admin'] },
      { email: 'user2@example.com', roles: ['user'] },
      { email: 'admin@example.com', roles: ['admin', 'editor'] }
  ];
  
  const admins = []
  
  users.forEach(user => {
      if (user.roles.includes('admin')) {
          admins.push(user.email);
      }
  });
  
  console.log(admins); 
  
  //includes способ проверить наличие элемента в массиве или подстроки в строке.
  //push метод, который добавляет один или несколько элементов в конец массива и возвращает новую длину массива

// 8 номер

const articles = [
    { title: 'Введение в JavaScript', content: 'Основы JS...' },
    { title: 'CSS стили', content: 'Работа с каскадами' },
    { title: 'Асинхронность в JavaScript', content: 'Обещания и async/await' }
];

function filterByJavaScript(articles) {
    return articles.filter(article => 
        article.title.toLowerCase().includes('javascript') ||
        article.content.toLowerCase().includes('javascript')
    );
}

const filteredArticles = filterByJavaScript(articles);
console.log(...filteredArticles);

// 9 номер

const applicants = [
    { name: 'Марина', skills: ['JavaScript', 'React'], desiredPosition: 'Frontend' },
    { name: 'Игорь', skills: ['Java', 'Spring'], desiredPosition: 'Backend' },
    { name: 'Сергей', skills: ['Python', 'Django'], desiredPosition: 'Backend' }
];

const javaSkills = []

applicants.forEach(candidate => {
    if (candidate.skills.includes('Java')) {
        javaSkills.push(candidate);
    }
});

console.log(...javaSkills);