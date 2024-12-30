let counter = document.querySelector('#counter');
const lower = document.querySelector('#lower');
const add = document.querySelector('#add');
let count = 0;

function color(){
    if(count > 0){
        counter.style.color = 'green'
    }else if(count < 0){
        counter.style.color = 'red'
    }else{
        counter.style.color = 'black'
    }
}

function adder(){
    count++
    counter.innerHTML = count;
    color()
}

function sub(){
    count--
    counter.innerHTML = count;
    color()
}

add.addEventListener('click', adder);
lower.addEventListener('click', sub);