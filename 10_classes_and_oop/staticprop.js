class User {
    constructor(username){
        this.username =username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
        
    }

    static createId(){
        return `123`   // static ke baad kisi ke sath access nahi hoti 
    }
}


const vivek = new User("vivek")

// console.log(vivek.createId()) // static 

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
iphone.logMe()

// console.log(iphone.createId());    // here also 

