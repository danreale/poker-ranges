"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer = require("inquirer");
const chalk = require("chalk");
function getSituation() {
    return __awaiter(this, void 0, void 0, function* () {
        const situation = [
            {
                type: "list",
                name: "situation",
                message: "What is your situation?",
                choices: ["RFI", "Facing RFI", "RFI vs 3-bet"],
            },
        ];
        const answers = yield inquirer.prompt(situation);
        // console.log(answers.situation);
        return answers.situation;
    });
}
exports.getSituation = getSituation;
function getPosition(player) {
    return __awaiter(this, void 0, void 0, function* () {
        const [position] = [
            {
                type: "list",
                name: "position",
                message: `What is ${player} position?`,
                choices: ["utg", "utg1", "utg2", "lj", "hj", "co", "button", "sb", "bb"],
            },
        ];
        const answers = yield inquirer.prompt(position);
        // console.log(answers.position);
        return answers.position;
    });
}
exports.getPosition = getPosition;
function getHand() {
    return __awaiter(this, void 0, void 0, function* () {
        const hand = [
            {
                type: "input",
                name: "hand",
                message: `What is your hand?`,
            },
        ];
        const answers = yield inquirer.prompt(hand);
        // console.log(answers.hand);
        return answers.hand;
    });
}
exports.getHand = getHand;
function makeDecision(situation, position, hand) {
    return __awaiter(this, void 0, void 0, function* () {
        if (situation === "RFI") {
            const chart = require("../rfi.json");
            const action = yield getHandAction(chart, position, hand);
            return action;
        }
    });
}
exports.makeDecision = makeDecision;
function makeDecisionComplex(situation, myposition, oppPosition, hand) {
    return __awaiter(this, void 0, void 0, function* () {
        if (situation === "Facing RFI") {
            const chart = require("../facingRfi.json");
            const action = yield getHandActionComplex(chart, myposition, oppPosition, hand);
            return action;
        }
        if (situation === "RFI vs 3-bet") {
            const chart = require("../rfiFacingThreeBet.json");
            const action = yield getHandActionComplex(chart, myposition, oppPosition, hand);
            return action;
        }
    });
}
exports.makeDecisionComplex = makeDecisionComplex;
function getHandAction(chart, position, hand) {
    return __awaiter(this, void 0, void 0, function* () {
        const len = chart[position].length;
        const action = yield findHandAction(chart, position, len, hand);
        return action;
    });
}
exports.getHandAction = getHandAction;
function getHandActionComplex(chart, myposition, oppPosition, hand) {
    return __awaiter(this, void 0, void 0, function* () {
        let len = chart[myposition][oppPosition].length;
        const action = yield findHandActionComplex(chart, myposition, oppPosition, len, hand);
        return action;
    });
}
exports.getHandActionComplex = getHandActionComplex;
function findHandAction(chart, position, len, hand) {
    return __awaiter(this, void 0, void 0, function* () {
        for (let i = 0; i < len; i++) {
            if (chart[position][i].hand === hand) {
                return chart[position][i].action;
            }
        }
    });
}
exports.findHandAction = findHandAction;
function findHandActionComplex(chart, myposition, oppPosition, len, hand) {
    return __awaiter(this, void 0, void 0, function* () {
        for (let i = 0; i < len; i++) {
            if (chart[myposition][oppPosition][i].hand === hand) {
                return chart[myposition][oppPosition][i].action;
            }
        }
    });
}
exports.findHandActionComplex = findHandActionComplex;
function getPercentages(situation, position, decision) {
    return __awaiter(this, void 0, void 0, function* () {
        let chart;
        if (situation === "RFI") {
            chart = require("../rfi.json");
        }
        if (decision === undefined) {
            return `${chart[position][0].Fold}% of hands`;
        }
        else {
            return `${chart[position][0][decision]}% of hands`;
        }
    });
}
exports.getPercentages = getPercentages;
function getPercentagesComplex(situation, myposition, oppPosition, decision) {
    return __awaiter(this, void 0, void 0, function* () {
        let chart;
        if (situation === "Facing RFI") {
            chart = require("../facingRfi.json");
        }
        if (situation === "RFI vs 3-bet") {
            chart = require("../rfiFacingThreeBet.json");
        }
        if (decision === undefined) {
            return `${chart[myposition][oppPosition][0].Fold}% of hands`;
        }
        else {
            return `${chart[myposition][oppPosition][0][decision]}% of hands`;
        }
    });
}
exports.getPercentagesComplex = getPercentagesComplex;
function showPercentages(percentages) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log(chalk.yellow(percentages));
    });
}
exports.showPercentages = showPercentages;
function showDecision(decision) {
    return __awaiter(this, void 0, void 0, function* () {
        if (decision === undefined) {
            console.log(chalk.white("Fold"));
        }
        else if (decision === "Raise") {
            console.log(chalk.red(decision));
        }
        else if (decision === "Raise for Value") {
            console.log(chalk.red(decision));
        }
        else if (decision === "Raise as a Bluff") {
            console.log(chalk.blue(decision));
        }
        else if (decision === "Limp") {
            console.log(chalk.green(decision));
        }
        else if (decision === "3-Bet for Value") {
            console.log(chalk.red(decision));
        }
        else if (decision === "3-Bet as a Bluff") {
            console.log(chalk.blue(decision));
        }
        else if (decision === "Call") {
            console.log(chalk.green(decision));
        }
        else if (decision === "4-Bet for Value") {
            console.log(chalk.red(decision));
        }
        else if (decision === "4-Bet as a Bluff") {
            console.log(chalk.blue(decision));
        }
    });
}
exports.showDecision = showDecision;
function addData(data) {
    return __awaiter(this, void 0, void 0, function* () {
        const fs = require("fs");
        fs.appendFile("hands.txt", `${data},\n`, function (err) {
            if (err)
                throw err;
        });
    });
}
exports.addData = addData;
