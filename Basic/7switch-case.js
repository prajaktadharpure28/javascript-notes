var user = "admin";

switch (user){
    case "admin":
        console.log("You get full access");
        break;
    case "subadmin":
        console.log("gets access to create/delete courses");
        break;
    case "testprep":
        console.log("gets access to create/delete tests");
        break;
    case "user":
        console.log("Trial user");
        break;

        default:
            console.log("trial user");
            break;
}