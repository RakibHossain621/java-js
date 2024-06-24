// import { allImages, modla_img, btn } from "./modal";

// let number = [4,5,6,7,8];
// let squreNumbers = number.map(function (number){
//     return number * number
// })

// console.log(squreNumbers);

// number=5
// x=10;
// console.log(x+number);allImages.forEach(function (img) {
//     img.addEventListener("click", function () {
//         modla_img.src = img.currentSrc;
//         btn.href = img.currentSrc;
//     });
// });




// TODO: array method Foreach map   !! array hole 3 ta man upor kaj kore value,index,array

// const numbers= [20,30,40,50,60,70];
// const demo = document.querySelector("#demo")
// const result = numbers.map((number, index, array)=>{
//     return number        // er morde ami +,-,* sob korte pari
// }
// )
// demo.innerHTML=result
// console.log(result)


// const names = ['rakib', 'Anamul','ashik','raju','alif'];
// const demo= document.querySelector("#demo");
// names.push('rabbi')  //last theke add hoi push method
// names.pop()          // last theke del hoi pop method
// names.pop()
// console.log(names)
// demo.innerHTML=names

// TODO: arry unshift method  kaj holo First kono Value add korte chaile ata use korte hobe

// const names = ['anamul','rakib', 'raju'];
// const demo = document.getElementById('demo');
// names.unshift('balam')
// names.unshift('saju')
// demo.innerHTML = names
// console.log(names)

// TODO: array shift er kaj holo First theke value delete kora
// const names = ['anamul','rakib', 'raju'];
// const demo = document.getElementById('demo');
// names.shift()  
// names.shift()
// demo.innerHTML = names
// console.log(names)

// TODO: array sort  method holo sorting kora er kaj holo alomelo kicu gusano sajano
// const number = [2,3,1,5,4,7,6];
// const names = ['balam','anamul','cow','dog'];
// const demo = document.getElementById('demo');
// number.sort()
// names.sort()
// console.log(number)
// demo.innerHTML = number


// TODO:   array fliter kaj holo shka amar jei ta mull jinish sei ta return korbe 

// const number = [1,2,3,4,5,6,7,8,9,10];
// const myNumber = number.filter((num) => {             //const myNumber = number.filter((num) => num >5 )  ai 
// return num                                         //     vabe use kora jai
   
// })
// console.log(myNumber)

// // ex:2
// // TODO: ja diye filter korbo sei ta show korbe fliter
// const heroNames=[
//     {name: "hritik hasan",age: 33 , profession: "actor"},
//     {name: "tiger shorif",age: 43 , profession: "actor"},
//     {name: "balam",age:28 , profession: "singer"},
//     {name: "arjit sing",age: 33 , profession: "singer"},
//     {name: "jahid hasan",age: 28 , profession: "director"}
   
// ];

// const singhero= heroNames.filter((hero) => hero.age == 28 );
// console.log(singhero) 




// TODO: araay reduce method hole onk value gulo +jog kora 

// const numbers = [2, 3, 4, 5];

// const sumResult = numbers.reduce((prevValue, currentValue) => {
//     // checking value
//     console.log(`prevValue: ${prevValue} and currentValue: ${currentValue}`);
//     return prevValue + currentValue;
// }, 0);

// console.log(sumResult);

// const shoppingCart = [
//     {item: 'T-shirt',
//      price: 1200
//     },
//     {item: 'Pant',
//      price: 800
//     },
//     {item: 'shooe',
//      price: 900
//     },
    
// ];

// const sumPrice = shoppingCart.reduce((prevValue ,item) =>{
//  return prevValue + item.price
// },0)

// console.log(sumPrice);


// TODO: array slice  & splice method 

// TODO: slice er kaj holo cutting ami joto tuk theke joto tuk posonto katte thakbo tuto tuko kata javbe
  
// const numbers = [1,2,3,4,5,6,7,8,9,]

//   const newNumbers= numbers.slice(2,5);
//   console.log(numbers)
//   console.log(newNumbers)

// splice er kaj holo delte kora value 

// TODO: const fndNames = ['rahim', 'karim', 'raju', 'rakib']

// const newNames = fndNames.splice(1,2);
// // const newNames = fndNames.splice(1,2,5);
// console.log(fndNames)
// console.log(newNames)


// TODO: concat  method holo 2 ta value aksate jog kora example
// const arr1 = ["rakib", "anamul"];
// const arr2 = ["ashik", "raju", "linux"];
// const children = arr1.concat(arr2); 

//  console.log(children);

// TODO: join method er kaj holo value just print kora

//  const fruits = ["Banana", "Orange", "Apple", "Mango"];
//  const  text = fruits.join();
//  console.log(fruits)
//  console.log(text)

// TODO: includes holo array value kuja jodi pay tahle true pele False bole dibe

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const toFruit =  fruits.includes("Apple");
// console.log(toFruit)


