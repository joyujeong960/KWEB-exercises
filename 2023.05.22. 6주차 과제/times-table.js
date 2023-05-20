const displayTimes = () => {
    const textInput = document.getElementById('number').value;
    const input = Number(textInput);
    var result = `\n`;

    if (input == NaN || input != parseInt(textInput)){ //만약 input이 NaN이거나, 입력값이 소수면
        result += `Input Error!`;
    } else {
        if (input >= 1 && input <= 9){
            for (let i = 1; i <= 9; i++) {
                result += `${input} * ${i} = ${input * i}\n`;
            }
        }
        else {
            result += `Input Error!`;
            
        }
    }

    document.getElementById('times-result').innerText = result;
}