import * as utils from './utils';

const inquirer = require("inquirer");

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

  export async function getAction() {
    const situation = [
      {
        type: "list",
        name: "situation",
        message: "What is your situation?",
        choices: ["3-Bet for Value", "3-Bet as a Bluff", "Call", "Raise", "4-Bet for Value", "4-Bet as a Bluff"],
      },
    ];
    const answers = await inquirer.prompt(situation);
    // console.log(answers.situation);
    return answers.situation;
  }

async function run() {
    for (let i = 0; i < 169;) {
        const hand = await getHand();
        const action = await getAction();
        const obj =  {
            hand,
            action
        }
        const json = JSON.stringify(obj)
        await utils.addData(json);
        i++;
    }
}


run();