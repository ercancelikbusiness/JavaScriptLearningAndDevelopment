
// ********** referans primitive tip değer tip ile ilgili bir blok burası bu bloğun altından cart ile devam edicez**
//***************************************************************************************************************** */
/*
let cart = [
    {id:1, productName:"Telefon", quantity:3, unitPrice:4000},
    {id:2, productName:"Bardak", quantity:2, unitPrice:30},
    {id:3, productName:"Kalem", quantity:1, unitPrice:20}, 
    {id:4, productName:"Şarj Cihazı", quantity:2, unitPrice:100},
    {id:5, productName:"Kitap", quantity:3, unitPrice:30},
    {id:6, productName:"Pot", quantity:5, unitPrice:150},
]

function addToCart (sepet){

    sepet.push({id:7, productName:"ruhsat", quantity:5, unitPrice:120})
}
addToCart(cart) // artık 7. eleman olarak ruhsatta cart içine eklendi cl cart yaparsan 7 eleman cıkar
// çünkü cart referans tipini metoda yolladın adres değişti artık güncellendi altta basit örnek yapcam onda değişmicek 

console.log(cart) 

let sayi = 10
function sayiTopla(number) {
    number = number+1
}

sayiTopla(sayi)
console.log(sayi) //bildiğimiz basit bir örnekti fakat burda metoda değer tipi yolladık adres değişmedi  
//o yüzden burda yine 10 cıktı adres değişmedi.

let sayi2 = "ercan"
function sayiTopla(number) {
    number= sayi2+"ee"
    
    
}

sayiTopla(sayi2)
console.log(sayi2) // burdada string primitive tip olduğu için değer tip gibi davrandı yine adres değişmedi !
*/
// ************************************************************************************************************
/************************************************************************************************************* */


let cart = [
    {id:1, productName:"Telefon", quantity:3, unitPrice:4000},
    {id:2, productName:"Bardak", quantity:2, unitPrice:30},
    {id:3, productName:"Kalem", quantity:1, unitPrice:20},
    {id:4, productName:"Şarj Cihazı", quantity:2, unitPrice:100},
    {id:5, productName:"Kitap", quantity:3, unitPrice:30},
    {id:6, productName:"Pot", quantity:5, unitPrice:150},
]
cart.map(product=>console.log(product.productName))

//map fonksiyonu dizinin herbir elemanını sırayla dolaşır product ise paremetredir biz verdik 
//cart.map(product=>console.log(product.productName)) ile o esnada hangisinde olduğunu görmek için yazdık
//cart.map(product=>console.log(product)) yazsaydık cart dizilerinin tamamını gösterirdi
// istersek cart.map(product=>{} yaparak satırlarca kod yapabiliriz.
/*
cart.map(product => {
    console.log( product.productName+" : " + product.quantity*product.unitPrice+" TL")
})
    */
// üstteki html etiketi içerisine alalım

console.log("<ul>")
cart.map(product => {
    console.log("<li> " +product.productName+" : " + product.quantity*product.unitPrice+" TL"+ "</li>")
})
console.log("</ul>")

// şimdi altta filter' ı öğreneceğiz bu fonksiyonda tüm elemanları dolaşır ve şarta uyanları dizi şeklinde bir değişkene
//atabilir

let quantityOver2 = cart.filter(product => product.quantity>2)
console.log(quantityOver2)

//şimdi reduce fonksiyonunu öğreneceğiz ama çok sık kullanılmıyor acc ve product yine takma ad değişken görevinde
//aşağıdaki reduce ile cart daki her bir öğenin fiyatlarını topladık  total değişkenine attık
//yani reduce ile birşeydeki istenen şeyi birer birer toplar acc bir önceki döngüdeki  toplamı taşır sondaki 0
//acc nin yani başlangıç değerinin ilk değerini belirtir.

//let total = cart.reduce((acc,product) => acc+ product.unitPrice,0)
let total = cart.reduce((acc,product) => acc+ product.unitPrice *product.quantity,0)
console.log(total)







//********************************************************************************************************* */
/* alttaki basit bir => lı fonksiyon çeşidi. değişkeni fonksiyon ismi gibi düşün a b yi paremetre gibi düşün => yanıda 
// fonksiyonun parentez içi gibi düşün  istersen => dan sonra {} de oluşturabilirsin fakat ozaman return kullanmalıyız.!
let carp = (a,b) => a*b
console.log(carp(2,5))
*/

/* altta [} kullandıgımız ıcın return kullanmak zorunda kaldık
let kareAlYazdır = x => {
    let kare = x*x;
   return kare;
    
}

console.log(kareAlYazdır(6)) // 36
*/

/*
// alttaki paremetresiz fonksiyon örneği 
let selamla =() => console.log("selam");
selamla();
*/

// altta map fonksiyonla ilgili bir örnek
/*
let sayilar = [1,2,3,4];
//let kareleri = sayilar.map(sayi => console.log(sayi*sayi))
let kareleri = sayilar.map(sayi => sayi*sayi)
console.log(kareleri)
*/
//******************************************************************************************************** */


