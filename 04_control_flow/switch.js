const month = 3

switch (month) {  // key -> month matches its value with cases and prints corresponding output
    case 1:    // 1 is value of key that is may be number, string("string") etc.
        console.log("jan");
        break; // these break statements are used because after executing any of the statement it continues the execution so to stop it we need break
    case 2:
        console.log("feb");
        break;
    case 3:
        console.log("mar");
        break;
    case 4:
        console.log("Apr");
        break;
    default:
        console.log("no time");
        break;
}