
//one to one

let userModelObj = new userModel();
userModelObj.firstName = "Varsha";
userModelObj.lastName = "Katkar";
userModelObj.age = 25;

let userCommunicationModelObj = new userCommunicationModel();
userCommunicationModelObj.mobileNo = "9870211433";
userCommunicationModelObj.emailId = "varsha.katkar93@gmail.com";

userModelObj.userCommunication = userCommunicationModelObj;

let userAddressModelObj = new userAddressModel();
userAddressModelObj.city = "Panvel";
userAddressModelObj.state = "Maharashtra";
userAddressModelObj.pincode = 410206;

userModelObj.userAddress = userAddressModelObj;

//Read
console.log(userModelObj.firstName);
console.log(userModelObj.lastName);
console.log(userModelObj.age);

console.log(userModelObj.userCommunication.mobileNo);
console.log(userModelObj.userCommunication.emailId);

console.log(userModelObj.userAddress.city);
console.log(userModelObj.userAddress.state);
console.log(userModelObj.userAddress.pincode);


//One to Many 
//Communication list array object
let userListCommunicationModelObj = new Array();

//Two Object of User Communication Model
let userCommunicationModelObj1 = new userCommunicationModel();
userCommunicationModelObj1.mobileNo = "8772154687";
userCommunicationModelObj1.emailId = "vkatkar@gmail.com";

let userCommunicationModelObj2 = new userCommunicationModel();
userCommunicationModelObj2.mobileNo = "7896541237";
userCommunicationModelObj2.emailId = "v@gmail.com";

userListCommunicationModelObj.push(userCommunicationModelObj1,userCommunicationModelObj2);

userModelObj.userListCommunication = userListCommunicationModelObj;

//Address list array object
let userListAddressModelObj = new Array();

//Two Object of User Address Model
let userAddressModelObj1 = new userAddressModel();
userAddressModelObj1.city = "Chembur";
userAddressModelObj1.state = "Maharashtra";
userAddressModelObj1.pincode = 400074;

let userAddressModelObj2 = new userAddressModel();
userAddressModelObj2.city = "Thane";
userAddressModelObj2.state = "Maharashtra";
userAddressModelObj2.pincode = 400057;

userListAddressModelObj.push(userAddressModelObj1,userAddressModelObj2);

userModelObj.userListAddress = userListAddressModelObj;

console.log(userModelObj);


// Convert from Javascript Object into JSON Object
let userModelJson = toJson(userModelObj);
console.log(userModelJson); 

let userListAddressJson = toJson(userListAddressModelObj);
console.log(userListAddressJson);

let userListcommunicationJson = toJson(userListCommunicationModelObj);
console.log(userListcommunicationJson);

// Convert from Json Object into Javascript Object
userModelObj = toObject(userModelJson);
console.log(userModelObj);