// TODO: arry object 

// const products = [
//    {
//     name: 'car',
//     price: 10000
//    },
//    {
//     name: 'bike',
//     price: 120000
//    },
//    {
//     name: 'cycle',
//     price: 90000
//    }
// ];
// products.forEach((product) => {product.name
// // console.log(product.name)
//     });
// const productNames = products.map((product) => product.name);

// console.log(productNames);
    


// forEach objects
// const products = [
//     {
//      name: 'car',
//      price: 10000
//     },
//     {
//      name: 'bike',
//      price: 120000
//     },
//     {
//      name: 'cycle',
//      price: 90000
//     }
//  ];
 
 // প্রতিটি প্রোডাক্টের নাম পরিবর্তন করুন  ForEach
//  products.forEach(product => {
//      if (product.name === 'car') {
//          product.name = 'new car';
//      } else if (product.name === 'bike') {
//          product.name = 'new bike';
//      } else if (product.name === 'cycle') {
//          product.name = 'new cycle';
//      }
//  });
// TODO: price change forEach
//  products.forEach(product => {
//     if (product.name === 'car') {
//         product.price = 11000;
//     } else if (product.name === 'bike') {
//         product.price = '130000';
//     } else if (product.name === 'cycle') {
//         product.price = '100000';
//     }
// });
 
//  console.log(products);

// TODO: array in duplicate element
// const fndNames = ['moku', 'boku', 'rakib', 'boku', 'moku'];

// function ignorList(frindList) {
//     let newList = [];
//     for (let i = 0; i < frindList.length; i++) {
//         const name = frindList[i];
//         if (newList.includes(name) === false) {
//             newList.push(name);
//         }
//     }
//     return newList;
// }

// const finalResult = ignorList(fndNames);
// console.log(finalResult);

// array in duplicate element

// Array mota moti complete

// TODO: function chappter
// TODO: first step 
// daynamic user input dile output ashbe
// function myFun(name,county){
//     console.log(" My Name is " +  name + " and I am form " + county)
// }

// myFun("rakib","bangladesh")
// myFun("raju", "chaina")
// TODO: second step
//  function myfunc(num1,num2){
//   console.log(num1+num2)
//  }
//  myfunc(10,40)
//  myfunc(60,40)
//  myfunc(100,600)

// TODO:function with objects

// const products ={
//   names: 'computer',
//   price: 5200,
//   color: 'black'
// }

// function addToproducts(anyobjects){
//   console.log(`Products name is ${anyobjects.names} and price is ${anyobjects.price}`)
// }
// addToproducts({
//     names : 'tata4',
//     price : 100000,
//     color : 'blue'
// }) 

// calback function
// function first(a, b, callback) {
//     setTimeout(() => {
//         console.log(a + b);
//         callback();
//     }, 500);
// }

// function second() {
//     console.log("Callback function executed.");
// }

// first(4, 5, second);
// call back function
// promise function    pending / reslove / rejects /
// let willMarry = true;
// new Promise((resolve, reject) => {
//    setTimeout(() => {
//     if (willMarry) {
//         resolve('success');
//     } else {
//         reject('sorry......');
//     }
//    }, 200);
// }).then(() => {
//     console.log('se tar promise korse');
// }).catch(() => {
//     console.log('Sorry ami tumake biye korte parlam na');
// });
// function motamoti ses

// for in loop  sudu object morde kaj korte hobe

// const perosn = {fname:'rakib',lname: 'hossian', age:'23'}

// for(const x in perosn){
//     console.log(perosn[x])
// }




// dom attibute

// Element.getAttivute er kaj holo kono class add korar jonno kaj kore 
// er set attivute er kaj holo class koi ta dewa ase sei ta check kora


// create append Element

// const body = document.body; // Get the body element

// const div = document.createElement("div");

// const headingOne = document.createElement('h1');
// headingOne.innerText = 'This Title';
// div.appendChild(headingOne);

// const pera = document.createElement('p');
// pera.innerText = 'this is pera';
// div.appendChild(pera);

// body.appendChild(div);

// project 1 change text + facebook comment
// const btn = document.getElementById("btn");

// btn.addEventListener("click", function () {
//     const inputtext = document.getElementById('inputtext').value;
//     const demo = document.getElementById('demo');
//     demo.innerHTML += inputtext + "<br>";
// });

// project 1 change Text + facebook comment


// second project

// const comment = document.getElementById("comment");

// comment.addEventListener('click', () => {
//     const commentBox = document.getElementById("commentbox");
//     const commentBoxValue = commentBox.value; 
//     const commentPlace = document.getElementById('comment-place');
//     const makePTag = document.createElement('p'); 
//     makePTag.innerText = commentBoxValue;
//     commentPlace.appendChild(makePTag);

//     commentBox.value = '';
// });


// jason api 

function loadApiData (){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => displyData(data))
}

function displyData(data){
console.log(data);
}