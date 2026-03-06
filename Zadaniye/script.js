const btn = document.getElementById('addBtn')
const list = document.getElementById('taskList')

btn.addEventListener('click', function() {
    const newItem = document.createElement('li')
    
    newItem.textContent = 'Эйяфьядрайёкюдль'
    
    list.appendChild(newItem)
});

const btn3 = document.getElementById('createTableBtn')
const container2 = document.getElementById('tableContainer')

btn3.addEventListener('click', function() {
    const table = document.createElement('table')
    table.setAttribute('border', '1')
    let count = 1

    for (let i = 0; i < 5; i++) {
        const tr = document.createElement('tr')
        for (let j = 0; j < 7; j++) {
            const td = document.createElement('td')
            td.textContent = count++
            tr.appendChild(td)
        }
        table.appendChild(tr)
    }
    container2.appendChild(table)
});

const btn4 = document.getElementById('createFormBtn')
const container3 = document.getElementById('formContainer')

btn4.addEventListener('click', function() {
    const loginForm = document.createElement('form')
    const loginInput = document.createElement('input')
    loginInput.type = 'text'
    loginInput.placeholder = 'Введите логин'

    const passInput = document.createElement('input')
    passInput.type = 'password'
    passInput.placeholder = 'Введите пароль'

    const submitBtn = document.createElement('button')
    submitBtn.type = 'submit'
    submitBtn.textContent = 'Войти'

    loginForm.appendChild(loginInput)
    loginForm.appendChild(passInput)
    loginForm.appendChild(submitBtn)

    container3.innerHTML = ''
    
    container3.appendChild(loginForm);
})

// const IMAGE_SRC = './result_smeshnayaLyagushka.jpg';
// const btn5 = document.getElementById('addImageBtn');
// const gallery = document.getElementById('gallery');

// btn5.addEventListener('mousedown', function() {
//     addImage();
//     timer = setInterval(addImage, 200);
//     const img = document.createElement('img');
//     img.src = IMAGE_SRC
//     gallery.appendChild(img);
// });

const IMAGE_SRC = './result_smeshnayaLyagushka.jpg';
const btn5 = document.getElementById('addImageBtn');
const gallery = document.getElementById('gallery');

let timer;

function addImage() {
    const img = document.createElement('img');
    img.src = IMAGE_SRC + '?random=' + Math.random();
    img.alt = 'Фото';
    gallery.appendChild(img);
}

btn5.addEventListener('mousedown', function() {
    addImage();
    
    timer = setInterval(addImage, 200);
});

btn5.addEventListener('mouseup', function() {
    clearInterval(timer);
});

btn5.addEventListener('mouseleave', function() {
    clearInterval(timer);
});


