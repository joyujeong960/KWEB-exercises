const getDivisors = (x) => {
    let divs = []
    for (let i = 0; i <= Math.sqrt(x); i++){
        if (x % i == 0){
            divs.push(i);
            if (i != x/i){
                divs.push(x/i);
            }
        }
    }
    return divs.sort((a, b)=> {
        return a-b;
    });
}