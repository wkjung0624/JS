// Object Literal Syntax Extension

var firstName = "John";
var lastName = "Doe";

var Person = {
    firstname: firstName,
    lastName: lastName
}
// Person 변수 내에 firstname 마치 지역 변수처럼 외부의 firstName 과는 다른 변수로 본다
// 단 Person 의 firstname 키에 값을 넣을 때에는 3번 라인의 firstName의 값을 참조한다.

var type = "student";
var Person = {
    [type]: firstName + lastName
}

// 만약 키값을 동적으로 받아오고싶다면 외부의 변수를 15번 라인처럼 대괄호로 묶어서 사용한다.