function Callback(){
    console.log("Callback function is called.");
}

// 일정 시간이 지나면 콜백 함수 호출
// setTimeout은 한 번만 호출됨.
setTimeout(Callback, 3000);

// 초 단위로 반복하여 호출됨. 
setInterval(Callback, 5000);

// clearInterval(2);

