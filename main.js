var array = ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten'];
var answer = ((process.argv).slice(2));
answer.forEach(converterFunction)

function converterFunction(indexTwo, ind, arrays) {
    Strings = "";
    var arr = (String(indexTwo)
        .split('')
        .map(Number)).forEach(conversionFunction);
    arrays[ind] = Strings;
}

function conversionFunction(index) {
    Strings += array[index - 1];
}
console.log(answer.join(", "));
