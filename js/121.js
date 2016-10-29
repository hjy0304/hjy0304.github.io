var counter = 0; //發牌次數
var winner = ""; //勝利者 computer or player
var hasStood = false; //標記玩家是否已經不要牌

//所有的牌
var cards = [
    "club01", "club02", "club03", "club04", "club05", "club06", "club07",
    "club08", "club09", "club10", "club11", "club12", "club13", "diamond01",
    "diamond02", "diamond03", "diamond04", "diamond05", "diamond06", "diamond07",
    "diamond08", "diamond09", "diamond10", "diamond11", "diamond12", "diamond13",
    "heart01", "heart02", "heart03", "heart04", "heart05", "heart06", "heart07",
    "heart08", "heart09", "heart10", "heart11", "heart12", "heart13",
    "spade01", "spade02", "spade03", "spade04", "spade05", "spade06", "spade07",
    "spade08", "spade09", "spade10", "spade11", "spade12", "spade13"
];

//生成隨機數
var getRand = function (begin, end) {
    return Math.floor(Math.random() * (end - begin)) + begin;
}

//洗牌
var rand, tmp;
for (var i = 0; i < 1000; i++) {
    rand = getRand(1, 52);
    tmp = cards[0];
    cards[0] = cards[rand];
    cards[rand] = tmp;
}

//玩家手牌
var cards1 = [GetNewCard(), GetNewCard()];
var cards2 = [GetNewCard(), GetNewCard()];

var table = document.getElementById("tableboard");
table.rows[0].cells[1].innerHTML = "<img src=\"images\\back.jpg\" />";
table.rows[0].cells[2].innerHTML = "<img src=\"images\\" + cards1[1] + ".jpg\" />";
table.rows[1].cells[1].innerHTML = "<img src=\"images\\" + cards2[0] + ".jpg\" />";
table.rows[1].cells[2].innerHTML = "<img src=\"images\\" + cards2[1] + ".jpg\" />";
showScore();

//玩家再要一張牌
function NeedCard() {
    GetNewCard("player");
    if (checkIfBust("player")) {
        document.getElementById("show").innerHTML = "你爆了";//JS輸出 向 id="show" 的 HTML 元素输出文本 "你爆了" 
        //document.getElementById(" ") 得到的是一个对象
        document.getElementById("NeedCard").disabled = true;
        document.getElementById("notNeedCard").disabled = true;
        winner = "computer";
    }
    showScore();
}

//玩家選擇不要牌
function notNeedCard() {
    hasStood = true;
    document.getElementById("NeedCard").disabled = true;
    document.getElementById("notNeedCard").disabled = true;
    table.rows[0].cells[1].innerHTML = "<img src=\"images\\" + cards1[0] + ".jpg\" />";
    //電腦開始要牌
    while (calcResult("computer") < 17) {
        GetNewCard("computer");
        if (checkIfBust("computer")) {
            document.getElementById("show").innerHTML = "莊家爆牌";
            document.getElementById("NeedCard").disabled = true;
            document.getElementById("notNeedCard").disabled = true;
            winner = "player";
        }
    }
    //如果兩人都沒爆掉，分數高的獲勝
    if (winner == "") {
        var result1 = calcResult("computer");
        var result2 = calcResult("player");
        if (result1 == result2) {
            document.getElementById("show").innerHTML = "平局 ";
        } else if (result1 > result2) {                                       //OK
            document.getElementById("show").innerHTML = "你輸了 ";
        } else if (result1 < result2) {
            document.getElementById("show").innerHTML = "你贏了 ";
        }
    }
    showScore();
}

//再拿一張新牌
function GetNewCard(player) {
    var card = cards[counter++];
    if (player == "computer") {                  //function functionname(){这里是要执行的代码}
        var len = cards1.length;
        cards1[len] = card;
        table.rows[0].cells[len + 1].innerHTML =
            "<img src=\"images\\" + cards1[len] + ".jpg\" />";
    } else if (player == "player") {
        var len = cards2.length;
        cards2[len] = card;
        table.rows[1].cells[len + 1].innerHTML =
            "<img src=\"images\\" + cards2[len] + ".jpg\" />";
    }
    return card;
}

