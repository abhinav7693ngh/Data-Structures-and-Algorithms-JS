class Student{
    constructor(firstName, lastName, year){
        this.firstName = firstName;
        this.lastName = lastName;
        this.grade = year;
    }

    fullName(){
        console.log(`Your Full name is ${this.firstName} ${this.lastName}`);
        console.log('This is my instance method');
    }

    yetAnother = () => {
        console.log(`From another instance method(but this act like property not method) ${this.myproperty}`); 
    }

    myproperty = 'Some random testing property';

    static myfunc(){
        console.log('So this is my class methods');
    }
}

const firstStudent = new Student('Abhinav','Singh',4);
console.log(firstStudent.yetAnother());
console.log(Student.myfunc());
console.log(firstStudent);