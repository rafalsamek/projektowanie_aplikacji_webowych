window.onload = function () {
    setTimeout(function () {
        document.getElementById('element-one').textContent = 'Nowa wartość';
        document.getElementById('element-two').innerHTML = '<b>Zawartość elementu</b>';
    }, 3000);
}