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
const chai_1 = require("chai");
const utils = __importStar(require("../utils"));
require('dotenv').config(); // eslint-disable-line @typescript-eslint/no-var-requires
const data_driven = require('data-driven'); // eslint-disable-line @typescript-eslint/no-var-requires
const percentageFlag = process.env.PERCENTAGE_FLAG;
describe('RFI Facing 3-Bet', () => {
    data_driven([
        { position: 'utg', oppPosition: 'utg1', hand: 'AKo', decision: '4-Bet for Value', percentage: '2.1' },
        { position: 'utg', oppPosition: 'utg1', hand: '72o', decision: 'Fold', percentage: '93.4' },
        { position: 'utg', oppPosition: 'utg1', hand: 'JJ', decision: 'Call', percentage: '3.3' },
        { position: 'utg', oppPosition: 'utg1', hand: 'AQo', decision: '4-Bet as a Bluff', percentage: '1.2' }
    ], function () {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        it('RFI Facing 3-Bet {position} {hand} vs {oppPosition}', (ctx) => __awaiter(this, void 0, void 0, function* () {
            const chart = require('../../rfiFacingThreeBet.json'); // eslint-disable-line @typescript-eslint/no-var-requires
            const len = chart[ctx.position][ctx.oppPosition].length;
            const decision = yield utils.findHandActionComplex(chart, ctx.position, ctx.oppPosition, len, ctx.hand);
            const perc = yield utils.getPercentagesComplex('RFI vs 3-bet', ctx.position, ctx.oppPosition, decision);
            if (ctx.decision === 'Fold') {
                chai_1.expect(decision).to.eql(undefined);
            }
            else {
                chai_1.expect(decision).to.eql(ctx.decision);
            }
            if (percentageFlag === 'on') {
                chai_1.expect(perc).to.eql(`${ctx.percentage}% of hands`);
            }
        }));
    });
});
