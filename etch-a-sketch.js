



let canvas = 30;
let divs = '';

function rest(){
    arr.forEach((divs) => {
    divs.classList.remove('col');
 //   divs.textContent = '';
});
}

const container = document.querySelector('.container');
const btn = document.querySelector('#btn');
container.setAttribute('style', `diplay: inline-grid; grid-template-columns: repeat(${canvas}, 1fr)`);



function  hovering(){

    for( let i = 1; i <= canvas * canvas; i++){
        divs = document.createElement('div');
        divs.classList.add('color');
        container.appendChild (divs);


        divs.addEventListener('mouseover', (e) => {
                e.target.classList.add('col')

            });

        divs.addEventListener('click', (e) => {
            e.target.classList.remove('col');
        });
    }      
}

hovering();

const arr = Array.from(document.querySelectorAll('.container > .color'));
btn.addEventListener('click', () => {
    rest();
});



