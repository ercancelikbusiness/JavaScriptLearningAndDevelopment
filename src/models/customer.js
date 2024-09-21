import User from "./user.js";

export default class Customer extends User{ // benzer alanlar User'dada vardı aynı olanları User(base) den almak için
                                            // Customer'i User'a extends ettik
    constructor(id, firstName, lastName, city,age, creditCardNumber) {
        super(id, firstName, lastName, city,age); // aynı olan alanları super'e gönderdik set ettik yani aynı alanları customerada vermeye gerek yok 
        this.creditCardNumber=creditCardNumber;

 
    }
}

















