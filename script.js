// Doctype javascript


//create 256 divs and add to container
for(let i=1;i<257;i++){
    const div = document.createElement('div');
    div.classList.add('gridItem');
    div.textContent = i; //debugging
    document.getElementById('gridContainer').appendChild(div);
}

//add class when mouse hovers over box
const boxes = document.querySelectorAll('.gridItem');
boxes.forEach((box) => {
    box.addEventListener('mouseover',()=>{
        box.classList.add('drawn') });
    });

function resetGrid(){
    boxes.forEach((box)=>{
            box.classList.remove('drawn') });
        };