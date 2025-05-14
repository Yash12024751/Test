const inputBox = document.querySelector('#inputBox')
const addBtn = document.querySelector('.addBtn')
const container = document.querySelector('.container')
let task = ''

inputBox.addEventListener('keyup', function (event) {
    task = event.target.value
})

addBtn.addEventListener('click', function (event) {
    event.preventDefault()
    console.log(task)
    if (task === '')
        return
    addTask()
})

function addTask() {
    const liTag = document.createElement('li')
    liTag.classList.add('task-item')

    const spanTag = document.createElement('span')

    const checkBox = document.createElement('input')
    checkBox.setAttribute('type', 'checkbox')

    const pTag = document.createElement('p')
    pTag.textContent = task

    checkBox.addEventListener('click', function () {
        if (checkBox.checked) {
            pTag.classList.add('checked')
        }
        else {
            pTag.classList.remove('checked')
        }
    })

    spanTag.appendChild(checkBox)
    spanTag.appendChild(pTag)


    const spanTag2 = document.createElement('span')

    const delBtn = document.createElement('button')
    delBtn.textContent = 'Delete'

    delBtn.addEventListener('click', function () {
        liTag.remove()
    })

    const editBtn = document.createElement('button')
    editBtn.textContent = 'Edit'

    let isEditing = false

    editBtn.addEventListener('click', function () {
        if (checkBox.checked === true) {
            editBtn.classList.add('disabled')
            return
        }
        else {
            editBtn.classList.remove('disabled')
        }
        isEditing = !isEditing  
        if (isEditing === true) {
            editBtn.textContent = 'Save'
            pTag.contentEditable = true
            pTag.focus()
        }
        else {
            editBtn.textContent = 'Edit'
            pTag.contentEditable = false
        }
    })


    spanTag2.appendChild(editBtn)
    spanTag2.appendChild(delBtn)

    liTag.appendChild(spanTag)
    liTag.appendChild(spanTag2)


    container.appendChild(liTag)

    inputBox.value = ''
task = ''
}