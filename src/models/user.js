//Js de sınıf kavramı olmadığından User aslında bir fonksiyon gibi düşünebilirsin
export default class User {
    constructor(id, firstName, lastName, city,age) { // burdaki thislerdeki olmayan fieldleri
                                                    // userComponen'de customer örneğinde anlattım
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.city = city;
        this.age = age;
    }

    
}

