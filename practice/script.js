const form2 = document.getElementById("form2")
const password1 = document.getElementById("pass1")
const password2 = document.getElementById("pass2")

form.addEventListener('submit', (event)=>{
    event.preventDefault()
    const formData2 = new FormData(form2)
    alert(formData2.get("login"))

    if (password1 === password2) {
        alert(formData2.get("password"))
    }
    else {
        alert("Пароли не совпадают")
    }
})
