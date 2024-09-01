function points(games) {
  

  let totalPoints = 0;
  for (let match of games) {
    let [x, y] = match.split(":").map(Number);
    if (x > y) {
      totalPoints += 3;
    } else if (x === y) {
      totalPoints += 1;
    }
  }
  return totalPoints;
}