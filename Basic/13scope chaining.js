var name = "praju";

console.log("Line no. 3", name);

function sayName(){
    var name1 = "hello";
    console.log("line no. 6", name1);
    sayNameTwo();

    function sayNameTwo(){
        console.log("line no.10", name1)
    }
}


sayName();