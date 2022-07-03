const destination = document.querySelector('#destination');
const areaSubmit = document.querySelector('#areaSubmit');
const map = document.querySelector(".map");
const storyBoard = document.querySelector('#storyBoard');
let area = document.querySelectorAll('.area');
const box1 = document.querySelector('.box1');
const box2 = document.querySelector('.box2');
const box3 = document.querySelector('.box3');

areaSubmit.addEventListener('click', changeArea);


function changeArea (e) {
    area.forEach(function(elem) {
        elem.style.backgroundColor = "white";
    });

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
    destination.value = null;
}

    const MapTile = (name, description,) => {
        const mapTile = name
        const lookAround = () => storyBoard.textContent = description;
        const changeBorder = () => name.style.border = "5px solid green";
        return {name, description, lookAround, changeBorder};
    }

    const box1Look = MapTile(box1, "this is the first box");
    box1Look.lookAround();

    const box2Obj = MapTile(box2,"This is another box beneath box1");
    box2Obj.lookAround();