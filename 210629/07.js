// Object Destructuring

function getPerson() {
    return {
        firstName: "John",
        lastName: "Doe",
        age: 38,
        email: "john@gmail.com",
        city: "seoul",
        country: "etest"
    }
}

var person = getPerson();
console.log(person.firstName);
console.log(person.firstName);

var {
    firstName,
    lastName,
    test
} = getPerson(); // 많이 쓰이는 것이니 숙지

console.log(firstName);
console.log(lastName);
console.log(test);

// Array Destructuring

function getScores() {
    return [70, 21, 100];
}

var scores = getScores();


var [
    t1,
    t2,
    t3
] = getScores();

console.log(t1, t2, t3)

var [a, b, c] = [10, 20, 30]

console.log(a, b, c)


var [a, b, [c, d, e]] = [10, 20, [30, 40, 50]]

console.log(a, b, c, d, e)

// 지리정보, 좌표를 이용하는 외부라이