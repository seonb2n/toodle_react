class UserAccountRegisterDto {
    userEmail;
    userPassword;
    userNickName;

    constructor(userEmail, userPassword, userNickName) {
        this.userEmail = userEmail;
        this.userPassword = userPassword;
        this.userNickName = userNickName;
    }
}

export default UserAccountRegisterDto;