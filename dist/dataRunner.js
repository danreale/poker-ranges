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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils = __importStar(require("./utils"));
const inquirer = require("inquirer");
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
function getAction() {
    return __awaiter(this, void 0, void 0, function* () {
        const situation = [
            {
                type: "list",
                name: "situation",
                message: "What is your situation?",
                choices: [
                    "3-Bet for Value",
                    "3-Bet as a Bluff",
                    "Call",
                    "Raise",
                    "4-Bet for Value",
                    "4-Bet as a Bluff",
                ],
            },
        ];
        const answers = yield inquirer.prompt(situation);
        // console.log(answers.situation);
        return answers.situation;
    });
}
exports.getAction = getAction;
function run() {
    return __awaiter(this, void 0, void 0, function* () {
        for (let i = 0; i < 169;) {
            const hand = yield getHand();
            const action = yield getAction();
            const obj = {
                hand,
                action,
            };
            const json = JSON.stringify(obj);
            yield utils.addData(json);
            i++;
        }
    });
}
run();
