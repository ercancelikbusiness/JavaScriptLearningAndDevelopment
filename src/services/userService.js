//export : dışardan import edilebilir demek default : dışardan bi dosya  import edilince default olarak bunu import et demek

import { users } from "../data/users.js";
import DataError from "../models/dataError.js";

export default class UserService {

    constructor(loggerService) {

        //this.users= []; // gerçek hayatta bu parantez içine getCustomerFromDb falan deriz veritabanından getirir.
        this.employees = [];
        this.customers = [];
        this.errors = [];
        this.loggerService = loggerService;
    }
 
    load() {
        for (const user of users) { // bu forof döngüsüdür. user takma isim
            switch (user.type) { // users' sınıfından gelen datanın tipi customer ise onu bu sınıfdaki customerse pushla yada employee ise ona pushla
                case "customer":
                    if (!this.checkCustomerValidityForErrors(user)) { // ! gelen değeri tersine çevirir true ise false'ye dönüşür false ise if ' e giremez
                        this.customers.push(user)
                    }

                    break;
                case "employee":
                    if (!this.checkEmployeeValidityForErrors(user)) {
                        this.employees.push(user)
                    }
                    break;

                default: // hatalı type olursa DataError sınıfımızı geçicek mesela type ' da employee yerine employe  ama burası sadece type hatası için
                    this.errors.push(new DataError("Wrong user Type data", user)) //DataEror u newliyoruz ve cons'u aktif oluyor amaç consunu aktif etmek çünkü bu sınıfımız hataları tutuyordu ve bu görevi cons'u yapıyordu
                    break;
            }
        }
    }
    //
    checkCustomerValidityForErrors(user) { //örneğin  kayıt olan birisinde şu şu bilgileri mutlaka olması gerekiyor kuralımız olsun (Customer için)
        let requiredFields = "id firstName lastName age city".split(" ") // bu yapıyı yapay zekada araştırabilirsin. id firstName lastName age city fieldleri zorunlu demek istiyoruz require gerekli demek
        //birşeyi cagırırken user.age yapıyoruzya Js de şuda aynı anlamdadır: user["age"] user'in age fieldi.
        let hasErrors = false; //yani üstteki switchli kısımda hata yoksa demek
        for (const field of requiredFields) {
            if (!user[field]) { // ! gelen değeri tersine çevirir true ise false'ye dönüşür false ise if ' e giremez
                hasErrors = true;
                this.errors.push(new DataError(`Validation Problem ${field} is required`, user)) // required zorunlu demek zorunlu olan birşey yazılmamışsa bunu errora pushluyoz 

            }
        }
        // Yaş alanının sayısal olup olmadığını kontrol ediyor
        if (isNaN(user.age)) {
            hasErrors = true;
            this.errors.push(new DataError(`Validation Problem: ${user.age} is not a number`, user));
        }
        return hasErrors;
    }
    checkEmployeeValidityForErrors(user) {
        let requiredFields = "id firstName lastName age city salary".split(" ");

        let hasErrors = false;
        for (const field of requiredFields) {
            if (!user[field]) // ! dönen değeri terse çevirir mesela true ise false'ye  dönüşür false ise if' e giremez 
            {
                hasErrors = true;
                this.errors.push(new DataError(`Validation Problem ${field} is required`, user));

            }
        }
        if (isNaN(user.age)) {
            hasErrors = true;
            this.errors.push(new DataError(`Validation Problem: ${user.age} is not a number`, user));
        }
        return hasErrors;
    }
    //not yalnız şunu söyliyeyim componentte load calıstırılırsa ve hatalar ekrana yazdırılmak istenirse 
    //eğerki tipte bir hata varsa switch case'de eşleşme olmayacağı için direk defaulta atacak ve tip hatası verip geçecek
    //yani eğer tipte hata varsa diğer hatalar çıktıda gözükmez componente validtyleri ayrı olarak cagırabilirsin


    add(user) {
        //this.users.push(user);

        // burdaki user sınıf  değil componentte user sınıfını new lediğimiz takma ad user'in içinde
        // zaten UserService'deki metotları  nerde cagırıyorsak mesela componentte orda metod değişkenine veriyi gönder
        //iyoruz burdaki user içinde bu yazıyı yazarken!!!  user1 'i göndermişim yani user içinde user1 var bunu okurken
        //bu değişmiş olabilir. ( sonradan this.users'ı kullanmadık)
        switch (user.type) {
            case "customer":
                if (!this.checkCustomerValidityForErrors(user)) { // ! terse çevirmekti...  return değeri false ise 
                    //!false yapacak ve true 'e dönecek bu sayede if parantezi true olacağı için if içine girecek
                    //ayrıca burdaki if !this.checkCustomerValidityForErrors(user) ' in true mi falsemi döndürdüğüne
                    //bakmakla kalmıyor aynı zamanda metodu calıştıracağı için "customer" type'i olsa bile hataları
                    //ekrana yazdırır.
                    this.customers.push(user)
                }

                break;
            case " employee":
                if (!this.checkEmployeeValidityForErrors(user)) {
                    this.employees.push(user)
                }

                break;
            default:
                this.errors.push(new DataError("This user can not be added . wrong user type data or not found", user))
                break;
        }
        this.loggerService.log(user);

    }

    /*list() {
        //return this.users;
    }*/
   listCustomers() {
    return this.customers;
   }

   getCustomerById(id) {
    return this.customers.find(u=> u.id===id);
}
   /*
    getById(id) {
        //return this.users.find(u=> u.id===id);
    }
        */

    getCustomersSorted(){ // kullanıcı isimlerinin  alfabetik olarak sıralanmasını yapar 
        return this.customers.sort((customer1,customer2)=>{
            if(customer1.firstName>customer2.firstName){
                return 1;
            }else if(customer1.firstName===customer2.firstName){
                return 0;
            }else{
                return -1
            }
        })
    }


}

























