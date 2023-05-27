function App() {
  
  // task 1
  class Address {

	constructor (public street:string, public city:string, public postalCode: number) {
		this.street = street;
		this.city = city;
		this.postalCode = postalCode;
	}

  }

  class Customer extends Address {

    constructor (public street:string, public city:string, public postalCode: number, public name:string, public age:number) {
      super(street, city, postalCode);
      this.name = name;
      this.age = age;
    }

  }

const address = new Address("Промислова", "Рівне", 33024);
const customer = new Customer("Промислова", "Рівне", 33024, "Іван", 30);

console.log("App  address:", address)
console.log("App  customer:", customer)


// task 2

interface Shape {
    calculateArea ():number;
}

class Rectangle implements Shape{
  constructor(public width:number, public height:number) {
    this.width = width;
		this.height = height;
  }
  calculateArea ():number {
    return this.width * this.height
  }
}

class Circle implements Shape {
  constructor(public radius: number) {}

  calculateArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}

const rectangle = new Rectangle(2, 5);
console.log(rectangle.calculateArea()); 

const circle = new Circle(7);
console.log(circle.calculateArea());


}

App()