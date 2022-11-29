//======ES6 class construtor =========

// class myClass{

// constructor(){
//     console.log('Hello I am Jagannath');
// }
// }
// new myClass();


class myClass{                                  //parameter pass

    constructor(a,b){
        this.firstNum=a;
        this.secondNum=b;
        // console.log(a-b);
    }
    add(){
        let result=this.firstNum + this.secondNum;
        console.log(result);
    }
    }
    // new myClass(10,15);

    var obj=new myClass(10,15);
    obj.add();