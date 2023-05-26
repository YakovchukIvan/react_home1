import './App.css'

function App() {
  
  console.log("good");
  
  class Address {

	constructor (public street:string, public city:string, public postalCode: number) {
		this.street = street;
		this.city = city;
		this.postalCode = postalCode;
	}

  }

  class Customer {

    constructor (public name:string, public age:number, public address:string ) {
      this.name = name;
      this.age = age;
      this.address = address;
    }

  }

const address = new Address("Промислова", "Рівне", 33024);
const customer = new Customer("Іван", 30, "address");

console.log("App  address:", address)
console.log("App  customer:", customer)




























  


  return (
    <>
    <div className="wrapper">
      <h2>Hello Type Script</h2>

      <div className="task1">
        <p>1. Реалізувати клас "Адреса" (Address) з властивостями "вулиця" (street), "місто" (city) і "поштовий індекс" (postalCode).
        Потім створити клас "Клієнт" (Customer) з властивостями "ім'я" (name), "вік" (age) і "адреса" (address), який може відображати повну інформацію про клієнта.</p>
      </div>

      <div className="task2">
        <p>2. Реалізувати інтерфейс "Фігура" (Shape) з методом "обчислити площу" (calculateArea). 
        Створити класи "Прямокутник" (Rectangle) і "Коло" (Circle), які реалізовують інтерфейс "Фігура". 
        Кожен клас повинен мати відповідні властивості та методи для обчислення площі.</p>
      </div>

      <div className="task3">
        <p>3. Реалізувати клас "Магазин" (Store) з властивістю "назва" (name) та методами для додавання товарів до магазину, видалення товарів з магазину і 
        відображення списку товарів у магазині. Використовувати масив для зберігання товарів у магазині.</p>
      </div>

    </div>

    
    </>
  )
}

export default App
