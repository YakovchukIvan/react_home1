"use strict";
function App() {
    // task 1
    class Address {
        constructor(street, city, postalCode) {
            this.street = street;
            this.city = city;
            this.postalCode = postalCode;
            this.street = street;
            this.city = city;
            this.postalCode = postalCode;
        }
    }
    class Customer extends Address {
        constructor(street, city, postalCode, name, age) {
            super(street, city, postalCode);
            this.street = street;
            this.city = city;
            this.postalCode = postalCode;
            this.name = name;
            this.age = age;
            this.name = name;
            this.age = age;
        }
    }
    const address = new Address("Промислова", "Рівне", 33024);
    const customer = new Customer("Промислова", "Рівне", 33024, "Іван", 30);
    console.log("App  address:", address);
    console.log("App  customer:", customer);
    class Rectangle {
        constructor(width, height) {
            this.width = width;
            this.height = height;
            this.width = width;
            this.height = height;
        }
        calculateArea() {
            return this.width * this.height;
        }
    }
    class Circle {
        constructor(radius) {
            this.radius = radius;
        }
        calculateArea() {
            return Math.PI * this.radius * this.radius;
        }
    }
    const rectangle = new Rectangle(2, 5);
    console.log(rectangle.calculateArea());
    const circle = new Circle(7);
    console.log(circle.calculateArea());
}
App();
