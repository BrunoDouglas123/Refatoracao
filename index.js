function processNumberByRandom(num, process) {
  const randNum = Math.round(Math.random() * 100);
  switch (process) {
    case "soma":
      return `Seu número será ${randNum + num}!`;
      break;
    case "divide":
      return `Seu número será ${randNum / num}!`;
      break;
    case "multiplica":
      return `Seu número será ${randNum * num}!`;
      break;
    case "subtrai":
      return `Seu número será ${randNum - num}!`;
      break;
    default:
      return `Seu número será ${randNum + num}!`;
      break;
  }
}

console.log(processNumberByRandom(12, "divide"));
