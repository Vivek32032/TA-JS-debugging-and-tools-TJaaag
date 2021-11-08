function fullName(firstName="",lastName=""){
   return firstName+" "+lastName
}
//first test
let expected = "AryaStark";
let result = fullName("Arya","Stark");
if (result !== expected){
    throw new error (`add space between them`)
}
//2nd test
expected = "Arya Stark";

if (result !== expected){
    throw new Error(`add space between them`)
}


// totalAmount function
function totalAmount(amount=0,taxRate=0) {
   return amount + (amount * taxRate/100);
}

//test
let expectedAmount = 110;
let resultAmount = totalAmount(100);

if (resultAmount !== expectedAmount){
   throw new Error("tax rate is not entered")
}
resultAmount = totalAmount(100,10);
if (resultAmount !== expectedAmount){
    throw new Error("tax rate is not entered")
 }