#!/usr/bin/env node
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
require("dotenv").config();
const percentageFlag = process.env.PERCENTAGE_FLAG;
function runAll() {
    return __awaiter(this, void 0, void 0, function* () {
        const pos = yield utils.getPosition("your");
        const hand = yield utils.getHand();
        const sitch = yield utils.getSituation();
        if (sitch === "Facing RFI" || sitch === "RFI vs 3-bet") {
            const oppPos = yield utils.getPosition("opponent's");
            console.log(oppPos);
            const decision = yield utils.makeDecisionComplex(sitch, pos, oppPos, hand);
            yield utils.showDecision(decision);
            if (percentageFlag === "on") {
                const percentages = yield utils.getPercentagesComplex(sitch, pos, oppPos, decision);
                yield utils.showPercentages(percentages);
            }
        }
        else {
            const decision = yield utils.makeDecision(sitch, pos, hand);
            yield utils.showDecision(decision);
            if (percentageFlag === "on") {
                const percentages = yield utils.getPercentages(sitch, pos, decision);
                yield utils.showPercentages(percentages);
            }
        }
    });
}
runAll();
