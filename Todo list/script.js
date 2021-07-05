const addButton = document.getElementById('add-btn');
const input = document.getElementById('input');
const list = document.getElementById('list');
addButton.addEventListener("click",function(){
    if(input.value===''){
        alert('Please Enter a value');
    }
    else{
        addTodo();
    }
});

function addTodo()
{
    const div = document.createElement('div');
    div.classList.add('todo');

    const li = document.createElement('li');
    li.classList.add('todo-item');
    li.innerHTML = input.value;
    div.appendChild(li);
    list.appendChild(div);
    input.value = '';


    const completeBtn = document.createElement('button');
    completeBtn.classList.add('complete-btn');
    completeBtn.innerHTML = '<i class="fas fa-check"></i>';
    div.appendChild(completeBtn);

    completeBtn.addEventListener('click', checked);
    function checked()
    {
        this.parentElement.classList.toggle('completed');
    }

    const trashBtn = document.createElement('button');
    trashBtn.classList.add('trash-btn');
    trashBtn.innerHTML = '<i class="fas fa-trash"></i>';
    div.appendChild(trashBtn);

    trashBtn.addEventListener('click', deleteCheck);
    function deleteCheck()
    {
        this.parentElement.remove();
    }
}

input.addEventListener("keypress", function (event)
{
    if (event.which === 13)
    {
        addTodo();
    }
});