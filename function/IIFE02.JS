//++++++++++++++++++++++++++(Immediately Invoked function expressions)--> IIFE++++++++++++++++++++++++++

(function chai(){
    console.log(`DB CONNECTED`);  
})();

//or

((name) =>{
    console.log(`DB CONNECTED,  ${name}`);
    
})('Abhi');