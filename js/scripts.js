
var romanNumeral = function(number) {
    var answer = [];
    var symbols = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];
    var values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];


    if (number > 3999) {
        return "Can't do it!";
    }

    for (var i = 0; i < 13; i++) {
        while (number >= values[i]) {
            answer.push(symbols[i]);
            number -= values[i];
        }
    }

    // ^^^This does the same thing as    VVV This!

    // while (number >= 1000) {
    //     answer.push(symbols[0]);
    //     number -= 1000;
    // }
    //
    // while (number >= 900) {
    //     answer.push(symbols[1]);
    //     number -= 900;
    // }
    //
    // while (number >= 500) {
    //     answer.push(symbols[2]);
    //     number -= 500;
    // }
    //
    // while (number >= 400) {
    //     answer.push(symbols[3]);
    //     number -= 400;
    // }
    //
    // while (number >= 100) {
    //     answer.push(symbols[4]);
    //     number -= 100;
    // }
    //
    // while (number >= 90) {
    //     answer.push(symbols[5]);
    //     number -= 90;
    // }
    //
    // while (number >= 50) {
    //     answer.push(symbols[6]);
    //     number -= 50;
    // }
    //
    // while (number >= 40) {
    //     answer.push(symbols[7]);
    //     number -= 40;
    // }
    //
    // while (number >= 10) {
    //     answer.push(symbols[8]);
    //     number -= 10;
    // }
    //
    // while (number >= 9) {
    //     answer.push(symbols[9]);
    //     number -= 9;
    // }
    //
    // while (number >= 5) {
    //     answer.push(symbols[10]);
    //     number -= 5;
    // }
    //
    // while (number >= 4) {
    //     answer.push(symbols[11]);
    //     number -= 4;
    // }
    //
    // while (number >= 1) {
    //     answer.push(symbols[12]);
    //     number -= 1;
    // }

    return answer.join("");
}

$(document).ready(function() {
    $("form#roman").submit(function(event) {
        var number = parseInt($("input#number").val());

        var result = romanNumeral(number);
        $(".result-roman").text(result);

        $("#result").show();
        event.preventDefault();

    });
});
