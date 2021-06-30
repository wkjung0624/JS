let vendingWallet = 10000;
let insertWallet = 0;
let myWallet = 10000;

let productList = {
    "torta": {
        name: "토레타",
        size: 6,
        price: 500
    },
    "coke": {
        name: "코카콜라",
        size: 1,
        price: 1000
    },
    "cyder": {
        name: "사이다",
        size: 5,
        price: 700
    },
    "pepsi": {
        name: "펩시",
        size: 7,
        price: 500
    },
    "mxwel": {
        name: "멕스웰",
        size: 8,

        price: 300
    },
    "hutgae": {
        name: "헛개수",
        size: 5,
        price: 300
    },
    "vita500": {
        name: "비타500",
        size: 12,
        price: 450
    },

    "skybori": {
        name: "하늘보리",
        size: 18,
        price: 600
    }
};

//document.getElementsByClassName("btn").addEventListener("click", itemClicked(this));


init();

function init() {

    for (key of Object.keys(productList)) {

        const pName = productList[key]["name"];
        const pSize = productList[key]["size"];
        const pPrice = productList[key]["price"];

        document.getElementById(key).textContent = `${pName} (${pSize}, ${pPrice})`;
    }

    document.getElementById("vendingWallet").value = 10000;
    document.getElementById("insertWallet").value = 0;
    document.getElementById("myWallet").value = 0;
}

function itemInfoChange(object) {
    productList[object.id]["size"] -= 1; // 상품갯수 1개 감소

    const pName = productList[object.id]["name"];
    const pSize = productList[object.id]["size"];
    const pPrice = productList[object.id]["price"];

    object.textContent = `${pName}\n\n(${pSize}, ${pPrice})`;
}

function moneyBack() {
    let insertWallet = parseInt(document.getElementById("insertWallet").value);
    let myWallet = parseInt(document.getElementById("myWallet").value);

    document.getElementById("myWallet").value = myWallet + insertWallet;
    document.getElementById("insertWallet").value = 0;
}

function payment(price, pName = "", pPrice = "") {
    let insertWallet = parseInt(document.getElementById("insertWallet").value);
    let vendingWallet = parseInt(document.getElementById("vendingWallet").value);

    if (insertWallet - price < 0) {
        alert("기계에 넣은 돈이 부족합니다.")
        return false;
    } else {
        insertWallet -= price;
        vendingWallet += price;

        document.getElementById("insertWallet").value = insertWallet;
        document.getElementById("vendingWallet").value = vendingWallet;

        addHistory(0, pName, pPrice);
        return true;
    }

}

function insert(money) {
    let myWallet = parseInt(document.getElementById("myWallet").value)
    let insertWallet = parseInt(document.getElementById("insertWallet").value)

    if (myWallet - money < 0) {
        alert("투입할 돈이 부족합니다");
        return false;
    } else {
        myWallet -= money;
        insertWallet += money;

        document.getElementById("insertWallet").value = insertWallet;
        document.getElementById("myWallet").value = myWallet;

        addHistory(2, money);
        return true;
    }
}

function deposit(money) {

    let myWallet = parseInt(document.getElementById("myWallet").value)

    myWallet += money;

    document.getElementById("myWallet").value = myWallet;

    addHistory(1, money);
}

function itemClicked(object) {

    let pId = object.id;
    let pPrice = productList[pId]["price"];
    let pName = productList[pId]["name"];
    let pSize = productList[pId]["size"];

    if (pSize > 0) {
        if (payment(pPrice, pName, pPrice)) {
            itemInfoChange(object);

            if (pSize == 1) {
                object.setAttribute('class', 'disable');
                object.textContent("품절");
            }
        }

    } else {
        alert("상품이 품절되었습니다.");
    }
}

function addHistory(flag, ...result) {
    let historyElement = document.getElementById("side-bar");
    let logMsg = "";


    let myWallet = document.getElementById("myWallet").value
    let vendingWallet = document.getElementById("vendingWallet").value
    let insertWallet = document.getElementById("insertWallet").value

    switch (flag) {
        case 0: // 상품 구매
            logMsg = `${result[0]} 를 구매하였습니다. <br>(기계가 가진 금액 : ${vendingWallet-result[1]} => ${vendingWallet}})`;
            break;
        case 1: // 원화 충전
            logMsg = `돈을 충전하였습니다. <br>(내가 보유한 금액 : ${myWallet-result[0]} => ${myWallet})`;
            break;
        case 2: // 기계에 원화 충전
            logMsg = `기계에 돈을 넣었습니다. <br>(기계에 넣은 금액 : ${insertWallet-result[0]} => ${insertWallet})`;
            break;
    }

    historyElement.insertAdjacentHTML('beforeend', `<p> ${logMsg} </p>`);
}