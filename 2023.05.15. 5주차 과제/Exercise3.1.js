const isValidNumber = (x) => {
    if (Number.isInteger(x) || typeof(x)=='string'){
        if (x >= 1 && x <= 9){
            return true;
        }
    }
    return false;
}