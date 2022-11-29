// Doctype javascript


//create user-specified number of divs and add to container
function drawGrid(size){
    const container = document.querySelector('.gridContainer');
    container.style.gridTemplateColumns = 'repeat('+size+',1fr)';
    for(let i=0;i<size**2;i++){
        const div = document.createElement('div');
        div.classList.add('gridItem');
        //div.textContent = i; //debugging
        document.getElementById('gridContainer').appendChild(div);
    }
    draw();
}

function draw(){
    const boxes = document.querySelectorAll('.gridItem');
    boxes.forEach((box) => {
    box.addEventListener('mouseover',()=>{
        let randomColor = [Math.floor(Math.random()*256),Math.floor(Math.random()*256),Math.floor(Math.random()*256),];
        box.style.backgroundColor='rgb('+randomColor[0]+','+randomColor[1]+','+randomColor[2]+')' });
    });
}

function start(){
    const boxes = document.querySelectorAll('.gridItem');
    boxes.forEach((box) => {
        box.remove()});//resets grid    
    let size = prompt('Enter number of rows/columns (maximum: 100');
    //check for valid input
    while(isNaN(size) || size<1 || size>100){
        alert('Invalid input');
        size = prompt('Enter number of rows/columns (maximum: 100');
    }
    drawGrid(size);
}

const boxes = document.querySelectorAll('.gridItem');
boxes.forEach((box) => {
    let randomColor = [Math.floor(Math.random()*256),Math.floor(Math.random()*256),Math.floor(Math.random()*256),];
    box.addEventListener('mouseover',()=>{
        box.style.backgroundColor='rgb('+randomColor[0]+','+randomColor[1]+','+randomColor[2]+')' });
    });

function resetGrid(){
    const boxes = document.querySelectorAll('.gridItem');
    boxes.forEach((box)=>{
            box.style.backgroundColor='white' });
    }