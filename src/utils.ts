const inquirer = require("inquirer");
const chalk = require("chalk");

export async function getSituation() {
  const situation = [
    {
      type: "list",
      name: "situation",
      message: "What is your situation?",
      choices: ["RFI", "Facing RFI", "RFI vs 3-bet"],
    },
  ];
  const answers = await inquirer.prompt(situation);
  // console.log(answers.situation);
  return answers.situation;
}
export async function getPosition(player: string) {
  const [position] = [
    {
      type: "list",
      name: "position",
      message: `What is ${player} position?`,
      choices: ["utg", "utg1", "utg2", "lj", "hj", "co", "button", "sb", "bb"],
    },
  ];
  const answers = await inquirer.prompt(position);
  // console.log(answers.position);
  return answers.position;
}
export async function getHand() {
  const hand = [
    {
      type: "input",
      name: "hand",
      message: `What is your hand?`,
    },
  ];
  const answers = await inquirer.prompt(hand);
  // console.log(answers.hand);
  return answers.hand;
}
export async function makeDecision(situation: any, position: any, hand: any) {
  if (situation === "RFI") {
    const chart = require("../rfi.json");
    const action = await getHandAction(chart, position, hand);
    return action;
  }
}
export async function makeDecisionComplex(
  situation: any,
  myposition: any,
  oppPosition: any,
  hand: any
) {
  if (situation === "Facing RFI") {
    const chart = require("../facingRfi.json");
    const action = await getHandActionComplex(
      chart,
      myposition,
      oppPosition,
      hand
    );
    return action;
  }
  if (situation === "RFI vs 3-bet") {
    const chart = require("../rfiFacingThreeBet.json");
    const action = await getHandActionComplex(
      chart,
      myposition,
      oppPosition,
      hand
    );
    return action;
  }
}
export async function getHandAction(chart: any, position: any, hand: any) {
  const len = chart[position].length;
  const action = await findHandAction(chart, position, len, hand);
  return action;
}
export async function getHandActionComplex(
  chart: any,
  myposition: any,
  oppPosition: any,
  hand: any
) {
  let len = chart[myposition][oppPosition].length;
  const action = await findHandActionComplex(
    chart,
    myposition,
    oppPosition,
    len,
    hand
  );
  return action;
}

export async function findHandAction(
  chart: any,
  position: any,
  len: any,
  hand: any
) {
  for (let i = 0; i < len; i++) {
    if (chart[position][i].hand === hand) {
      return chart[position][i].action;
    }
  }
}
export async function findHandActionComplex(
  chart: any,
  myposition: any,
  oppPosition: any,
  len: any,
  hand: any
) {
  for (let i = 0; i < len; i++) {
    if (chart[myposition][oppPosition][i].hand === hand) {
      return chart[myposition][oppPosition][i].action;
    }
  }
}
export async function getPercentages(
  situation: any,
  position: any,
  decision: any
) {
  let chart: any;
  if (situation === "RFI") {
    chart = require("../rfi.json");
  }
  if (decision === undefined) {
    return `${chart[position][0].Fold}% of hands`;
  } else {
    return `${chart[position][0][decision]}% of hands`;
  }
}
export async function getPercentagesComplex(
  situation: any,
  myposition: any,
  oppPosition: any,
  decision: any
) {
  let chart: any;
  if (situation === "Facing RFI") {
    chart = require("../facingRfi.json");
  }
  if (situation === "RFI vs 3-bet") {
    chart = require("../rfiFacingThreeBet.json");
  }
  if (decision === undefined) {
    return `${chart[myposition][oppPosition][0].Fold}% of hands`;
  } else {
    return `${chart[myposition][oppPosition][0][decision]}% of hands`;
  }
}
export async function showPercentages(percentages: any) {
  console.log(chalk.yellow(percentages));
}
export async function showDecision(decision: any) {
  if (decision === undefined) {
    console.log(chalk.white("Fold"));
  } else if (decision === "Raise") {
    console.log(chalk.red(decision));
  } else if (decision === "Raise for Value") {
    console.log(chalk.red(decision));
  } else if (decision === "Raise as a Bluff") {
    console.log(chalk.blue(decision));
  } else if (decision === "Limp") {
    console.log(chalk.green(decision));
  } else if (decision === "3-Bet for Value") {
    console.log(chalk.red(decision));
  } else if (decision === "3-Bet as a Bluff") {
    console.log(chalk.blue(decision));
  } else if (decision === "Call") {
    console.log(chalk.green(decision));
  } else if (decision === "4-Bet for Value") {
    console.log(chalk.red(decision));
  } else if (decision === "4-Bet as a Bluff") {
    console.log(chalk.blue(decision));
  }
}

export async function addData(data: any) {
  const fs = require("fs");

  fs.appendFile("hands.txt", `${data},\n`, function (err: any) {
    if (err) throw err;
  });
}
