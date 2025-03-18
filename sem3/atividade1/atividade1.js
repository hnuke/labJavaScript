function Person(name, email, birthDate, telephone, smartphone){
    this.name = name;
    this.email = email;
    this.birthDate = birthDate;
    this.telephone = telephone;
    this.smartphone = smartphone;
}

function Professor(name, email, birthDate, telephone, smartphone){
    Person.call(this,name, email, birthDate, telephone, smartphone);
    this.area;
    this.enrollmentNumber;
    this.latte;
}

function Student(name, email, birthDate, telephone, smartphone){
    Person.call(this,name, email, birthDate, telephone, smartphone);
    this.Course;
    this.enrollmentNumber;
}
