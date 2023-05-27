

let divs = '';
let canvas = 50;

const btn = document.querySelector('#btn');
const pixels = document.querySelector('#pixels');
const inputs = document.querySelectorAll('#grid, #pan, #back');
const control = document.querySelector('.mycanvas > .control');
const container = document.querySelector('.container');


pa = document.createElement('div');
pa.classList.add('numb');
control.appendChild(pa);
const numb = document.querySelector('.container > .numb');
let b;


//pixels.addEventListener('change', pixelUpdate);

//pixels.addEventListener('change', () => {
  //  document.getElementById('demo').innerHTML = pixels.value;
    //canvas = document.getElementById('demo').innerHTML;

    //return canvas;
//});
function a(){
    var  x = document.getElementById('pixels').value;
    document.getElementById('demo').innerHTML = x;
    
}

const changeV = () => {
    pa.textContent = pixels.value;
    canvas = this.pixels.value;
 //   document.documentElement.setProperty(`--${this.name}`, this.value);

    return canvas;

  //  console.log(canvas);
}
function rest(){
    arr.forEach((divs) => {
    divs.classList.remove('col');
   // container.remove('div');
    pixels.value = 20;
    pa.textContent = 20;
});
} 
function ad(){
    divs.classList.add('col');
}

function handelUpdate() {
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);

}
inputs.forEach(input => input.addEventListener('change', handelUpdate));
inputs.forEach(input => input.addEventListener('click', handelUpdate));


function hovering(canvas){
    container.setAttribute('style', `diplay: grid; grid-template-columns:repeat(${canvas}, 1fr)`);    

    for( let i = 1; i <= canvas * canvas; i++){
        divs = document.createElement('div');
        divs.classList.add('color');
        container.appendChild (divs);
    }
}
changeV();
pixels.addEventListener('change', changeV);
//pixels.addEventListener('click', changeV);


hovering(canvas);

const arr = Array.from(document.querySelectorAll('.color'));

let isDown = false;

arr.forEach((div) => div.addEventListener('mousedown', (e) => {
    isDown = true;
    e.target.classList.add('col');
}));

arr.forEach((div) => div.addEventListener('mouseup', (e) => {
    isDown = false;
 }));

arr.forEach((div) => div.addEventListener('mouseenter', (e) => {

}));
arr.forEach((div) => div.addEventListener('click', (e) => {
    isDown = false;
    e.target.classList.remove('col');
 //   console.log(isDown);

 }));
 
arr.forEach((div) => div.addEventListener('mouseover', (e) => {
    if(!isDown) return; //stop function to run
    e.target.classList.add('col');
    console.log(isDown);
    console.log('do work');
}));
btn.addEventListener('click', () => {
    rest();
});




