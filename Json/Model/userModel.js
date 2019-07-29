function userModel(){

    this.firstName = undefined;
    this.lastName = undefined;
    this.age = undefined;

    //one to one relationship
    this.userCommunication = undefined;//object
    this.userAddress = undefined; //object

    //one to many relationship
    this.userListCommunication = undefined; //Array object
    this.userListAddress = undefined; //Array object

}

