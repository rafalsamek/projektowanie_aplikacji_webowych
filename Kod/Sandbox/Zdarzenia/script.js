window.onload = function () {
    document.getElementById('my-button2').onclick = function() {console.log('kliknięte2');};


    document.getElementById('my-button3').addEventListener('click', function() {console.log('kliknięte3');});
};