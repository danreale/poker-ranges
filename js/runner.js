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
                choices: ["RFI", "RFI vs 3-bet", "Facing RFI"],
            },
        ];
        const answers = yield inquirer.prompt(situation);
        // console.log(answers.situation);
        return answers.situation;
    });
}
function getPosition() {
    return __awaiter(this, void 0, void 0, function* () {
        const [position] = [
            {
                type: "list",
                name: "position",
                message: "What is your position?",
                choices: ["utg", "utg1", "utg2", "lojack", "hijack", "cutoff", "button", "sb", "bb"],
            },
        ];
        const answers = yield inquirer.prompt(position);
        // console.log(answers.position);
        return answers.position;
    });
}
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
function getHandAction(chart, position, hand) {
    return __awaiter(this, void 0, void 0, function* () {
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
            const action = yield findHandAction(chart, position, utglen, hand);
            return action;
        }
        else if (position === "utg1") {
            const action = yield findHandAction(chart, position, utg1len, hand);
            return action;
        }
        else if (position === "utg2") {
            const action = yield findHandAction(chart, position, utg2len, hand);
            return action;
        }
        else if (position === "lojack") {
            const action = yield findHandAction(chart, position, ljlen, hand);
            return action;
        }
        else if (position === "hijack") {
            const action = yield findHandAction(chart, position, hjlen, hand);
            return action;
        }
        else if (position === "cutoff") {
            const action = yield findHandAction(chart, position, clen, hand);
            return action;
        }
        else if (position === "button") {
            const action = yield findHandAction(chart, position, butlen, hand);
            return action;
        }
        else if (position === "sb") {
            const action = yield findHandAction(chart, position, sblen, hand);
            return action;
        }
    });
}
function findHandAction(chart, position, len, hand) {
    return __awaiter(this, void 0, void 0, function* () {
        for (let i = 0; i < len; i++) {
            if (chart[position][i].hand === hand) {
                return chart[position][i].action;
            }
        }
    });
}
function showPercentages(situation, position, decision) {
    return __awaiter(this, void 0, void 0, function* () {
        let chart;
        if (situation === "RFI") {
            chart = require("../rfi.json");
        }
        if (decision === undefined) {
            console.log(chalk.yellow(chart[position][0].Fold + "% of hands"));
        }
        else {
            console.log(chalk.yellow(chart[position][0][decision] + "% of hands"));
        }
    });
}
function runAll() {
    return __awaiter(this, void 0, void 0, function* () {
        const sitch = yield getSituation();
        const pos = yield getPosition();
        const hand = yield getHand();
        const decision = yield makeDecision(sitch, pos, hand);
        yield showDecision(decision);
        yield showPercentages(sitch, pos, decision);
    });
}
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
    });
}
runAll();
