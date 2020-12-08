function onDragStart(event){
    console.log(event.clientX, event.clientY)
    event.dataTransfer.setData('text/plain', event.target.id)

}

function onDragOver(event){
    event.preventDefault();
}

function onDrop(event){
    const id = event.dataTransfer.getData('text');
    const draggableElement = document.getElementById(id);
    const dropzone = event.target;
    dropzone.appendChild(draggableElement);
    event.dataTransfer.clearData();
}