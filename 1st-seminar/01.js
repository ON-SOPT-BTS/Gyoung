const symbol1 = Symbol('id');
const symbol2 = Symbol('id');

console.log(symbol1.description);
console.log(symbol1 == symbol2);

console.log('---------------');

const includes = Symbol('커스텀 includes 함수');

Array.prototype[includes] = function(){
    return "it's Symbol";
}

var arr = [1,2,3];
console.log(arr.includes(1));  // js 기본 함수
console.log(arr['includes'](1)); // js 기본 함수
console.log(arr[includes](1));  // 커스텀 함수


// null, undefined
let nothing = null;
console.log(`nothing : ${nothing}, type : ${typeof nothing}`);
let x;
console.log(` x : ${x}, type ${typeof x}`);

console.log('null vs undefiend');
console.log('null == undefined', null == undefined);  // type 은 비교 안하고 값만 비교한다
console.log('null === undefined', null === undefined); // 동등연산자 : type도 비교한다.
