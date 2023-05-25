import './App.css'

function App() {
  
  class Address {
    constructor(
      public street: string,
      public city: string, 
      public postalCode: string
    ) {
      this.street = street;
      this.city = city;
      this.postalCode = postalCode;
    }

    getFullAddress(): string {
      return `${this.street}, ${this.city}, ${this.postalCode}`;
    }
  }

  class Customer {
    constructor(
      public name: string, 
      public age: number, 
      public address: Address
    ) {
      this.name = name;
      this.age = age;
      this.address = address;
    }

    displayCustomerInfo(): void {
      console.log(`Name: ${this.name}`);
      console.log(`Age: ${this.age}`);
      console.log(`Address: ${this.address.getFullAddress()}`);
    }
  }

  // Приклад використання:
  const address = new Address("Main Street", "Cityville", "12345");
  const customer = new Customer("John Doe", 30, address);

  customer.displayCustomerInfo();


  return (
    <>
    <div className="wrapper">

      <h1>Hello Type Script</h1>
      <p>1 Реалізувати клас "Адреса" (Address) з властивостями "вулиця" (street), "місто" (city) і "поштовий індекс" (postalCode).
      Потім створити клас "Клієнт" (Customer) з властивостями "ім'я" (name), "вік" (age) і "адреса" (address), який може відображати повну інформацію про клієнта.</p>

    </div>

    
    </>
  )
}

export default App
