//Boolean
let isDone: boolean = false;
//Number
let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
let binaryLiteral: number = 0b1010;
let octalLiteral: number = 0o744;
//String
let names: string = "bob";
names = "smith";
//ModelString
let namess: string = `Gene`;
let age: number = 37;
let sentence: string = `Hello, my name is ${namess}.I 'll be ${age + 1} years old next month.`;
//Array
let list1: number[] = [1, 2, 3]
let list2: Array<number> = [1, 2, 3]
//Tuple
let x: [string, number];
x = ['hello', 10];
x = [10, 'hello'];//Error
console.log(x[0].substr(1));//OK
x[3] = 'world'; //Union Type
//Enum
enum Color {red, green, blue};
enum Colors {red = 1, green, blue};
let c: Color = Color.green;
//Any
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false;
let lt: any[] = [1, true, "free"];
lt[1] = 100;
function warnUser(): void {
    alert("FBI WARNING");
}
let unusable: void = undefined;
let u: undefined = undefined;
let n: null = null;
//默认情况下，null和undefined是所有类型的子类型，可以把null和undefined赋值给number类型的变量
//Never
//返回never的函数必须存在无法达到的终点
function error(message: string): never{
    throw new Error(message);
}
//推断的返回值类型为never
function fail(){
    return error("Something failed");
}
//返回never的函数必须存在无法达到的终点
function infiniteLoop(): never{
    while(true){

    }
}