function repeat(operation, num) {
    num--;
    if(num>=0){
        operation();
        return repeat(operation,num);
    }
}

// Do not remove the line below
module.exports = repeat;
