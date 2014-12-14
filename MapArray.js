function doubleAll(numbers) {
    var doubledNumbers = [];
    numbers.map(function(number){
        doubledNumbers.push(number * 2);
    });

    return doubledNumbers;
}

module.exports = doubleAll
