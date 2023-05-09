



let canvas = 5;


const container = document.querySelector('.container');
const btn = document.querySelector('#btn');
container.setAttribute('style', `diplay: inline-grid; grid-template-columns: repeat(${canvas}, 1fr)`);

function  hovering(){

    for( let i = 1; i <= canvas * canvas; i++){
        const divs = document.createElement('div');
        divs.classList.add('color');
        container.appendChild (divs);

        divs.addEventListener('mouseover', (e) => {
            divs.classList.add('col'); 
            divs.textContent = "ds";  
        });
    }   
}
container.addEventListener('click', (e) => {
    e.target.classList.remove('col');
    e.target.textContent = '';
    console.log(e);

});
hovering();




