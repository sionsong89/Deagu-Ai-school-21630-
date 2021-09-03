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

/*
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

*/

/*
var a =100;
a= 3.14

var name= "zion"

function f unc1() {
    console.log(name)
}

function func2(){
    name="song"
    func1(); //console,log(name)은 아니다 
            //var 키워드 사용하면 func1 의 결과값 나옴 
}

fun2();

*/



//호이스팅 :주의점 초기화에는 적용 안된다.

/* 강제로 끌어올려짐
function func1() {
    console.log("Func1 함수다");
}
*/ 


// func1();



//var func2 = undifined;
/*
func2();

var func2 = function () {
    console.log("Func2 함수다");

}

func2();

//변수 호이스팅

console.log(a);

// var a;
// a = "나는 A다.";

var a = "나는 A다.";


console.log(a);
*/


//Math 
// console.log(Math);

// var num1 = Math.abs(-3);

// console.log (num1);


// var num2 = Math.ceil(0.3);
// console.log(num2);


// var num3 = Math.floor (10.9);
// console.log(num3);


// var num4 = Math.random ();
// console.log(num4);


// parseInt (), parseFloat() 실무에 사용 많다.
/*
var str1 = "20.6"; 
var str2 = "3.14";

var num1 = parseInt(str1); 소수점 아래 버림 
var num2 = parseFloat(str2);

console.log(num1);
console.log(num2);
*/



// 반복문 
//고정값:console.log(2* );
//일정한 규칙을 가지고 있는 가변값: 1,2,3,4,5,6,7,8,9
/*
console.log (2 * 1);
console.log (2 * 2);
console.log (2 * 3);
console.log (2 * 4);
console.log (2 * 5);
console.log (2 * 6);
console.log (2 * 7);
console.log (2 * 8);
console.log (2 * 9);


//while
var num = 1; //2, 3..... 10

while(num<10)//num이 10이하 일 경우에 ->조건 
{
    //2 * 1 =2 
    //2 * 2 =4
    //2 * 3 =6
    //2 * 9 =18
    console.log(2 * num);
    num+=2;
}

console.log ("반목문 종료")
//조건문이 언젠가 거짓이 되는것 필요 계속 참이면 무한루프에 빠짐 


//do ~ while 
//do:일단 최초 한번의 실행 while:실행후 조건을 따짐 
var i =12;

do { 
    console.log (i);
    i ++;
} while (i <10);



//고정값
//일정한 규칙을 갖고 있는 가변값
//for 가장 많이 사용 가변값 시작 조건 일정한 규칙들 다 넣을수있다.
// 시작 조건 규칙 이런순서대로 넣기 ;는 마지막에 넣을필요 없다.
var i;

for (var i = 1; i <10; i ++){
    console.log (2 * 1);
}
*/

/*
//중첩 반복문 
//중첩 for문 

//2단~9단 
for (var i =2; i <10; i++){

    for(var j = 1; j < 10; j++ ){
        console.log(i * j)
    }
}

// i =2 * j의 반복문이 j=1 조건문이 거짓때 for var j 종료
//내부 for 문 종료 되면 밖 for문 다시 셋팅 -> 내부 for문 초기화후 작동


//break 특정 반복문 빠져나오기 , continue: 특정 반복문 스킵 

for(var i =1; i <10; i++) {
    if(i===5) {
        break;
    }

    console.log(2 * i);
}
*/

/*
var arr= ['바나나', '사과', '수박','토마토', "토마토", "배", "포도"];
console.log(arr);
console.log(arr.length); 

//고정값 console.log(arr[]); 대열안의 모든 데이터 타입 알수있다.
//가변값 : 0, 1, 2

console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);


for (var i =0; i<arr.length; i++) {
    console.log(arr[i]);
}

// for ~ in 
for (var 1 in   arry) {
    console.log(annayP[1]);
    console.log(arr[i]);
}


//익명함수, 콜백함수
.addEventListener('click', funtion);

arr.forEach(funtion (element, index){

    console.log(element);
    console.log(index);
}

arr.map (funtion(element, index) {

    console.log(element);
    console.log(index);
})


//함수파트 다시 복습 


var result = arr.map(funtion(element, idex){

    return element + "" + "10;"
});

console.log(result);
*/

/*
var  student ={
    name: "song"
    age: 20,
    skills:["자바", "html", "css"],

    sum:function(num1, num2) {
        console.log(num1 + num2);
    }
}

//for ~ in 
// student.name
//student['name'];
for (var prop in student) {

    console.log(prop);
    console.log(student[prop]);
}

*/

/*
//배열:forEach(),map(), length 

//문자열 String
//length; 공백까지 가져옴
var txtLength = "Hello World";

// console.log(txtLength. length);
console.log(txtLength.trim(). length);
//trim 사용시 빈공간 제거 기본적 띄워쓰기는 제외


var result = prompt ("이름을 입력해 주세요");

console.log(result);
console.log(result.trim().length);


var str = "Nice to meet you abc";
 
 // console.log(str.length);
 // console.log(str.charAt(str.length - 1));

// 0번 이상 6번 미만 
 console.log(str.slice (0, 6));

 var str = "Nice to meet you to to";
 
 // console.log(str.length);
 // console.log(str.charAt(str.length - 1));
 // console.log(str.slice(2));

 // console.log(str.replace('Nice', 'Hello'));

 // console.log(str.indexOf('to'));

 // console.log(str.toUpperCase());검색어와 결합 
 // console.log(str.toLowerCase());

 var search = prompt("검색어를 입력해 주세요");
 if(search.toLowerCase() === "apple") {
    console.log("사과 데이터를 출력한다.")
 } else {

    console.log("false");
 }


 var arr = ["사과", "배", "수박"];

//console.log(arr.length);

arr.push("포도");

console.log(arr);

*/























var hex = document.getElementById('hex');
var btn = document.getElementById('btn');

// console.log(hex);
// console.log(btn);

btn.addEventListener('click', createColor);


function createColor() {

	//console.log("클릭");

	var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
	var color = '#';
	

	for(var i = 0; i < 6; i++) {
		var random = Math.floor(Math.random() * arr.length);
		color += arr [random];

	}
	

	document.body.style.backgroundColor = color;
	hex.textContent = color;
}

















//헥사코드
// #000ffff;
// 숫자: 0~9 
//알파벳:a ~ f
// 6글자 숫자와 알파벳 조합

// # + 0 = #0
// #0 + f = #0df;
// #0f + a = #0fa;
// #0fa + a = #0faa;
// #0faa + b = #0faab;
// #0faab+ c = #0faabc;






