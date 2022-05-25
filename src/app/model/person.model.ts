export class person{
    id?: number;
    name: string;
    lastname: string;
    age: string;
    nameschool: string;
    yearschool: string;
    
    
    constructor(name: string, lastname: string, age: string, nameschool: string, yearschool: string){
    
        this.name = name;
        this.lastname = lastname;
        this.age = age;
        this.nameschool = nameschool;
        this.yearschool = yearschool;
    }
}