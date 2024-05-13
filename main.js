const block = document.querySelector('.js-block'),
color = document.querySelector('.js-color'),
btn = document.querySelector('.js-btn'),
hex = '0123456789ABCDEF';

console.log(hex[0]);
console.log(hex[15]);

let randomColor = '#';

const getRandomColor = () =>{
    randomColor = '#'
    //console.log(Math.floor(Math.random()*hex.length));
    for(let i = 0; i < 6; i++){
        randomColor = randomColor + hex [Math.floor(Math.random()*hex.length)];
        
    }
    console.log(randomColor)
}

btn.addEventListener('click', () => {
    getRandomColor();
    block.style.backgroundColor = randomColor;
    color.innerHTML = randomColor
});