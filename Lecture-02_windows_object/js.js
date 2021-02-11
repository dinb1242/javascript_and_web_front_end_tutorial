console.log(window);

var a = 1;
console.log(window.a);

function b(){
    console.log("This is a b function.");
}

console.log(window.b());

console.log(window.location); // 페이지가 실행되는 환경에 대해 확인 가능
 
console.log(window.location.href); // 현재 페이지에 대한 경로 확인 가능

console.log(window.navigator); // 브라우저 자체에 대한 정보를 열람 가능 

console.log(window.screen); // 현재 디스플레이의 가로/세로 정보가 담긴

console.log(window.document); // 현재 실행된 페이지의 소스코드

console.log(document.body); // 페이지의 body

console.log(document.head); // 페이지의 head;

console.log(document.styleSheets); // 페이지의 stylesheet



