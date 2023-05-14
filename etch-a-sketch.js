

let divs = '';


const btn = document.querySelector('#btn');
const color = document.querySelector('#color');
const pixels = document.querySelector('#pixels');
const container = document.querySelector('.container');

const inputColor = document.querySelectorAll('.control #pen');
const inputCanvas = document.querySelectorAll('.control #pixels');
let canvas = document.getElementById('pixels').value;


function rest(){
    arr.forEach((divs) => {
    divs.classList.remove('col');
});
}

/*function canvasSize() {
    const sz = this.dataset.value || '';
    document.documentElement.setProperty(`--${this.name}`, this.value + sz);
    console.log(sz);

}*/
function penColor() {
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
  }
//inputCanvas.forEach(input => input.addEventListener('change', canvas));

inputColor.forEach(input => input.addEventListener('change', penColor));
inputColor.forEach(input => input.addEventListener('mouseover', penColor));

container.setAttribute('style', `diplay: inline-grid; grid-template-columns: repeat(${canvas}, 1fr)`);    

function  hovering(){
    
    for( let i = 1; i <= canvas * canvas; i++){
        divs = document.createElement('div');
        divs.classList.add('color');
        container.appendChild (divs);

        divs.addEventListener('mousemove', (e) => {
               e.target.classList.add('col')
            });

        divs.addEventListener('click', (e) => {
            e.target.classList.remove('col');
        });
    }

}
hovering();

const arr = Array.from(document.querySelectorAll('.color'));
btn.addEventListener('click', () => {
    rest();
});
