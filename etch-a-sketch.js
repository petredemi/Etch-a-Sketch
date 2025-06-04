

let divs;
let canvas;
let arr;

const btn = document.querySelector('#btn');
const erase = document.querySelector('#ruber');
const pixelsNumber = document.querySelector('#pixels');
const inputs = document.querySelectorAll('#grid, #back');
//const sound = document.querySelector('#sound');
const picture = document.querySelector('#img');
const canvasBackground = document.querySelector('.mycanvas > .canvas');
const containerBackground = document.querySelector('#back')
const hue = document.querySelector('#hue');
console.log(hue);

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


//let onoffSound = 1;
let imgOnOff = 0;
let pencolors = 0;
let hueOnOff = 0;

/*function soundOnOff(){
    if(sound.checked == true){
        return onoffSound = 0;
        } else { return onoffSound = 1;}
}*/
function hueFunction(){
    if(hue.checked == false){
        return hueOnOff = 1;
        } else { return hueOnOff = 0;}
}
/*sound.addEventListener('click', () => {
    soundOnOff();
});*/
hueFunction()
hue.addEventListener('click', (e) => {
    hueFunction();
    console.log(e);
});

function clearCanvas(){
    arr.forEach((divs) => {
    divs.style.backgroundColor = '';
    divs.style = '';
    });
} 

function canvasMaker(){
    for( let i = 1; i <= canvas ** 2; i++){
        container.setAttribute('style', `diplay: grid; grid-template-columns:repeat(${canvas}, 1fr)`);    
        divs = document.createElement('div');
        divs.classList.add('color');
        container.appendChild (divs);
        if(imgOnOff == 0){
        container.style.backgroundColor = 'var(--back)';

        }else if (imgOnOff == 1){ 
            divs.setAttribute('style', `background: ${pen.value}; border: 0px solid white; border-style: outset`);
        }
    }
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
    canvasMaker();
    arr = Array.from(document.querySelectorAll('.color'));
let mobile = false

if("ontouchstart" in document.documentElement){
    console.log('your devaice is touch device')
    mobile = true;
    document.getElementById('desktop').innerHTML = 'touchscreen'

}else{
    console.log('your divice is not a touch screen')
    mobile = false
    document.getElementById('desktop').innerHTML = 'not a touch screen'

}
console.log(mobile)

    function penColor_Eraser(){
        let isDown = false;
        let x = 0;
        let o = 20;
        arr.forEach((div) => div.addEventListener('mousedown', (e) => {
            isDown = true; 
             x = x + 1;
            
            if (hueOnOff == 0) {
                o = div.style.opacity * 100 + 20;
                if ( o == 100){ o = 100}
            } else { o = 100};

            if ( x == 6){ x = 0};
                if (pencolors == 0){
                   div.setAttribute('style', `background: ${pen.value};
                    border: 0px solid white; border-style: inset`);
                    div.style.opacity = (`${o}%`);
              
                } else if (pencolors == 1){ 
                        div.style.backgroundColor = `${rbw[x]}`;
                        div.style.opacity = (`100%`);

                } else if( pencolors == 2){
                    div.removeAttribute('style');
                }
         /*   if( onoffSound == 1){
                s3.currentTime = 0;
                s3.play();
            } else{ return;} */
        }));
            arr.forEach((div) => div.addEventListener('mouseup', (e) => { //equivalent touchend event
                isDown = false;
            }));
            // touchend event
            arr.forEach((div) => div.addEventListener('mouseenter', (e) => { //equivalent with touchmove
                        if(!isDown) return; //stop function to run
                        x = x + 1;
                        if ( x == 6){ x = 0}; 
            
                        if (hueOnOff == 0) {
                            o = div.style.opacity * 100 + 20;
                            if ( o == 100){ o = 100}
                        } else { o = 100};
                     if (pencolors == 0){
                            div.setAttribute('style', `background: ${pen.value}; transition: 0.7s;
                            border: 0px solid white; border-style: inset`);
                            div.style.opacity = (`${o}%`);
            
                        } else if (pencolors == 1){
                          //  i = Math.floor(Math.random() * 6);
                            div.style.backgroundColor = `${rbw[x]}`;
                            div.style.opacity = (`100`);
                            div.style.transition = '0.9s';
                        }else if (pencolors == 2){
                            div.removeAttribute('style');
                        }
                  /*  if( onoffSound == 1){ 
                        s4.currentTime = 0;
                        s4.play();
                    } else {return;}*/
                    }));            
        arr.forEach((div) => div.addEventListener('mouseup', (e) => { //equivalent touchend event
            isDown = false;
        }));
    }
  //  penColor_Eraser()
    

picture.addEventListener('click', (e) => {
    imgOnOff = 1;
    let p = Math.floor(Math.random() * 15) + 1;
    canvasBackground.setAttribute('style', `background-image: url("./images/IMG${p}.jpg")`);
    arr.forEach((divs) => {
        container.removeChild(divs);
    });
    E_A_S();
});

pen.addEventListener('click', () => {
        pencolors = 0;
    });
rainbow.addEventListener('click', () => {
        pencolors = 1;
    });

erase.addEventListener('click', (e) => {
        pencolors = 2;
        e.target.classList.add('playing');
    });
containerBackground.addEventListener('click', () => {
    arr.forEach((divs) => {
        divs.removeAttribute('style');
    });
    container.style.backgroundColor = 'var(--back)';
    });
}


E_A_S();

pixelsNumber.addEventListener('click', () => {
    arr.forEach((divs) => {
        container.removeChild(divs);
    });
    E_A_S();
});


btn.addEventListener('click', (e) => {
    e.target.classList.add('playing');
    clearCanvas();
});

btn.addEventListener('click', (e) => {
    e.target.classList.remove('playing');
});

erase.addEventListener('click', (e) => {
    e.target.classList.remove('playing');
}); 

function aa(x){
         x.setAttribute('style', 'background-color:red')
}
function getTagname(event) {
  let x = event.touches[0].target;
  //x.setAttribute('style', 'background-color:red')
  aa(x)
  console.log(x)
}
let color = document.querySelectorAll('.color');
//canvasBackground.addEventListener('touchmove', getTagname);
color.forEach((div) => div.addEventListener('touchstart', () =>{
    div.style.backgroundColor = 'red'
}))
color.forEach((div) => div.addEventListener('touchmove', () =>{
    div.style.backgroundColor = 'red'
}))

