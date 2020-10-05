let numberDictionary = {
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    14: "fourteen",
    15: "fifteen",
    16: "sixteen",
    17: "seventeen",
    18: "eighteen",
    19: "nineteen",
    20: "twenty",
    30: "thirty",
    40: "fourty",
    50: "fifty",
    60: "sixty",
    70: "seventy",
    80: "eighty",
    90: "ninety",
};

module.exports = function toReadable(number) {
    let rank = 10 ** (tmpNumber.toString.length - 1);
    let stringNumber = "";
    for (
        let tmpNumber = number;
        rank >= 1;
        tmpNumber = tmpNumber % rank, rank = rank / 10
    )
        switch (rank) {
            case 100:
                stringNumber =
                    stringNumber + numbersDictionary[digit] + " hundred";
                break;
            case 10:
                if (digit >= 2 && digit <= 9) {
                    stringNumber =
                        stringNumber + " " + numbersDictionary[digit * 10];
                    break;
                }
                if (digit == 1) {
                    stringNumber =
                        stringNumber + " " + numbersDictionary[tmpNumber];
                    break;
                }
            case 1:
                if (digit == 0) {
                    break;
                }

                stringNumber = stringNumber + " " + numbersDictionary[digit];
                break;
        }

    return stringNumber.trim();
};

console.log(toReadable(10));
