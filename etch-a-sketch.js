

let divs;
let canvas;
let arr;
let div;

const btn = document.querySelector('#btn');
const pixels = document.querySelector('#pixels');
const inputs = document.querySelectorAll('#grid, #pen, #back');
const pen = document.querySelector('#pen');
let container = document.querySelector('.canvas > .container');
const grid = document.querySelector('#grid');
const rainbow = document.querySelector('#rainbow');
const rbw = ['red', 'yellow', 'green', 'blue', 'pink', 'orange'];


function clearCanvas(){
    arr.forEach((divs) => {
    divs.classList.remove('col');
    divs.style.backgroundColor = '';

    });
} 

function E_A_S(){
    
    canvas = pixels.value;
    function handelUpdate() {
        const suffix = this.dataset .sizing || '';
        document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
    }
    function colors(){
        inputs.forEach(input => input.addEventListener('change', handelUpdate));
     //   inputs.forEach(input => input.addEventListener('click', handelUpdate));
    }
    colors();

    for( let i = 1; i <= canvas ** 2; i++){
        container.setAttribute('style', `diplay: grid; grid-template-columns:repeat(${canvas}, 1fr)`);    
        divs = document.createElement('div');
        divs.classList.add('color');
        container.appendChild (divs);
    }

    arr = Array.from(document.querySelectorAll('.color'));

    function a(e){
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
            e.target.classList.remove('col');
        }));
        
        arr.forEach((div) => div.addEventListener('mousemove', (e) => {
            if(!isDown) return; //stop function to run
            e.target.classList.add('col');
        }));
    }
    function b(){
        let isDown = false;
    
        arr.forEach((div) => div.addEventListener('mousedown', (e) => {
            isDown = true;
            div.style.backgroundColor = `${rbw[0]}`;

        }));
    
        arr.forEach((div) => div.addEventListener('mouseup', (e) => {
            isDown = false;
        }));
    
        arr.forEach((div) => div.addEventListener('click', (e) => {
            isDown = false;
            div.style.backgroundColor = '';
        }));

        arr.forEach((div) => div.addEventListener('mouseover', (e) => {
            i = Math.floor(Math.random() * 6);
            if(!isDown) return; //stop function to run 
            div.style.backgroundColor = `${rbw[i]}`;
        
        }));
    };

    function c(){
        let isDown = false;
    
        arr.forEach((div) => div.addEventListener('mousedown', (e) => {
            isDown = true;
            div.style.backgroundColor = `${pen.value}`;

        }));
    
        arr.forEach((div) => div.addEventListener('mouseup', (e) => {
            isDown = false;
        }));
    
        arr.forEach((div) => div.addEventListener('click', (e) => {
            isDown = false;
            div.style.backgroundColor = '';
        }));

        arr.forEach((div) => div.addEventListener('mouseover', (e) => {
            if(!isDown) return; //stop function to run
            div.style.backgroundColor = `${pen.value}`;
        
        }));
    };

    //a();
    c();

    rainbow.addEventListener('click', () => {
        b();
    });

    pen.addEventListener('click', () => {
        c();
    });
   
}    

E_A_S();

pixels.addEventListener('click', () => {
    arr.forEach((divs) => {
        container.removeChild(divs);
    });
    E_A_S();
});

btn.addEventListener('click', () => {
    clearCanvas();
});

