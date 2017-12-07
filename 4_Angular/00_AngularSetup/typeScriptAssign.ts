var myNum: number = 5;
var myString: string = "Hello Universe";
var myArr: Array<number> = [1, 2, 3, 4];
interface NewObject {
    name: string
}
var myObj: NewObject = { name: 'Bill' };
var anythingVariable: any = "Hey";
var anythingVariable: any = 25;
var arrayOne: Array<boolean> = [true, false, true, true];
var arrayTwo: Array<any> = [1, 'abc', true, 2];
interface SecondObject {
    x: number,
    y: number
}
var myObj2: SecondObject = { x: 5, y: 10 };

// object constructor
class MyNode {
    val: number

    constructor(valueInput: number) {
        this.val = valueInput;
    }
    doSomething() {
        this.val = 10;
    }
}

var myNodeInstance = new MyNode(1);
console.log(myNodeInstance.val);

function myFunction(): void {
    console.log("Hello World");
    return;
}

function sendingErrors(): never {
    throw new Error('Error message');
}
