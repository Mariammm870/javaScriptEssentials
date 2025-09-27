let userRole = "admin";
let accessLevel;

if (userRole === "admin") {
    accessLevel = "Full access granted";
} else if (userRole === "manager") {
    accessLevel = "Limited access granted";
} else {
    accessLevel = "No access granted";
}

console.log("Access Level:", accessLevel);

let isLoggedIn = true;
let userMessage;

if (isLoggedIn) {
    if (userRole === "admin") {
        userMessage = "Welcome, Admin!";
    } else {
        userMessage = "Welcome, User!";
    }
} else {
    userMessage = "Please log in to access the system.";
}

console.log("User Message:", userMessage);

let userType = "subscriber";
let userCategory;

switch (userType) {
    case "admin":
        userCategory = "Administrator";
        break;
    case "manager":
        userCategory = "Manager";
        break;
    case "subscriber":
        userCategory = "Subscriber";
        break;
    default:
        userCategory = "Unknown";
}

console.log("User Category:", userCategory);


let isAuthenticated = true;
let authenticationStatus = isAuthenticated ? "Authenticated" : "Not authenticated";

console.log("Authentication Status:", authenticationStatus);

let role = "Enrolled Member";
let access
   
if (userRole.toLowerCase() === "employee") {
    access = "You are authorized to access Dietary Services.";
} else if (userRole.toLowerCase() === "enrolled member") {
    access = "You are authorized to access Dietary Services and have one-on-one interaction with a dietician.";
} else if (userRole.toLowerCase() === "subscriber") {
    access = "You are authorized to have partial access to facilitate Dietary Services only.";
} else if (userRole.toLowerCase() === "non-subscriber") {
    access = "You need to enroll or at least subscribe first to avail this facility.";
} else {
    access = "Invalid role. Please enter a valid user role.";
}

console.log("Access Role:", access);
  
