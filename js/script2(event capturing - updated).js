let colorArray = ['white', '#FFA726', '#FFEB3B', '#CDDC39', '#388E3C', '#00E676', '#18FFFF', '#2196F3', '#C38EB5', '#AB47BC', '#F06292']
let colors = document.querySelectorAll('.colorPick');
let inputBox = document.querySelector('.input');
let add = document.querySelector('.add');
let remove = document.querySelector('.remove');
let list = document.querySelector('.list');
let color = colorArray[0];

let noteClass = document.querySelectorAll('.note');

noteClass.forEach(function (note) {
    note.addEventListener('click', function () {
        note.remove();
    });
});




for (let i = 0; i < colors.length; i++) {
    colors[i].style.backgroundColor = colorArray[i];
}

colors.forEach(function (item, index) {
    item.addEventListener('click',() => colorHandler(index));
});
function colorHandler(index) {

    color = colorArray[index];
    inputBox.style.backgroundColor = color;

}

document.body.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        addHandler();
    }
})
add.addEventListener('click', addHandler);
remove.addEventListener('click', removeInput);
function addHandler() {
    if (inputBox.value) {
        let newDiv = document.createElement('div');
        newDiv.classList.add('note');
        newDiv.style.backgroundColor = color;
        list.append(newDiv);
        let newSpan = document.createElement('span');
        newSpan.classList.add('text');
        newSpan.innerHTML = inputBox.value;
        newDiv.append(newSpan);
        inputBox.value = "";
        inputBox.style.backgroundColor = 'white'
        color = colorArray[0];
    }
}
function removeInput() {
    inputBox.value = "";
    inputBox.style.backgroundColor = 'white'
    color = colorArray[0];
}

list.addEventListener('click', function(event) {
    if (event.target.tagName.toLowerCase() === 'span') {
        event.target.parentElement.remove();
    }
})