//判斷現在是否爆掉
function checkIfBust(player) {
    var result = 0;
    if (player == "computer") {
        for (var i = 0; i < cards1.length; i++) {

            var c = parseInt(cards1[i].substr(cards1[i].length - 2), "10");
            if (c > 10) {
                c = 10;
            }
            result += c;
        }
        if (result > 21) {
            return true;
        } else {
            return false;
        }
    } else if (player == "player") {
        for (var i = 0; i < cards2.length; i++) {
            var c = parseInt(cards2[i].substr(cards2[i].length - 2), "10");
            if (c > 10) {
                c = 10;
            }
            result += c;
        }
        if (result > 21) {
            return true;
        } else {
            return false;
        }
    }
}

//計算一名玩家的得分分數
function calcResult(player) {
    var result = 0;
    var countOfA = 0;
    if (player == "computer") {
        for (var i = 0; i < cards1.length; i++) {
            var c = parseInt(cards1[i].substr(cards1[i].length - 2), "10");
            if (c > 10) {
                c = 10;
            } else if (c == 1) {
                countOfA++;
            }
            result += c;
        }
        for (var i = 0; i < countOfA; i++) {
            if (result + 10 <= 21) {
                result += 10;
            } else {
                break;
            }
        }
    } else {
        for (var i = 0; i < cards2.length; i++) {
            var c = parseInt(cards2[i].substr(cards2[i].length - 2), "10");
            if (c > 10) {
                c = 10;
            } else if (c == 1) {
                countOfA++;
            }
            result += c;
        }
        for (var i = 0; i < countOfA; i++) {
            if (result + 10 <= 21) {
                result += 10;
            } else {
                break;
            }
        }
    }
    return result;
}

function showScore() {
    var result1 = calcResult("computer");
    var result2 = calcResult("player");
    document.getElementById("score").innerHTML =
        "[Computer : You = " + (hasStood == true ? result1 : "?") + " : " + result2 + "]";
}

function restart() {
    document.getElementById("NeedCard").disabled = false;
    document.getElementById("notNeedCard").disabled = false;
    counter = 0; //發牌次數
    winner = ""; //勝利者
    hasStood = false; //標記玩家是否不要牌
    cards = [

        "club01", "club02", "club03", "club04", "club05", "club06", "club07",
        "club08", "club09", "club10", "club11", "club12", "club13", "diamond01",
        "diamond02", "diamond03", "diamond04", "diamond05", "diamond06", "diamond07",
        "diamond08", "diamond09", "diamond10", "diamond11", "diamond12", "diamond13",
        "heart01", "heart02", "heart03", "heart04", "heart05", "heart06", "heart07",
        "heart08", "heart09", "heart10", "heart11", "heart12", "heart13",
        "spade01", "spade02", "spade03", "spade04", "spade05", "spade06", "spade07",
        "spade08", "spade09", "spade10", "spade11", "spade12", "spade13"
    ];
    //洗牌
    for (var i = 0; i < 1000; i++) {
        rand = getRand(1, 52);
        tmp = cards[0];
        cards[0] = cards[rand];
        cards[rand] = tmp;
    }
    //玩家手牌
    cards1 = [GetNewCard(), GetNewCard()];
    cards2 = [GetNewCard(), GetNewCard()];
    table.rows[0].cells[1].innerHTML = "<img src=\"images\\back.jpg\" />";
    table.rows[0].cells[2].innerHTML = "<img src=\"images\\" + cards1[1] + ".jpg\" />";
    table.rows[1].cells[1].innerHTML = "<img src=\"images\\" + cards2[0] + ".jpg\" />";
    table.rows[1].cells[2].innerHTML = "<img src=\"images\\" + cards2[1] + ".jpg\" />";
    //清空牌桌
    for (var i = 3; i < table.rows[0].cells.length; i++) {
        table.rows[0].cells[i].innerHTML = "";
        table.rows[1].cells[i].innerHTML = "";
    }
    showScore();
    document.getElementById("show").innerHTML = "請做出選擇並點擊";
}