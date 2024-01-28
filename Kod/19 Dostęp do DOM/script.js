window.onload = function () {
    // Pojedynczy element po ID
    // document.getElementById('box-one').style.border = '3px solid red';

    // Pojedynczy element po query selector
    // document.querySelector('#box-one').style.border = '3px solid red';

    // Pojedynczy element po query selector po klasie ale bierze pierwszy
    // document.querySelector('.boxes').style.border = '3px solid red';

    // Wiele elementów po nazwie klasy
    // let arr = document.getElementsByClassName('boxes');

    // Wiele elementów po nazwie znacznika
    // let arr = document.getElementsByTagName('div');

    // Wiele elementów po query selector all
    // let arr = document.querySelectorAll('#big-box div');

    // for (let element of arr) {
    //     element.style.border = '3px solid red';
    // }

    let element = document.getElementById('box-two');
    element.style.border = '3px solid red';

    // Węzeł rodzica
    element.parentNode.style.border = '3px solid blue';

    // Węzeł sąsiadów
    // element.previousElementSibling.style.border = '3px solid green';
    // element.nextElementSibling.style.border = '3px solid yellow';

    // Węzeł dziecka
    let elementBigBox = document.getElementById('big-box');
    elementBigBox.style.border = '3px solid black';

    elementBigBox.firstElementChild.style.border = '3px solid blue';
    elementBigBox.lastElementChild.style.border = '3px solid green';
}