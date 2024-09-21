function addToCart(quantity,productName="Elma"){ // paremetre gelmezse Elma defaulttur demek  {
    console.log("Sepete eklendi : ürün : " 
    + productName + " adet : " + quantity)
}

//addToCart() 
addToCart(10)
//addToCart(15)

let sayHello = ()=>{ // değişkeni fonksiyon olarak tanımlarız
    console.log("Hello World!")
}

sayHello()

let sayHello2 = function () { // değişken içinede fonksiyon tanımlanabilir
    console.log("Hello World 2")
}

sayHello2();

function addToCart2(productName, quantity, unitPrice) {
    
}

addToCart2("Elma",5,10)
addToCart2("Armut", 2, 20)
addToCart2("Limon",3,15)

let product1 = {productName:"Elma", unitPrice:10, quantity:5} // obje tanımlama

function addToCart3(product) {
    console.log("Ürün : "+product.productName)
    console.log("Adet : "+product.quantity)
    console.log("Fiyat : "+product.unitPrice)
}


addToCart3(product1)

let product2 = {productName:"Elma", unitPrice:10, quantity:5}
let product3 = {productName:"Elma", unitPrice:10, quantity:5}
product2 = product3
product2.productName = "KARPUZ"
console.log(product3.productName)

let sayi1 = 10
let sayi2 = 20
sayi1 = sayi2
sayi2 = 100
console.log(sayi1)

function addToCart4(products) {
    console.log(products)
}

//aşağıda array içinde obje tanımlama
let products = [
    {productName:"Elma", unitPrice:10, quantity:5},
    {productName:"Armut", unitPrice:10, quantity:5},
    {productName:"Karpuz", unitPrice:10, quantity:5}
]

addToCart4(products)

function add(bisey,...numbers) { //rest deniyor buna yani ... yaparsan bu fonksiyona istediğin kdr eleman gönder array yapar
//ama ... olanı son paremetre olarak kullan yoksa patlar çünkü ilk paremetre kullanırsan yazcağın herşeyi kendi içine alır
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total = total + numbers[i]
    }
    console.log(total)
    console.log(bisey)
}

add(20,30)
//add(20,30, 40)
//add(20,30, 40, 50)

let numbers = [30,10,500,600,120]
//console.log(...numbers)
// eğer console.log(numbers) yazsaydın hepsini array olarak verecekti  ...numbers yaparak ayırdık ve kıyaslattık
// math max aralarındaki en büyüğü gösterir ... işlemi  burada  ayırıyor 
//fonksiyonda paremetre olarak kullanırsanda gönderilenlerin hepsini o değişkene atıyor.
console.log(Math.max(...numbers))


// altta yaptığımız şeyin özeti:  icAnadolu marmara karadeniz ve içanadolusehirleri diye  4 değişken var
//ve içine veri atıyoruz burda obje olarak veriler atamışız let den sonra [] yapmazsak değişken olarak kabul etmez.
let [icAnadolu,marmara,karadeniz,[icAnadoluSehirleri]] = [
    {name:"İç Anadolu", population:"20M"},
    {name:"Marmara", population:"30M"},
    {name:"Karadeniz", population:"10M"},
    [
        ["Ankara","Konya"],
        ["İstanbul","Bursa"],
        ["Sinop","Trabzon"],
    ]
]

// console.log(icAnadolu.name)
// console.log(icAnadolu.population)
console.log(icAnadoluSehirleri)

//altta obje oluştururken değişkenleri objenin elemanlarına eşitlemeyi gördük farklı bir kullanım
let newProductName, newUnitPrice, newQuantity  // burda tanımlama yaptık alttaki satır bu satırdan devam etmiyor
({productName:newProductName, unitPrice:newUnitPrice, quantity:newQuantity } 
= {productName:"Elma", unitPrice:10, quantity:5})

console.log(newProductName)
console.log(newUnitPrice)
console.log(newQuantity)

function asd([x],y,z=10) {
    console.log(y)
    
}
asd([10000,20000],3000) // burda çıktı 3000 dir çünkü x dizidir ve tek eleman var dolayısıyla atama olursa ilk elemanı alır
//  yani 20000 hiçbirşey ifade etmez ayrıca z ye atama gelmezse varsayılan =10 olsun komutu verilmiş şuanlık z =10
// eğer asd([10000, 20000], 3000,4000); olsaydı x 10000 y 3000 z 4000 olacaktı çünkü artık z ye bir atama yapılmış olurdu 