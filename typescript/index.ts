let x:string = "Hello, World!";
x = "Name got updated";

let y:number = 42;
y = 100;

let z = true;
z = false;

const PI = 3.14;

let cars: string[] = ["Toyota", "Honda", "Ford"];

let trucks: Array<string> = ["Volvo", "Scania"];

cars.push('123');

const grade: string | number = "A"; // or 50;

let tuples: (string|number|boolean)[] = ["Age", "10", 50, true];

let tuples_example: [string,number] = ["Age", 30];

let abc:any = "test";
abc = 10;

// type Person = { name: string; age: number; }
interface Person { name: string; age: number; }

let objectExample: Person = {
    name: "John",
    age: 25,
};

let user: Person = {
    name: "Alice",
    age: 20,
};


function hello(name:string | number):void {
    console.log(`Hello, ${name}`);
}

hello('Harsh')

console.log(x);
console.log(y);
console.log(cars);
console.log(trucks);