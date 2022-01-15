const cors = require('cors');

let todoInput       // tresc zadania
let errorInfo       // informacja o braku zadan
let addBtn          // przycisk ADD
let ulList          // lista zadań
let newTodo         // nowe zadanie

let popup          // popup screen
let popupInfo      // pusty input alert
let todoToEdit     // edytowany task
let popupInput     // input popup
let popupAddBtn    // przycisk zatwierdz
let popupCloseBtn  // przycisk anuluj


const main =() => {
    prepare_Elements()
    prepare_Events()
    fechNotes()
}

fechNotes() {
    
}






const prepare_Elements =() => {
    todoInput      = document.querySelector('.todo-input');
    errorInfo      = document.querySelector('.error-info');
    addBtn         = document.querySelector('.btn-add');
    ulList         = document.querySelector('.todolist ul');
    popup          = document.querySelector('.popup');
    popupInfo      = document.querySelector('.popup-info');
    popupInput     = document.querySelector('.popup-input');
    popupAddBtn    = document.querySelector('.accept');
    popupCloseBtn  = document.querySelector('.cancel');
}

const prepare_Events =() => {
    addBtn.addEventListener('click', addNewTodo)
    ulList.addEventListener('click', checkToggleBtn)
    popupCloseBtn.addEventListener('click',popupClose)
    popupAddBtn.addEventListener('click', changeTodoText)
}


// Dodanie nowego taska
const addNewTodo =() => {
    if (todoInput.value !=='') {
        newTodo = document.createElement('li')
        newTodo.textContent = todoInput.value
        ulList.append(newTodo)

        createToolsArea()
        todoInput.value =''
        errorInfo.textContent = ''
    }
    else {
        errorInfo.textContent = 'Wpisz treść zadania!'
    }
}

// Dodanie opcji done, edit, delete
const createToolsArea = () => {

    const toolsPanel = document.createElement('div')
    toolsPanel.classList.add('tools')
    newTodo.append(toolsPanel)

    const completeBtn = document.createElement('button')
    completeBtn.classList.add('complete')
    completeBtn.innerHTML = 'DONE'


    const editBtn = document.createElement('button')
    editBtn.classList.add('edit')
    editBtn.textContent ='EDIT'


    const deleteBtn = document.createElement('button')
    deleteBtn.classList.add('delete')
    deleteBtn.innerHTML = 'DELETE'

    toolsPanel.append(completeBtn,editBtn,deleteBtn)
}


const checkToggleBtn = e => {
    if(e.target.matches('.complete')) {
        e.target.closest('li').classList.toggle('completed')
        e.target.classList.toggle('completed')
    }else if(e.target.matches('.edit')) {
        editTodo(e)
    }else if (e.target.matches('.delete')) {
        console.log('delete');
    }
}


const editTodo = (e) => {
    todoToEdit = e.target.closest('li')

    popupInput.value = todoToEdit.firstChild.textContent
    popup.style.display = 'flex'
}
const popupClose = () => {
    popup.style.display = 'none'
    popupInfo.textContent = ''
}

const changeTodoText = () => {
    if(popupInput.value !== '') {
        todoToEdit.firstChild.textContent = popupInput.value
        popupInfo.textContent = ''
        popupClose()
    }else {
        popupInfo.textContent = 'Musisz podać treść zadania'
    }
}

const deleteTodo =(e) => {
    
}


document.addEventListener('DOMContentLoaded',main)