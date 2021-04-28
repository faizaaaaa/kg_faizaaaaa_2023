var array = ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten'];

((process.argv).slice(2)).forEach(converterFunction);


function converterFunction(indexTwo, ind, arrays) {
    Strings = "";
    var arr = (String(indexTwo)
        .split('')
        .map(Number)).forEach(conversionFunction);
    arrays[ind] = Strings;
    console.log(Strings);
}

function conversionFunction(index) {
    Strings += array[index - 1];
}
