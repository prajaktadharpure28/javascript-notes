// import User from "./48a-class&module";

const User = require("./48a-class&module");

const praju = new User("praju", "prajakta@gmail.com");

console.log(praju.getInfo());

praju.enrollCourse("React Bootcamp");
praju.enrollCourse("Angular Bootcamp");

console.log(praju.getCourseList());

let courses = praju.getCourseList();

courses.forEach((c) => console.log(c));