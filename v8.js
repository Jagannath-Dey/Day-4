//======== ES6 create class and use ==========

// class myClass{

// myFun(){
//     console.log('What is your name');
// }
// myFun1(){
//     console.log('What is your father name');
// }
// myFun2(){
//     console.log('What is your mother name');
// }
// myFun3(){
//     console.log('What is your brother name');
// }
// }
// var obj=new myClass;
// obj.myFun2();
// obj.myFun();
// obj.myFun3();
// obj.myFun1();

class myClass{                      //pass parameter

    myFun(name){
        console.log(name);
    }
    myFun1(name){
        console.log(name);
    }
    myFun2(name){
        console.log(name);
    }
    myFun3(name){
        console.log(name);
    }
    }
    var obj=new myClass;
    obj.myFun2('Bangladesh');
    obj.myFun('India');
    obj.myFun3('Pakistan');
    obj.myFun1('Vutan');
    
