window.onload = function () {
    let button = document.getElementById('add-element');
    let boxContainer= document.getElementById('box-container');

    let clickCounter = 0;
    let dblClickCounter = 0;
    let keyDownCounter = 0;

    document.addEventListener('click', function () {
         document.getElementById('click-counter').textContent = ++clickCounter;
    });

    document.addEventListener('dblclick', function () {
        document.getElementById('double-click-counter').textContent = ++dblClickCounter;
    });

    document.addEventListener('keydown', function () {
        document.getElementById('key-down-counter').textContent = ++keyDownCounter;
    });

    button.addEventListener('click', function () {
        let newElement = document.createElement('div');
        newElement.classList.add('box');
        boxContainer.appendChild(newElement);
    });

    boxContainer.addEventListener('click', function (e) {
        if (e.target.className.includes('box')) {
            this.removeChild(e.target);
        }
    });
};