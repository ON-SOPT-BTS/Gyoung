
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
