const toDoForm = document.querySelector('.toDoForm');
const FormInput = toDoForm.querySelector('input');
const toDoList = document.querySelector('#toDoList');

let toDos = [];

function deleteBtn(event) {
  const deleteLI = event.target.parentNode;
  deleteLI.remove();
  toDos = toDos.filter((item) => item.id != parseInt(deleteLI.id));
  saveToDos();
}

function saveToDos() {
  localStorage.setItem('toDos', JSON.stringify(toDos));
}

function addToDo(newInput) {
  const li = document.createElement('li');
  const span = document.createElement('span');
  const Btn = document.createElement('button');
  li.appendChild(span);
  li.appendChild(Btn);
  Btn.innerText = 'Delete';
  Btn.addEventListener('click', deleteBtn);
  li.id = newInput.id;
  span.innerText = newInput.value;
  toDoList.appendChild(li);
}

function toDoFormSubmit(event) {
  event.preventDefault();
  const newInput = FormInput.value;
  FormInput.value = '';
  const newInputObj = {
    id: Date.now(),
    value: newInput,
  };
  toDos.push(newInputObj);
  console.log(toDos);
  addToDo(newInputObj);
  saveToDos();
}

toDoForm.addEventListener('submit', toDoFormSubmit);

const getToDo = localStorage.getItem('toDos');

if (getToDo) {
  const toDoItem = JSON.parse(getToDo);
  toDos = toDoItem;
  toDoItem.forEach((item) => addToDo(item));
}
