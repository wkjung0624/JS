// Scope 선언된 변수에 대한 접근성
// 함수안에서 선언된 변수는 외부에서 사용불가, 지역변수 개념
// 변수 호출시 동일 블럭에서 지역변수를 찾고
// 없다면 글로벌 변수를 찾게됨 
// 21 - 24번 라인 

let carName = "KIA";

{
    let carName2 = "HYUNDAI";
    console.log("Local Block 1 >> " + carName);
}

// {
//     let carName = "SSANGYONG";
//     console.log("Local Block 2 >> " + carName2);
// } 

console.log("Global Block >> " + carName);





// Default Function Parameter - 함수의 파라미터 기본 값
function say(msg = "None") {
    console.log(msg);
}

say();
say("Hello");

// Rest Parameter
function add(...nums) {
    var sum = 0;
    for (var n of nums) {
        sum += n;
    }
    return sum;
}

console.log(add(2, 5, 3, 7, 43, 21));