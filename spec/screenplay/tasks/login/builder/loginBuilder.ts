
export class LoginBuilder{

    private pass : string;
    private userName : string;

    withPass(pass: string) : LoginBuilder{
        this.pass = pass;
        return this;
    }

    withUserName(username : string):LoginBuilder {
        this.userName = username;
        return this;
    }

    get Pass(){
        return this.pass;
    }

    get UserName(){
        return this.userName;
    }

    build(): LoginModel {
        return new LoginModel(this);
    } 
}

export class LoginModel {

    private pass:string;
    private userName: string;

    constructor(loginBuilder: LoginBuilder){
        this.pass = loginBuilder.Pass;
        this.userName = loginBuilder.UserName;
    }

    get Pass(){
        return this.pass;
    }

    get UserName(){
        return this.userName;
    }
}