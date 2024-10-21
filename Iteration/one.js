// for

for (i = 0;i < 10;i++) {
    const element = i;
   // console.log(element);   
}

for (let i = 1; i <= 10; i++) {
    //console.log(`----------------------------`);
    for (let j = 1; j <= 10; j++) {
      //  console.log(`Inner loop value: ${j} and Inner loop value: ${i}`);
       // console.log(`${i} * ${j} = ${i*j}` );
        
    }
    
}
for (let i = 1; i <= 10; i++) {
   if(i==5){
    console.log(`5 is detected`);
    break;
   }
   console.log(`value of i is: ${i}`);
   
}
for (let i = 1; i <= 10; i++) {
   if(i==5){
    console.log(`5 is detected`);
    continue;
   }
   console.log(`value of i is: ${i}`);
   
}

  
 