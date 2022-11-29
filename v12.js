//========= ES6 Class Inheritance======

//========= ES6 Class Inheritance======

class parent{
    karim(){
        console.log("My name is karim");
    }
    karim1(){
        console.log("My name is karim 2");
    }
}

class child extends parent{
    karim(){
        console.log("My name is karim.My name is karim.");            //method over riding
    }
}
var obj=new child();
obj.karim();
obj.karim1();