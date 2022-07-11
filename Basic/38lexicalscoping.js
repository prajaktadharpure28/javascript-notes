function init(){
    var firstName = "praju";
    console.log("i am init");

    function sayfirstName(){
        console.log(firstName);
    }
    return sayfirstName;
}

var value = init();
value();