// 자바 스크립트 3종류

//자바스크립트 코어: 개발언어의 문법적 내용 다룬다.
//클라이언트 측 자바스크립트: 브라우저 제어할때 사용하는 자바스크립트
//서버 측 자바스크립트: 서버 개발쪽에 필요 




// comic 박스 생성한 상태 = 변수
// var comic;


// comic 박스 안에 원피스 데이터를 할당한 상태 
// comic = "원피스";

// console.log(comic);

// var apple="사과";

/*
var a;
var b;
 var c;
 */

// 변수 동시 선언

 // var a,	b, c;

//변수 동시 초기화
/*
var d=10;
var e=20;
var f=30;
*/

//var d=10, e=20, f=30;




// 모든 변수는 선언과 동시에 undefined 자동으로 할당된다. 정말중요!!

// var computer;
// console.log(computer);

/*
var house;
house ="집";
console.log(house);


house="아파트";
console.log(house);
*/


/*
var house;
console.log(house);

//undifined -> 집 
house="집"
console.log(house);
*/

 // 캐멀 케이스 (짧게)
// var mathScoreStudent = 10;

//스네이크 케이스 (길게)
// var math_score_student = 10;

// 캐멀 vs 스테이트 = 캐멀>>>스네이크 (우수x 익숙o 내가 속한곳 성향에 따라서 사용 o)

// 1.주의점 - 불가
// var math-score-stuent =100;

// 2.특수문자 가능한 경우 2가지
// var _math;
// var $math; 

// 3.변수명 알파벳+숫자 가능  숫자 +알파벳은 불가
// var apple10;
// var 10apple;

// 4.최대한 자세하게 작성하라!





// 데이터 타입=데이터의 종류 

// 원시타입
// 1.문자열(String) 2.숫자(Number) 3.논리(Boolean True/false) 
//4.Undefined(변수선언 기본) 5.null

// 조타입
// 6.배열(Array) 7.함수 (Funtion) 8.객체 (Object)
 

// 문자열 -mix 사용 금지 "" 와 ''
// var msg1 = "Hello World"
// var msg2 = 'Welcome'
/*
console.log(msg1);
console.log(msg2);

// She's girl: is 축약같은 경우

var msg4 ="she's girl";
var msg5 = 'she\'s girl'

console.log(msg4);
console.log(msg5);
*/


// 숫자 (Number) 파란색으로만 표
/*
var num1= 10;
var num2=-10;
var num3=3.14;
var num4=-3.14;

console.log(num1);
console.log(num2);
console.log(num3);
console.log(num4);

console.log(num1 + num2);
console.log(num1 + num3);
*/

/*
//연산자 
// 숫자 사칙연산
var a = 20;
var b =10;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

// 문자열
var str1 = "20";
var str2 = "10";

console.log(str1 + str2);
console.log(str1 - str2);
console.log(str1 * str2);
console.log(str1 / str2);
console.log(str1 % str2);
// 사칙연산 작업 가능

var firsName = "Zion"
var lastName = "Song"

console.log (firstName + "       " + lastName)
// 공백까지도 문자로 취급 +는 문자를 이어붙임 


var str11 = "현재 시간은 ";
var time = 10;
var str12 = "시 입니다."

console.log(str11 + time +str12);
// 최종값은 문자열 데이터 타입이 된다 문자 숫자 결합시키기 가능 
*/




// ++, -- 연산자

// var num10  = 10;
//데이터 해석시 뒤에서 부터 해석하는게 좋다//
// num10 = num10 -1;
// console.log(num10); 

// console.log(--num10); 
//9
//변수안에 들어간 숫자를 -1식 차감 //
// console.log(--num10); 
//8

// console.log(++num10); ++나 --를 앞에쓰냐 뒤에 쓰냐 따라 달라짐 
// console.log(++num10);

// console.log(num10--); 후차감 앞에 --는 선차감
// console.log(num10);


