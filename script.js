const destination = document.querySelector('#destination');
const areaSubmit = document.querySelector('#areaSubmit');
const area = document.querySelector(".area");
const box1 = document.querySelector('.box1');
const box2 = document.querySelector('.box2');
const box3 = document.querySelector('.box3');

areaSubmit.addEventListener('click', changeArea);


function changeArea (e) {
    area.style.backgroundColor = "white";
    switch(destination.value) {
        case 'box1': 
        box1.style.backgroundColor = "green";
        console.log(destination.value);
        break;
        case 'box2':
            box2.style.backgroundColor = "green";
            console.log(destination.value);
            break;
        case 'box3':
            box3.style.backgroundColor = "green";
            console.log(destination.value);
            break;
    }
}