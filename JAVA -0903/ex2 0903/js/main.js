var arr = [
    {
        quote:"아이들은 누구나 예술가이다.",
        author:"피카소",
    },
    {
        quote:"내면의 목소리는 들리자 않게 된다.",
        author:"반 고흐",
    },
    {
        quote:"완벽을 두려워하지 말라",
        author:"달리",

    },
    {
        quote:"너의 장점은 다른상황에서 너의 단점이다.",
        author:"임용환"

    },
    {
        quote:"의욕만 있으면 이런 노력만으로도 얼마든지 많은 생각을 찾을 수 있다.",
        author:"수스",

    }

];
    
// console.log(arr[0].quote);
// console.log(arr[0].author);



var quote = document.getElemnentById("quote");
var author = document.getElemnentById("author");
var btn = document.getElemnentById('btn');

btn.addEventListener('click', function(){

    var random = Math.floor (Math.random() * arr.length);

    quote.textContent = arr[random].qoute;
    author.textContent = arr[random].author;

});