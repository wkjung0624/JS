// Arrow Function - 화살표함수

// 함수 선언식
function add() {

}

// 함수 표현식
// case 1:
var add = function (x1, x2) {
    var sum = x1 + x2;
    return x1 + x2 + sum;
};

var add = (x1, x2) => {
    var sum = x1 + x2;
    return x1 + x2
};

// case 2:
var div = function (x1, x2) {
    return x1 / x2;
};

var div = (x1, x2) => x1 / x2

// 함수를 의미하는 function 이 생략되고 파라미터를 바로 받아옴
// '=>' 구문 뒤에 중괄호를 사용하여 함수 코드를 작성함
// 만약 함수 내부 코드가 한 줄로 끝내는 문장이라면 case2 와 같이
// 중괄호('{}')와 'return' 구문을 생략하여 사용할 수 있다.