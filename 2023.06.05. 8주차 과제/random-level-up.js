const probs = [100, 60, 36, 22, 13, 8, 5, 3, 2, 1];

let level = Number(document.getElementById('current-level').innerText);
let attempt = Number(document.getElementById('attempts').innerText);

const getRandomBinaryResult = (ratio) => {
    const rand = Math.floor(Math.random() * 100);
    return (rand < ratio);
}

const tryLevelUp = () => {
    const loop =
        setInterval(() => {
            attempt++;
            document.getElementById('attempts').innerText = attempt;
            let levelUP = getRandomBinaryResult(probs[level]);
            if (levelUP) {
                level++;
                document.getElementById('current-level').innerText = level;
                document.getElementById('gauge-bar').style.width = `${level * 10}%`;
            }
            document.getElementById('attempts').innerText = attempt;
            if (level >= 10) clearInterval(loop);
        }, 50);
};