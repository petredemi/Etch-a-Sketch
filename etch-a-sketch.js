

let divs;
let canvas;
let arr;

const btn = document.querySelector('#btn');
const erase = document.querySelector('#ruber');
const pixelsNumber = document.querySelector('#pixels');
const inputs = document.querySelectorAll('#grid, #back');
const sound = document.querySelector('#sound');

const pen = document.querySelector('#pen');
let container = document.querySelector('.canvas > .container');
const rainbow = document.querySelector('#rainbow');
const rbw = ['red', 'yellow', 'green', 'blue', 'pink', 'orange'];

const s1 = document.querySelector('#s1');
const s2 = document.querySelector('#s2');
const s3 = document.querySelector('#s3');
const s4 = document.querySelector('#s4');
const s5 = document.querySelector('#s5');
const s6 = document.querySelector('#s6');
const s7 = document.querySelector('#s7');
const s8 = document.querySelector('#s8');
const s9 = document.querySelector('#s9');

let onoff = 1;
let pencolors = 0;

function soundOnOff(){
    if(sound.checked == true){
        return onoff = 0;
        } else { return onoff = 1;}
}

sound.addEventListener('click', () => {
    soundOnOff();
});


function clearCanvas(){
    arr.forEach((divs) => {
    divs.style.backgroundColor = '';
    divs.style = '';
    });
} 

function E_A_S(){
    
    canvas = pixels.value;
    function handelUpdate(){
        const suffix = this.dataset .sizing || '';
        document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
    }
    function gridBorderAndBackground(){
        inputs.forEach(input => input.addEventListener('change', handelUpdate));
        inputs.forEach(input => input.addEventListener('click', handelUpdate));
    }
    gridBorderAndBackground();

    for( let i = 1; i <= canvas ** 2; i++){
        container.setAttribute('style', `diplay: grid; grid-template-columns:repeat(${canvas}, 1fr)`);    
        divs = document.createElement('div');
        divs.classList.add('color');
        container.appendChild (divs);
    }

    arr = Array.from(document.querySelectorAll('.color'));

    function penColor_Eraser(){
        let isDown = false;
    
        arr.forEach((div) => div.addEventListener('mousedown', (e) => {
            isDown = true;
                if (pencolors == 0){
                    div.setAttribute('style', `background: ${pen.value}; transition: o.9s;`);
                } else if (pencolors == 1){ 
                        div.style.backgroundColor = `${rbw[0]}`;
                } else if( pencolors == 2){
                    div.removeAttribute('style');
                }
            if( onoff == 1){
                s4.play();
            } else{ return;}      
        }));
        arr.forEach((div) => div.addEventListener('mouseup', (e) => {
            isDown = false;
        }));
    
        arr.forEach((div) => div.addEventListener('mouseover', (e) => {
            if(!isDown) return; //stop function to run
         if (pencolors == 0){
            div.style.backgroundColor = `${pen.value}`;
            } else if (pencolors == 1){ 
                i = Math.floor(Math.random() * 6);
                div.style.backgroundColor = `${rbw[i]}`;
                div.style.transition = '0.9s';
            }else if (pencolors == 2){
                div.removeAttribute('style');
            }
        if( onoff == 1){ s4.play();}
        }));

    };

penColor_Eraser();

pen.addEventListener('click', () => {
        pencolors = 0;
    });
rainbow.addEventListener('click', () => {
        pencolors = 1;
    });

erase.addEventListener('mousedown', (e) => {
    pencolors = 2;
    e.target.classList.add('playing');
    });
}   

E_A_S();

pixelsNumber.addEventListener('click', () => {
    arr.forEach((divs) => {
        container.removeChild(divs);
    });
    E_A_S();
});

btn.addEventListener('mousedown', (e) => {
    e.target.classList.add('playing');
    clearCanvas();
});

btn.addEventListener('mouseup', (e) => {
    e.target.classList.remove('playing');
});
erase.addEventListener('mouseup', (e) => {
    e.target.classList.remove('playing');
}); 


    