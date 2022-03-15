export const announceResult = (playerSelection, compSelection) => {
  switch (playerSelection) {
    case "Axe":
      if (compSelection === "Axe") return "Tied"
      if(compSelection=== "Moai") return "Lost"
      if(compSelection=== "Tree") return "Won"
      break;
    case "Tree":
      if (compSelection === "Axe") return "Lost"
      if(compSelection=== "Moai") return "Won"
      if(compSelection=== "Tree") return "Tied"
      break;
    case "Moai":
      if (compSelection === "Axe") return "Won"
      if(compSelection=== "Moai") return "Tied"
      if(compSelection=== "Tree") return "Lost"
      break;
    default:
      return "Waiting"
  }
};

export const genFeedbackMessage = (status) => {
  const lookup = {
    Waiting: 'Waiting for your choice!',
    Won: 'You win!!',
    Lost: 'Too bad! Better luck next time.',
    Tied: 'Tie game'
  };
  return lookup[status];
};


export const assignRobotChoice = () => {
  const options = ['Moai', 'Axe', 'Tree'];
  const index = Math.floor(Math.random() * options.length)
  return options[index]
}

