// Doctype javascript

let k=0;//for debugging
//loop to create 16x16 divs
for(let i = 0; i<16; i++){
    k++;
    for(let j = 0; j<16; j++){
        const div = document.createElement('div');
        div.style.border ='1px solid blue';
        //div.style.display ='flex';
        div.style.height = '200px';
        div.style.width = '200px';
        div.textContent = 'test '+k;
        document.getElementById('mainContainer').appendChild(div);
        k++
    }
}