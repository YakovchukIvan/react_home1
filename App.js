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
// task 3
class Store {
    constructor(name) {
        this.name = name;
        this.products = [];
    }
    addProduct(product) {
        this.products.push(product);
    }
    removeProduct(product) {
        const index = this.products.indexOf(product);
        console.log("Store  removeProduct  index:", index);
        if (index !== -1) {
            this.products.splice(index, 1);
        }
    }
    displayProducts() {
        console.log(`Products in ${this.name}:`);
        console.log(`Products in ${this.products}:`);
        this.products.forEach((product, index) => {
            console.log(`${index + 1}. ${product}`);
        });
    }
}
const store = new Store("My Store");
store.addProduct("Adidas");
store.addProduct("Nike");
store.addProduct("Puma");
store.addProduct("Lenovo");
store.addProduct("Apple");
console.log(store.displayProducts());
// Виведе:
// Products in My Store:
// 1. Product 1
// 2. Product 2
// 3. Product 3
store.removeProduct("Nike");
store.removeProduct("Nike");
console.log(store.displayProducts());
// Виведе:
// Products in My Store:
// 1. Product 1
// 2. Product 3
App();
