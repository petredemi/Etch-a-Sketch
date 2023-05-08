

const container = document.querySelector('.container');
const btn = document.querySelector('button');
const color = document.querySelectorAll('.color');

let canvas = 10;

function  hovering(){

    for( let i = 1; i <= canvas * canvas; i++){
        const color = document.createElement('div');
        color.classList.add('color');
        container.appendChild (color);
        container.setAttribute('style', `diplay: inline-grid; grid-template-columns: repeat(${canvas}, 1fr)`);
        
        color.addEventListener('mouseover', (e) => {
            color.style.background = 'blue';
            console.log(e);
            });
    
        
        }
    }
hovering();
