// function


// // 1. 함수 선언식

// function add(x,y) {
//     return x+y;
// }
// console.log(add(2,3));

// // 2. 함수 표현식

// var addStr = function(x,y){
//     return x+y;
// }
// console.log(addStr("안녕", "하세요"));

// // 2-1 화살표 함수 표현식
// var add = (x, y) => {
//     return x + y;
// }
// console.log(add(2,3));

// // 3. 화살표 함수

// // 로직이 한 줄일때 return 문 생략 가능
// var add = function(x,y){
//     return x+y;
// }
// var add = (x, y) => x + y;
// var add = (x, y ) => (x + y);

// // 매개변수가 하나일 때 매개변수 소괄호 생략 가능
// var square = function(x){
//     return x * x;
// }
// var square = x => x * x;

// // 객체를 리턴하고 로직이 한줄일 때는 소괄호 ()로 감싸줘야 함
// var person = function(name, age){
//     return {
//         name : name,
//         age : age,
//     };
// }

// var person = (name, age) => ({name : name, age : age});

//Object

const person = new Object(); // 빈 객체

person.name = '이름';
person.part = 'Server';
person["gender"] = 'female';
person.sayHello = function(){
    console.log(`안녕하세요 ${this.name} 입니다`);
}

console.log(typeof person);
console.log(person);

person.sayHello();

console.log('-----------');

//객체 리터럴
const emptyObject = {}; // 빈객체 생성
console.log(typeof emptyObject);

const animal = {
    animalType : "dog",
    animalName : "뽀삐",
    animalFreinds : ['코코', '초코', '쿠키'],
    bark : function(){
        console.log(`${this.animalName} : 멍멍`)
    },
    thisFriends : function(){
        this.animalFreinds.forEach( friend => {
            console.log(`${this.animalName}의 친구 ${friend}`)
        })
    }
}

console.log(animal);
animal.bark();
animal.thisFriends();