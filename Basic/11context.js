if (2 == "2"){
    console.log("this is true");
}
if (2 === "2"){
    console.log("this is not true");
}

var myName = "praju";
if (myName === myName){
    console.log("this is again true");
}

var myName = "praju";
if (myName === window.myName){
    console.log("this is again true");
}