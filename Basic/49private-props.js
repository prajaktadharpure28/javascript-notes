class User{
    constructor(name, email){
        this.name = name;
        this.email = email;
    }
    #courseList = [];

    getInfo(){
        return {name: this.name, email: this.email};
    }
    enrollCourse(name){
        this.#courseList.push(name);
    }
    getCourseList(){
        return this.courseList;
    }
}

module.exports = User;

const praju = new User("praju", "praju@gmail.com")
console.log(praju.getInfo());
praju.enrollCourse("Angular Bootcamp");
console.log(praju.getCourseList());
console.log(praju.courseList);