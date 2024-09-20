import { BaseLogger, MongoLogger } from "../crossCuttingConcerns/logging/logger.js"
import { users } from "../data/users.js";
import Customer from "../models/customer.js";
import User from "../models/user.js"
import UserService from "../services/userService.js"
//altta eğer bir sınıfın defaultu değilde başka birşeyleri import edeceksek yazacağımız şablonu gösterdim
//import {UserService,asdw,qwd2,} from "../services/userService.js" 

console.log("User component yüklendi")

//sınıfı kullanmak için newlemeliyiz

let logger1 = new MongoLogger(); // yada let logger1 = new BaseLogger()
let userService = new UserService(logger1) // newleyince üstte import olarak gelir "" içindeki en sonuna .js yi biz ekledik bazen otomatik geliyor
//yukardaki kodlarla değilde userService.add cagrıldığında bir yazdırma yapıyor mesela 2 defa add'i cagırdıgımız için
//ekranda logger sınıfındaki metodu 2 kere cagırır.

let user1 = new User(1,"Ercan", "Celik", "Ankara", 29)
let user2 = new User(2,"Baran","Gökçekli","Muğla", 24)
userService.add(user1)
userService.add(user2)

//console.log(userService.list()) // userServicedeki add metodunda users içine pushlamıştık o yüzden userları yazdırır

//console.log(userService.getById(2))

console.log("---------------------------")
userService.load() // load'ı calıstırdık
//console.log(userService.customers)
//console.log(userService.employees)

//userService.add(new Customer(12,"Ercan", "Celik", "Ankara", "afwfasd"))// customerde zaten type alanı yok add'deki defaulta girer
//bu arada  userservicedeki add metodu user kabul ediyordu customer'de bir user idi cunku extends edilmişti
//ayrıca new lemek o sınıfın cons'unu calıstırıcaktı ve fieldlere ataması yapılmış bir user datası oluşcaktır
//new leyerek yaptıgımız bu oldu bir user datası gönderdik bir görünmez takma ada sahip user datası tutan bir veri gönderdik
//ancak bu doğru bir kullanım değil customerToAdd değişkeni oluşturup prototyping yapılabilir yada ekleme için ayrı sınıf
//ayarlanabilir bu arada burda yaş yerine harf girdik buda bir hata

let customerToAdd = new Customer(12,"Ercan", "Celik", "Ankara", "afwfasd");
//altta prototyping yapacağız yani customerToadd  alanlarına veri gönderilmiş Customer sınıfının bir örneğini tutuyor
//customerToadd e yeni bir alan eklersek onuda tutmuş olacak
customerToAdd.type="customer";
userService.add(customerToAdd);

console.log(userService.errors);











//* aşağıda prototyping örneğini göstereceğim  yani bir objede olmayan birşeyi varmış gibi ekleyebiliyoruz*///////
/* işte bu altta yaptığımızı JavaScripte constroctor oluştururken yapabiliyoruz ve this yaparken olmayan bi fielde atama
//yapıyoruz field oluşturmakla ugrasmıyoruz cons'a gelen değerler  o değişkenler üzerinden o sınıfta oluşturuluyor
//JS de bir değişkeni önceden tanımlamaya gerek yok  bir değişkene istediğin türü atabiliyorsun JS kabul eder dizi obje vb
let customer = { id :1 , firstName: " Ercan"}
customer.lastname = " Celik"
console.log(customer.lastname)
//******************************************************************************************* */





















