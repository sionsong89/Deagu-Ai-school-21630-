// IF 조건문 
// var a = 20;
// var b = 40;
// var c = 60;


//else는 if문이 거짓일 경우 다른 명령문을 이어가는 명령어 
//주의점:
/*
if(a > b) {
    console.log ("a는 b보다 작다.");
}
*/

/*
if(a > b) {
    console.log ("a는 b보다 크다.");

}else {
    console.log("a는 b보다 작다.");
}
*/

/*
if (a > b) {
    console.log ("a는 b보다 크다 .");

}else if (b > c) {
    console.log("b는 c보다 크다.");
}else if (a <  c) {
    console.log ("a는 c보다 작다.");
}else if (b < c ) {
    console.log ("b는 c보다 작다.");
}else {
    consle.log ("모든 조건을 만족하지 않는다.");
}
*/


// 중첩 if문 탄탄한 논리 구조 작성에 좋다.
/*
if(a !== b){

    if(a >b){
        console.log ("a는 b보다 크다.");
     }else{
        console.log ("a는 b보다 작다");
     }

}else {
    console.log("a와 b는 같다.");
}
*/


//거짓이 되는 상황
//false,빈 문자열:'' "" , 0,null,undefined


/*

if (-1) {
    console.log("참!!!");
}else {
    console.log("거짓!!!");
}


// 삼항 연산자 
var age = 15;

if (age >= 18) {
    console.log("성인");
}else {
    console.log("어린이");
}


var result = (age >= 18) ? "성인" : "어린이";
console.log (result);

var userId = prompt ("아이디를 입력해 주세요.");
var userPw = prompt ("비밀번호를 입력해 주세요.");

// console.log (userId);
// console.log (typeof Pw);

if(userId === "zion" && userPw === "12345") {
    alert("로그인되었습니다.");
}else{
    alert("아이디 또는 비밀번호가 틀렸습니다.")
}

*/


//전역 변수, 지역변수 =  함수를 기준으로 구분된다.
//전역변수 : 함수의 바깥에서 선언 ->프로그램 전체에서 공유 가능
//지역변수 : 함수 ㄴ ㅐ부에서 선언
/*
var globalV = "전역변수";

function func() {
    var localV = "지역변수"

    console.log (globalV);
    console.log (localV);
}

//func();

console.log (globalV);
console.log (localV);
*/

//var a =10;
// a =100;

/*
var gv = "전역변수";

funtion func () {
    var gv = "지역변수";
    console.log(gv)
}

func();

console.log(gv);
*/

//지역 스코프
/*
function func() {
    var lv = "전역변수"
    console.log(lv);    
}

func();

console.log (lv);
*/

/*
// 함수는 서로의 스코프에 접근할수 없다.
function a ( ){

    var apple = "사과";

} //사과는 함수 안에서만 영향력 발휘할수 있다.

function b (){
    a();
    console.log (apple);
}

b();
*/


var a =10;

function func1(){

    var b =20;

    function  func2() {
        var c =30;
    
        console.log (a+b+c);

    }

    func2();
}

func1()

var a =100;
a = 3.1 4;


var name ="zion"

function func1() {
    console.log(name);

}

function func2 (){
    name = "song"
    func1(); // console.log(name) (x)
}

func2();

