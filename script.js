const destination = document.querySelector('#destination');
const areaSubmit = document.querySelector('#areaSubmit');
const map = document.querySelector(".map");
const storyBoard = document.querySelector('#storyBoard');

const box1 = document.querySelector('.box1');
const box2 = document.querySelector('.box2');
const box3 = document.querySelector('.box3');
const box4 = document.querySelector('.box4');

areaSubmit.addEventListener('click', changeArea);
box1.addEventListener('click', changeArea);
box2.addEventListener('click', changeArea);
box3.addEventListener('click', changeArea);
box4.addEventListener('click', changeArea);



function changeArea (e) {
    let area = document.querySelectorAll('.area');
    area.forEach(function(elem) {
        elem.style.backgroundColor = "white";
    });

    e.target.style.backgroundColor = "green";
}

    const MapTile = (name, description,) => {
        const mapTile = name
        const lookAround = () => storyBoard.textContent = description;
        return {name, description, lookAround};
    }

    const box1Look = MapTile(box1, "this is the first box");
    box1Look.lookAround();

    const box2Obj = MapTile(box2,"This is another box beneath box1");
    box2Obj.lookAround();