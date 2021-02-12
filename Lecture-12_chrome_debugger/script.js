function eventHandler(){
    console.log("eventHandler");
    function innerFunc(){
        console.log("Inner Function");
    }
    for(var i=0; i<2; i++){
        innerFunc();
    }
}