const praju = {
    firstName: "praju",
    lastName: "dharpure",
    role: "Admin",
    courseCount: 3,
    getInfo : function(){
        console.log(`
        First name is ${this.firstName}
        Last name is ${this.lastName}
        Her role is ${this.role}
        and she is studying ${this.courseCount} courses
        `);
    }
}

const dj = {
    firstName : "prajakta",
    lastName : "dharpure",
    role: "sub-admin",
    courseCount: 4,
};

// praju.getInfo();
// prajakta.getInfo();

// var.prajutInfo = praju.getInfo.bind(prajakta);
// prajaktaInfo();


praju.getInfo.call(dharpure);