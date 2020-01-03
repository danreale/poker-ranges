const inquirer = require("inquirer");
const chalk = require("chalk");

async function getSituation() {
  const situation = [
      {
          type: "list",
          name: "situation",
          message: "What is your situation?",
          choices: ["RFI", "RFI vs 3-bet", "Facing RFI"],
      },
  ];
  const answers = await inquirer.prompt(situation);
  // console.log(answers.situation);
  return answers.situation;
}
async function getPosition() {
  const [position] = [
      {
          type: "list",
          name: "position",
          message: "What is your position?",
          choices: ["utg", "utg1", "utg2", "lojack", "hijack", "cutoff", "button", "sb", "bb"],
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
async function makeDecision(situation: any, position: any, hand: any) {
  if (situation === "RFI") {
    const chart = require("../rfi.json");
    const action = await getHandAction(chart, position, hand);
    return action;
  }
}
async function getHandAction(chart: any, position: any, hand: any) {
  let utglen = chart.utg.length;
  let utg1len = chart.utg1.length;
  let utg2len = chart.utg2.length;
  let ljlen = chart.lojack.length;
  let hjlen = chart.hijack.length;
  let clen = chart.cutoff.length;
  let butlen = chart.button.length;
  let sblen = chart.sb.length;

  // TODO: add other lengths here

  if (position === "utg") {
    const action = await findHandAction(chart, position, utglen, hand);
    return action;
  } else if (position === "utg1") {
    const action = await findHandAction(chart, position, utg1len, hand);
    return action;
  } else if (position === "utg2") {
    const action = await findHandAction(chart, position, utg2len, hand);
    return action;
  } else if (position === "lojack") {
    const action = await findHandAction(chart, position, ljlen, hand);
    return action;
  } else if (position === "hijack") {
    const action = await findHandAction(chart, position, hjlen, hand);
    return action;
  } else if (position === "cutoff") {
    const action = await findHandAction(chart, position, clen, hand);
    return action;
  } else if (position === "button") {
    const action = await findHandAction(chart, position, butlen, hand);
    return action;
  } else if (position === "sb") {
    const action = await findHandAction(chart, position, sblen, hand);
    return action;
  }
}

async function findHandAction(chart: any, position: any, len: any, hand: any) {
  for (let i = 0; i < len; i++) {
    if (chart[position][i].hand === hand) {
      return chart[position][i].action;
    }
  }
}
async function showPercentages(situation: any, position: any, decision: any) {
  let chart: any
  if (situation === "RFI") {
    chart = require("../rfi.json");
  }
  if(decision === undefined) {
    console.log(chalk.yellow(chart[position][0].Fold + "% of hands"));
  } else {
    console.log(chalk.yellow(chart[position][0][decision] + "% of hands"));
  }
}

async function runAll() {
  const sitch = await getSituation();
  const pos = await getPosition();
  const hand = await getHand();
  const decision = await makeDecision(sitch, pos, hand);
  await showDecision(decision);
  await showPercentages(sitch, pos, decision);
}
async function showDecision(decision: any) {
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
  }
}

runAll();
