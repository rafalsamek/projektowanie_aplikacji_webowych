/**
 * Zadanie 4
 *
 * 1)  Napisz funkcje która przyjmuje jeden parametr który jest liczbą.
 *     Funkcja niech wypisuję na konsolę "Liczba nieparzysta" w przypadku gdy przy wywołaniu funkcji została
 *     podana liczba nieparzysta lub "Liczba parzysta" w przypadku gdy przy wywołaniu funkcji została podana liczba parzysta.
 *     Zadanie wykonaj z wykorzystaniem konstrukcji IF
 *
 * 2)  Napisz funkcję która wypisze na konsole liczby od 1 do 100 podzielne przez 3.
 */

function evenOddNumber(number) {
    if (number % 2 === 1) {
        console.log('Liczba nieparzysta')
    } else {
        console.log('Liczba parzysta')
    }
}

evenOddNumber(47);
evenOddNumber(52);

function dividableByThree(from, to) {
    for (let i = from; i <= to; i++) {
        if (i % 3 === 0) {
            console.log(i);
        }
    }
}

dividableByThree(1, 100);