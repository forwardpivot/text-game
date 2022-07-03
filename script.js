const destination = document.querySelector('#destination');
const areaSubmit = document.querySelector('#areaSubmit');
const map = document.querySelector(".map");
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

    const Place = (name, description,) => {
        const mapTile = document.createElement('div');
        mapTile.classList.add("area", `${name}`);
        map.appendChild(mapTile);
        const lookAround = () => console.log(`${description}`);
        return {name, description, lookAround};
    }

    const box4 = Place("Box4", "Its a box");
    box4.lookAround();