let id=0;

document.getElementById('add').addEventListener('click', () => {

    let table = document.getElementById('list');
    let row = table.insertRow(1);
    row.setAttribute('id', `item-${id}`);
    row.insertCell(0).innerHTML = document.getElementById('new-list-item').value;
    row.insertCell(1).innerHTML = document.getElementById('item-quantity').value;
    let actions = row.insertCell(2);
    actions.appendChild(createRemoveButton(id++));
    document.getElementById('new-list-item').value = '';
    document.getElementById('item-quantity').value = '';
});

function createRemoveButton(id) {
    let btn = document.createElement('button');
    btn.className = 'btn btn-primary';
    btn.id = id;
    btn.innerHTML = 'Remove Item';
    btn.onclick = () => {
        let itemToDelete = document.getElementById(`item-${id}`);
        itemToDelete.parentNode.removeChild(itemToDelete);
    };
    return btn;
}