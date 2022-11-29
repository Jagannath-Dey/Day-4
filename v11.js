//========= ES6 Class Inheritance======

class parent{
    karim(ja){
        console.log("My name is karim");
    }
    karim1(ja){
        console.log("My name is karim 2");
    }
}

class child extends parent{

}
var obj=new child();
obj.karim();
obj.karim1();