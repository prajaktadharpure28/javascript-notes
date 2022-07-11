console.log(this);

var user = {
    firstName: "praju",
    courseCount: 4,
    getCourseCount:function(){
        console.log("line 7", this);
        function sayHello(){
            console.log("Hello")
        }
        sayHello();
    },
};

user.getCourseCount();



