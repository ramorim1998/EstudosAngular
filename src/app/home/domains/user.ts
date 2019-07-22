export class User {
    name: string;
    cpf: string;
    email: string;
    password: string;
    confirm: string;
    constructor(name:string, cpf:string,email:string,password:string,confirm:string){
        this.name = name;
        this.cpf = cpf;
        this.email = email;
        this.password = password;
        this.confirm = confirm;
        
    }
    getName(){
    return this.name;
}

    
}
 