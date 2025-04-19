class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get password(){
        // return this._password.toUpperCase()
        return `${this._password.toUpperCase()}vivek`
    }

    set password(value){
        this._password = value
    }
}

const vivek = new User("vivek.ai", "123")
console.log(vivek.password);
