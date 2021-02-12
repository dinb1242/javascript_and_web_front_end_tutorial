var sum = 0;
for (var i = 1; i <= 50; i++) {
    sum += i;
}

// 함수의 스코프를 다르게 설정함으로써 독립적으로 동작할 수 있게 함.
function a() {
    // 1에서 5까지만 값을 출력하고 싶음.
    for (var i = 1; i <= 5; i++) {
        console.log(i);
    }
}
// 그러나 본 함수는 일회성의 성격을 띠므로, 더 간단한 익명함수로 표현 가능함.
a();

(function(){
    for(var i=0; i<5; i++){
        console.log(i);
    }
})();


for (; i <= 100; i++) {
    sum += i;
}

console.log(sum);