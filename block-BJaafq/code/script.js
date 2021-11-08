//test framework
function test (message,callback){
    try{
        callback();
        console.log("Right",message);
    }catch(error){
        console.error(error);
        console.log("wrong",message);
    }
}

//assertion library

function expect (actual){
    return{
        toEqual : function(expected){
            if(actual !== expected){
                throw new Error(`${actual} is not equal to ${expected}`)
            }
        }
    }
}

function sum(numA,numB){
    return numA+numB;
}
let result,expected;


function testSum(){
     result = sum(2,4);
     expected = 5;
     expect(result).toEqual(expected);
}
function testSumSecond(){
    result = sum(2,4);
    expected = 6;
    expect(result).toEqual(expected);
}

test("first sum",testSum);
test("second sum",testSumSecond);



function multiplyNumbers(numA,numB){
      return numA*numB
}

function testMultipiction(){
    result = multiplyNumbers(2,4);
    expected = 6;
    expect(result).toEqual(expected);
}
function testMultipictionSec(){
    result = multiplyNumbers(2,4);
    expected = 8;
    expect(result).toEqual(expected);
}

test("first multiplication",testMultipiction);
test("second multiplication",testMultipictionSec);