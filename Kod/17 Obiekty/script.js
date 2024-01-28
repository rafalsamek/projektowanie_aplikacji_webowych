let person = {
    firstName: 'Jan',
    lastName: 'Kowalski',
    introduce: function () {
        console.log('Nazywam się ' + this.firstName + ' ' + this.lastName);
    },
}

person.introduce();
person.firstName = 'Adam';
person.introduce();

function Car(brandValue, modelValue) {
    this.brand = brandValue;
    this.model = modelValue;

    this.showDetails = function() {
        console.log('Car: ' + this.brand + ' ' + this.model);
    }
}

let car = new Car('Fiat', '126p');
car.showDetails();

class House {
    constructor(windowsCount, doorsCount) {
        this.windows = windowsCount;
        this.doors = doorsCount;
    }

    showDetails() {
        console.log('House: ' + this.windows + ' windows ' + this.doors + ' doors');
    }
}

let house = new House(10, 5);
house.showDetails();