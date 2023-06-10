

let divs;
let canvas;
let arr;

const btn = document.querySelector('#btn');
let pixels = document.querySelector('#pixels');
const inputs = document.querySelectorAll('#pixels, #grid, #pen, #back, #rainbow');
const control = document.querySelector('.mycanvas > .control');
let container = document.querySelector('.canvas > .container');
let rainbow = document.querySelector('#rainbow');

pa = document.createElement('div');
pa.classList.add('numb');
control.appendChild(pa);


function rest(){
    arr.forEach((divs) => {
    divs.classList.remove('col');
    divs.classList.remove('rainbow');
    pa.textContent = 20;
    });
} 

function EAS(){
    canvas = pixels.value;
    function handelUpdate() {
        const suffix = this.dataset .sizing || '';
        document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
       
    }

    inputs.forEach(input => input.addEventListener('change', handelUpdate));
    inputs.forEach(input => input.addEventListener('mousemove', handelUpdate));

    for( let i = 1; i <= canvas ** 2; i++){
        container.setAttribute('style', `diplay: grid; grid-template-columns:repeat(${canvas}, 1fr)`);    

        divs = document.createElement('div');
        divs.classList.add('color');
        container.appendChild (divs);
    }

    arr = Array.from(document.querySelectorAll('.color'));

    function a(){
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
        }));

        arr.forEach((div) => div.addEventListener('mouseover', (e) => {
            if(!isDown) return; //stop function to run
            e.target.classList.add('col');
        }));
    }

    function b(){
        let isDown = false;
    
        arr.forEach((div) => div.addEventListener('mousedown', (e) => {
            isDown = true;
            e.target.classList.add('rainbow');
        }));
    
        arr.forEach((div) => div.addEventListener('mouseup', (e) => {
            isDown = false;
        }));
    
        arr.forEach((div) => div.addEventListener('click', (e) => {
            isDown = false;
            e.target.classList.remove('rainbow');
        }));
     
       
        arr.forEach((div) => div.addEventListener('mouseover', (e) => {
            if(!isDown) return; //stop function to run
            e.target.classList.add('rainbow');
        }));
    }
a();

    let p = false;

    pen.addEventListener('click', () => { 
        p = true;  
        a(); 
    });
    rainbow.addEventListener('click', () => {
        if (p = false) return;
        b();
    });
}

EAS();

pixels.addEventListener('click', () => {
    arr.forEach((divs) => {
        container.removeChild(divs);
    });
    EAS();
});

btn.addEventListener('click', () => {
    rest();
});

