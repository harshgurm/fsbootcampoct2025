class Car{

    constructor(brand, model, engine, kilometers){
        this.brand = this.make(brand);
        this.model = this.model(model);
        this.engine = this.engine(engine);
        this.kilometers = this.kilometers(kilometers);
    }
    
    make(name){
        return name;
    }

    model(name){
        return name;
    }

    engine(name){
        return name;
    }

    kilometers(number){
        return number;
    }

    carDetails(){
        return `Car make is ${this.brand} and model is ${this.model}. It has done ${this.kilometers} kilometers and it has a ${this.engine} engine.`;
    }

}


var toyata = new Car("Toyota", "Camry", "V6", 50000);
console.log(toyata.carDetails());

var toyata = new Car("Toyota", "Camry", "V4", 80000);
console.log(toyata.carDetails());

var honda = new Car("Honda", "Accord", "V6", 60000);
console.log(honda.carDetails());

var ford = new Car("Ford", "Mustang", "V8", 30000);
console.log(ford.carDetails());