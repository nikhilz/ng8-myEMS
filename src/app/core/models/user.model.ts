export class User {
    userId: number;
    userName: string;
    password: string;
    emailId: string;
    birthDate: Date;

    constructor(){
        this.userId = null;
        this.userName = null;
        this.password = null;
        this.emailId = null;
        this.birthDate = null;
    }
}