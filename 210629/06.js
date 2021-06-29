// Spread Operator
// 배열, 문자열 같은 형태의 데이터를 요소 하나하나 모두 분리해서 사용할 수 있게 해주는 문법

var arr_1 = [4, 5, 6];
var arr_2 = [1, 2, 3];
var arr_3 = [...arr_2, ...arr1]; // [1,2,3  ,4,5,6] => 파이썬의 extend 랑 동일

var str = "CDEFG";
var alphabet = ["A", "B", ...str];