// +=, -+, *= /=, %=
/*
var num20 = 20;

num20 = num20 + 10;
*/



// 비교 연산자 >, <, ==, ===,!=, !==, <=, >= 
/*
var a =10;
var b =20;
var c =30;

console.log (a > b);
console.log (a < b);
console.log (a >= b);
console.log (a <= b);

console.log (a == b);
console.log (a === b);

//== === 같다라는 의미 != !== 다르다 의미 

console.log (a != b);
console.log (a !== b);
*/

/*
var num10 =10;
var num20 =20;
var str10 = "10";
var str20 = "20";


console.log(nim10 == str10);
console.log(num10 === str10);

console.log(num20 != str20);
console.log (num20 !== str20);
*/

//논리 연산자 : AND(&&)양쪽이 참일경우  OR (||)앞에 결과가 참 또는 뒤에 나오는 결과가 참 둘중 하나만 참이면 true
/*
var num30 = 30;
var num40 = 40;
var num50 = 30;

console.log(num30 === num40 && num30 === num50);
console.log(num30 === num40 || num30 === num50);
*/

//불리언 (boolean) : true, false
/*
console.log(true);
console.log(false);
console.log(1 === 2);
console.log(10 < 20);
console.log(10 === 10 || 20 === 30);

var bool = true;
bool = false;
*/

// null, undifined
// null : 변수 초기화로 명시... 빈값을 변수 안에 할당된 상태 

// var n = null

// undifined 변수를 선언만 상태
// var u;

// console.log(n);
// console.log(u);


// null과 undifined 차이점 
// console.log(typeof 10);
// console.log(typeof "Hello World");


// console.log(typeof null);
// console.log(typeof undefined);

// console.log(null == undefined);
// // console.log(null === undefined);

// // !=부정
// // console.log(!true);
// // console.log(!false);


// // console.log(!null); // 한번 부정 true
// // console.log(!!null); //!true


// // console.log(!undifined);
// // console.log(!!undifined);


// // console.log(10 + null ); // null은 숫자 만나면 0
// // console.log(10 + undifined); // NAN =Not A Number 오류


// //참조 타입

// //함수 (function) 정말 중요하고 정말 자주 쓰는 타입

// // console.log(10 + 10);
// // console.log(20 + 30);
// console.log(5 + 10);

// 임의 숫자 2개 전달받아서 덧셈을 하는 기능 만들고 싶다 =함수

/*
//함수 선언 
function sum (){

    // console.log("Hello")
    console.log (10 + 10);
}


// 함수의 기능을 작동시킨 상태 = 함수호출 여러번 가능 
sum ();
sum ();
sum ();
sum ();
sum ();
*/

/*
// Parameter(매개변수) ,Aargument (인수)
//매개변수 : num1, num2
function sum(num1, num2) {
    console.log(num1 + num2); 
}



//인수 :  호출시 전달되는 값 
sum(10, 20);
sum(100, 50);
*/

/*
function fullName(firstName, lastName){
    console.log (firstName+" " + lastName)
}

fullName("Zion", "Song")
*/

/*
function area(width, height){
    console.log(width);
    console.log(height);
    var result = width * height;
    console.log (result);
}

// 매개변수(모든 데이터 타입 가능)와 인수가 쌍을 이루어야 한다
    // var result = width * height;
    // console.log(result);



area(10);
*/

/*
function test(a) {
    console.log(a);
}

test (10);
test("Hello");
test(true);
test(null);

test (function a() {});
test
*/


// return

// function area (hor, ver ){
    // return hor * ver
// }

// var volume = area (10, 20) *100;//200
// console.log (volume)


//배열 (Array)

// var banana = "바나나";
// var apple = "사과";
// var  melon = "멜론";

var fruit = ["바나나","사과","멜론"]; 묶음 가능
console.log(fruit);

//인덱스 (index) =좌표 특정 데이터 위치 추출 가능 
console.log(fruit[0]);
console.log(fruit[2]);

fruit[2]="수박";
console.log(fruit);