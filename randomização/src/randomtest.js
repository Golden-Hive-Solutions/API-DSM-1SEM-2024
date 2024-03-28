const array = [];
for (let i = 1; i <= 50; i++) {
  array.push(i);
}

function shuffleq(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array.slice(0, 20);
}

const shuffledq = shuffleq(array).sort((a,b) => a - b);
console.log(shuffledq);
