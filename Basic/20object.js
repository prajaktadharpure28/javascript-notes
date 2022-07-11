var user = {
    firstName : "praju",
    lastName : "dharpure",
    role : "admin",
    rollNo : 1,
};
 console.log(user.firstName);
 console.log(user["lastName"]);

 console.log(user.rollNo);
 user.rollNo = 2;
 console.log(user.rollNo);
 console.log(user);
 console.table(user);
 