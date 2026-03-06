const form2 = document.getElementById("form2")
const password1 = document.getElementById("password1")
const password2 = document.getElementById("password2")

form2.addEventListener('submit', (event)=>{
    event.preventDefault()
    const formData2 = new FormData(form2)
    const password1 = formData2.get("password1")
    const password2 = formData2.get("password2")
    if (password1 === password2) {
        alert(`Логин ${login} \nПароль ${password1}`)
    }
    else {
        alert("Пароли не совпадают")
    }
})
