const form = document.getElementById("form")
//Событие submit - нажали на кнопку submitвнутри формы
form.addEventListener('submit', (event)=>{
    //Останавливает перезагрузку страницы
    event.preventDefault()
    console.log("отправка ")

    //Создаем специальный объект на основе формы
    //в этом объекте будут данные из формы
    const formData = new FormData(form)

    //get позволяет получить данные по name
    console.log(formData.get("name"))
    console.log(formData.get("age"))
    console.log(formData.get("sex"))

})