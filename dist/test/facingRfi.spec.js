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
describe('Facing RFI', () => {
    data_driven([
        { position: 'utg1', oppPosition: 'utg', decision: '3-Bet for Value', percentage: '2.6' },
        { position: 'utg1', oppPosition: 'utg', decision: '3-Bet as a Bluff', percentage: '1.5' },
        { position: 'utg1', oppPosition: 'utg', decision: 'Call', percentage: '3.3' },
        { position: 'utg1', oppPosition: 'utg', decision: 'Fold', percentage: '92.6' },
        { position: 'utg2', oppPosition: 'utg', decision: '3-Bet for Value', percentage: '2.6' },
        { position: 'utg2', oppPosition: 'utg', decision: '3-Bet as a Bluff', percentage: '1.5' },
        { position: 'utg2', oppPosition: 'utg', decision: 'Call', percentage: '3.3' },
        { position: 'utg2', oppPosition: 'utg', decision: 'Fold', percentage: '92.6' },
        { position: 'utg2', oppPosition: 'utg1', decision: '3-Bet for Value', percentage: '2.6' },
        { position: 'utg2', oppPosition: 'utg1', decision: '3-Bet as a Bluff', percentage: '1.5' },
        { position: 'utg2', oppPosition: 'utg1', decision: 'Call', percentage: '3.3' },
        { position: 'utg2', oppPosition: 'utg1', decision: 'Fold', percentage: '92.6' },
        { position: 'lj', oppPosition: 'utg', decision: '3-Bet for Value', percentage: '2.6' },
        { position: 'lj', oppPosition: 'utg', decision: '3-Bet as a Bluff', percentage: '1.8' },
        { position: 'lj', oppPosition: 'utg', decision: 'Call', percentage: '4.1' },
        { position: 'lj', oppPosition: 'utg', decision: 'Fold', percentage: '91.6' },
        { position: 'lj', oppPosition: 'utg1', decision: '3-Bet for Value', percentage: '2.6' },
        { position: 'lj', oppPosition: 'utg1', decision: '3-Bet as a Bluff', percentage: '1.8' },
        { position: 'lj', oppPosition: 'utg1', decision: 'Call', percentage: '4.1' },
        { position: 'lj', oppPosition: 'utg1', decision: 'Fold', percentage: '91.6' },
        { position: 'lj', oppPosition: 'utg2', decision: '3-Bet for Value', percentage: '2.6' },
        { position: 'lj', oppPosition: 'utg2', decision: '3-Bet as a Bluff', percentage: '2.4' },
        { position: 'lj', oppPosition: 'utg2', decision: 'Call', percentage: '4.5' },
        { position: 'lj', oppPosition: 'utg2', decision: 'Fold', percentage: '90.5' },
        { position: 'hj', oppPosition: 'utg', decision: '3-Bet for Value', percentage: '2.6' },
        { position: 'hj', oppPosition: 'utg', decision: '3-Bet as a Bluff', percentage: '1.8' },
        { position: 'hj', oppPosition: 'utg', decision: 'Call', percentage: '4.1' },
        { position: 'hj', oppPosition: 'utg', decision: 'Fold', percentage: '91.6' },
        { position: 'hj', oppPosition: 'utg1', decision: '3-Bet for Value', percentage: '2.6' },
        { position: 'hj', oppPosition: 'utg1', decision: '3-Bet as a Bluff', percentage: '1.8' },
        { position: 'hj', oppPosition: 'utg1', decision: 'Call', percentage: '4.8' },
        { position: 'hj', oppPosition: 'utg1', decision: 'Fold', percentage: '90.8' },
        { position: 'hj', oppPosition: 'utg2', decision: '3-Bet for Value', percentage: '2.6' },
        { position: 'hj', oppPosition: 'utg2', decision: '3-Bet as a Bluff', percentage: '3.0' },
        { position: 'hj', oppPosition: 'utg2', decision: 'Call', percentage: '5.3' },
        { position: 'hj', oppPosition: 'utg2', decision: 'Fold', percentage: '89.1' },
        { position: 'hj', oppPosition: 'lj', decision: '3-Bet for Value', percentage: '4.4' },
        { position: 'hj', oppPosition: 'lj', decision: '3-Bet as a Bluff', percentage: '4.5' },
        { position: 'hj', oppPosition: 'lj', decision: 'Call', percentage: '5.9' },
        { position: 'hj', oppPosition: 'lj', decision: 'Fold', percentage: '85.2' },
        { position: 'co', oppPosition: 'utg', decision: '3-Bet for Value', percentage: '2.9' },
        { position: 'co', oppPosition: 'utg', decision: '3-Bet as a Bluff', percentage: '2.4' },
        { position: 'co', oppPosition: 'utg', decision: 'Call', percentage: '5.7' },
        { position: 'co', oppPosition: 'utg', decision: 'Fold', percentage: '89.0' },
        { position: 'co', oppPosition: 'utg1', decision: '3-Bet for Value', percentage: '2.9' },
        { position: 'co', oppPosition: 'utg1', decision: '3-Bet as a Bluff', percentage: '2.4' },
        { position: 'co', oppPosition: 'utg1', decision: 'Call', percentage: '5.7' },
        { position: 'co', oppPosition: 'utg1', decision: 'Fold', percentage: '89.0' },
        { position: 'co', oppPosition: 'utg2', decision: '3-Bet for Value', percentage: '2.9' },
        { position: 'co', oppPosition: 'utg2', decision: '3-Bet as a Bluff', percentage: '3.6' },
        { position: 'co', oppPosition: 'utg2', decision: 'Call', percentage: '6.2' },
        { position: 'co', oppPosition: 'utg2', decision: 'Fold', percentage: '87.3' },
        { position: 'co', oppPosition: 'lj', decision: '3-Bet for Value', percentage: '4.4' },
        { position: 'co', oppPosition: 'lj', decision: '3-Bet as a Bluff', percentage: '4.2' },
        { position: 'co', oppPosition: 'lj', decision: 'Call', percentage: '6.0' },
        { position: 'co', oppPosition: 'lj', decision: 'Fold', percentage: '85.4' },
        { position: 'co', oppPosition: 'hj', decision: '3-Bet for Value', percentage: '4.4' },
        { position: 'co', oppPosition: 'hj', decision: '3-Bet as a Bluff', percentage: '6.0' },
        { position: 'co', oppPosition: 'hj', decision: 'Call', percentage: '6.3' },
        { position: 'co', oppPosition: 'hj', decision: 'Fold', percentage: '83.3' },
        { position: 'button', oppPosition: 'utg', decision: '3-Bet for Value', percentage: '2.6' },
        { position: 'button', oppPosition: 'utg', decision: '3-Bet as a Bluff', percentage: '3.6' },
        { position: 'button', oppPosition: 'utg', decision: 'Call', percentage: '8.1' },
        { position: 'button', oppPosition: 'utg', decision: 'Fold', percentage: '85.7' },
        { position: 'button', oppPosition: 'utg1', decision: '3-Bet for Value', percentage: '2.6' },
        { position: 'button', oppPosition: 'utg1', decision: '3-Bet as a Bluff', percentage: '3.9' },
        { position: 'button', oppPosition: 'utg1', decision: 'Call', percentage: '8.7' },
        { position: 'button', oppPosition: 'utg1', decision: 'Fold', percentage: '84.8' },
        { position: 'button', oppPosition: 'utg2', decision: '3-Bet for Value', percentage: '3.8' },
        { position: 'button', oppPosition: 'utg2', decision: '3-Bet as a Bluff', percentage: '3.9' },
        { position: 'button', oppPosition: 'utg2', decision: 'Call', percentage: '10.3' },
        { position: 'button', oppPosition: 'utg2', decision: 'Fold', percentage: '82.1' },
        { position: 'button', oppPosition: 'lj', decision: '3-Bet for Value', percentage: '3.8' },
        { position: 'button', oppPosition: 'lj', decision: '3-Bet as a Bluff', percentage: '4.5' },
        { position: 'button', oppPosition: 'lj', decision: 'Call', percentage: '10.6' },
        { position: 'button', oppPosition: 'lj', decision: 'Fold', percentage: '81.1' },
        { position: 'button', oppPosition: 'hj', decision: '3-Bet for Value', percentage: '4.1' },
        { position: 'button', oppPosition: 'hj', decision: '3-Bet as a Bluff', percentage: '5.1' },
        { position: 'button', oppPosition: 'hj', decision: 'Call', percentage: '11.5' },
        { position: 'button', oppPosition: 'hj', decision: 'Fold', percentage: '79.3' },
        { position: 'button', oppPosition: 'co', decision: '3-Bet for Value', percentage: '4.1' },
        { position: 'button', oppPosition: 'co', decision: '3-Bet as a Bluff', percentage: '6.9' },
        { position: 'button', oppPosition: 'co', decision: 'Call', percentage: '13.9' },
        { position: 'button', oppPosition: 'co', decision: 'Fold', percentage: '75.1' },
        { position: 'sb', oppPosition: 'utg', decision: '3-Bet for Value', percentage: '1.7' },
        { position: 'sb', oppPosition: 'utg', decision: '3-Bet as a Bluff', percentage: '0.9' },
        { position: 'sb', oppPosition: 'utg', decision: 'Call', percentage: '6.5' },
        { position: 'sb', oppPosition: 'utg', decision: 'Fold', percentage: '91.0' },
        { position: 'sb', oppPosition: 'utg1', decision: '3-Bet for Value', percentage: '1.7' },
        { position: 'sb', oppPosition: 'utg1', decision: '3-Bet as a Bluff', percentage: '0.9' },
        { position: 'sb', oppPosition: 'utg1', decision: 'Call', percentage: '6.5' },
        { position: 'sb', oppPosition: 'utg1', decision: 'Fold', percentage: '91.0' },
        { position: 'sb', oppPosition: 'utg2', decision: '3-Bet for Value', percentage: '1.7' },
        { position: 'sb', oppPosition: 'utg2', decision: '3-Bet as a Bluff', percentage: '0.9' },
        { position: 'sb', oppPosition: 'utg2', decision: 'Call', percentage: '7.8' },
        { position: 'sb', oppPosition: 'utg2', decision: 'Fold', percentage: '89.6' },
        { position: 'sb', oppPosition: 'lj', decision: '3-Bet for Value', percentage: '2.9' },
        { position: 'sb', oppPosition: 'lj', decision: '3-Bet as a Bluff', percentage: '2.1' },
        { position: 'sb', oppPosition: 'lj', decision: 'Call', percentage: '7.1' },
        { position: 'sb', oppPosition: 'lj', decision: 'Fold', percentage: '87.9' },
        { position: 'sb', oppPosition: 'hj', decision: '3-Bet for Value', percentage: '2.9' },
        { position: 'sb', oppPosition: 'hj', decision: '3-Bet as a Bluff', percentage: '3.0' },
        { position: 'sb', oppPosition: 'hj', decision: 'Call', percentage: '7.8' },
        { position: 'sb', oppPosition: 'hj', decision: 'Fold', percentage: '86.3' },
        { position: 'sb', oppPosition: 'co', decision: '3-Bet for Value', percentage: '5.6' },
        { position: 'sb', oppPosition: 'co', decision: '3-Bet as a Bluff', percentage: '11.2' },
        { position: 'sb', oppPosition: 'co', decision: 'Call', percentage: '0.0' },
        { position: 'sb', oppPosition: 'co', decision: 'Fold', percentage: '83.3' },
        { position: 'sb', oppPosition: 'button', decision: '3-Bet for Value', percentage: '7.7' },
        { position: 'sb', oppPosition: 'button', decision: '3-Bet as a Bluff', percentage: '13.6' },
        { position: 'sb', oppPosition: 'button', decision: 'Call', percentage: '0.0' },
        { position: 'sb', oppPosition: 'button', decision: 'Fold', percentage: '78.7' },
        { position: 'bb', oppPosition: 'utg', decision: '3-Bet for Value', percentage: '2.0' },
        { position: 'bb', oppPosition: 'utg', decision: '3-Bet as a Bluff', percentage: '2.1' },
        { position: 'bb', oppPosition: 'utg', decision: 'Call', percentage: '23.8' },
        { position: 'bb', oppPosition: 'utg', decision: 'Fold', percentage: '72.1' },
        { position: 'bb', oppPosition: 'utg1', decision: '3-Bet for Value', percentage: '2.0' },
        { position: 'bb', oppPosition: 'utg1', decision: '3-Bet as a Bluff', percentage: '2.1' },
        { position: 'bb', oppPosition: 'utg1', decision: 'Call', percentage: '23.8' },
        { position: 'bb', oppPosition: 'utg1', decision: 'Fold', percentage: '72.1' },
        { position: 'bb', oppPosition: 'utg2', decision: '3-Bet for Value', percentage: '3.3' },
        { position: 'bb', oppPosition: 'utg2', decision: '3-Bet as a Bluff', percentage: '3.0' },
        { position: 'bb', oppPosition: 'utg2', decision: 'Call', percentage: '23.7' },
        { position: 'bb', oppPosition: 'utg2', decision: 'Fold', percentage: '70.0' },
        { position: 'bb', oppPosition: 'lj', decision: '3-Bet for Value', percentage: '4.4' },
        { position: 'bb', oppPosition: 'lj', decision: '3-Bet as a Bluff', percentage: '3.3' },
        { position: 'bb', oppPosition: 'lj', decision: 'Call', percentage: '25.3' },
        { position: 'bb', oppPosition: 'lj', decision: 'Fold', percentage: '67.0' },
        { position: 'bb', oppPosition: 'hj', decision: '3-Bet for Value', percentage: '5.3' },
        { position: 'bb', oppPosition: 'hj', decision: '3-Bet as a Bluff', percentage: '4.2' },
        { position: 'bb', oppPosition: 'hj', decision: 'Call', percentage: '24.1' },
        { position: 'bb', oppPosition: 'hj', decision: 'Fold', percentage: '66.4' },
        { position: 'bb', oppPosition: 'co', decision: '3-Bet for Value', percentage: '8.0' },
        { position: 'bb', oppPosition: 'co', decision: '3-Bet as a Bluff', percentage: '6.3' },
        { position: 'bb', oppPosition: 'co', decision: 'Call', percentage: '29.6' },
        { position: 'bb', oppPosition: 'co', decision: 'Fold', percentage: '56.1' },
        { position: 'bb', oppPosition: 'button', decision: '3-Bet for Value', percentage: '9.4' },
        { position: 'bb', oppPosition: 'button', decision: '3-Bet as a Bluff', percentage: '13.0' },
        { position: 'bb', oppPosition: 'button', decision: 'Call', percentage: '49.6' },
        { position: 'bb', oppPosition: 'button', decision: 'Fold', percentage: '28.1' },
        { position: 'bb', oppPosition: 'sb', decision: '3-Bet for Value', percentage: '9.4' },
        { position: 'bb', oppPosition: 'sb', decision: '3-Bet as a Bluff', percentage: '14.2' },
        { position: 'bb', oppPosition: 'sb', decision: 'Call', percentage: '54.8' },
        { position: 'bb', oppPosition: 'sb', decision: 'Fold', percentage: '21.7' }
    ], function () {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        it('Facing RFI {position} vs {oppPosition} {percentage}', (ctx) => __awaiter(this, void 0, void 0, function* () {
            const perc = yield utils.getPercentagesComplex('Facing RFI', ctx.position, ctx.oppPosition, ctx.decision);
            chai_1.expect(perc).to.eql(`${ctx.percentage}% of hands`);
        }));
    });
    data_driven([
        { position: 'utg1', oppPosition: 'utg', hand: 'AKo', decision: '3-Bet for Value' },
        { position: 'utg1', oppPosition: 'utg', hand: '72o', decision: 'Fold' },
        { position: 'utg1', oppPosition: 'utg', hand: 'JJ', decision: 'Call' },
        { position: 'utg1', oppPosition: 'utg', hand: 'AQo', decision: '3-Bet as a Bluff' },
        { position: 'utg2', oppPosition: 'utg', hand: 'AKo', decision: '3-Bet for Value' },
        { position: 'utg2', oppPosition: 'utg', hand: '72o', decision: 'Fold' },
        { position: 'utg2', oppPosition: 'utg', hand: 'JJ', decision: 'Call' },
        { position: 'utg2', oppPosition: 'utg', hand: 'AQo', decision: '3-Bet as a Bluff' },
        { position: 'utg2', oppPosition: 'utg1', hand: 'AKo', decision: '3-Bet for Value' },
        { position: 'utg2', oppPosition: 'utg1', hand: '72o', decision: 'Fold' },
        { position: 'utg2', oppPosition: 'utg1', hand: 'JJ', decision: 'Call' },
        { position: 'utg2', oppPosition: 'utg1', hand: 'AQo', decision: '3-Bet as a Bluff' },
        { position: 'lj', oppPosition: 'utg', hand: 'AKo', decision: '3-Bet for Value' },
        { position: 'lj', oppPosition: 'utg', hand: '72o', decision: 'Fold' },
        { position: 'lj', oppPosition: 'utg', hand: 'JJ', decision: 'Call' },
        { position: 'lj', oppPosition: 'utg', hand: '77', decision: 'Call' },
        { position: 'lj', oppPosition: 'utg', hand: 'AQo', decision: '3-Bet as a Bluff' },
        { position: 'lj', oppPosition: 'utg', hand: 'A5s', decision: '3-Bet as a Bluff' },
        { position: 'lj', oppPosition: 'utg1', hand: 'AKo', decision: '3-Bet for Value' },
        { position: 'lj', oppPosition: 'utg1', hand: '72o', decision: 'Fold' },
        { position: 'lj', oppPosition: 'utg1', hand: 'JJ', decision: 'Call' },
        { position: 'lj', oppPosition: 'utg1', hand: '77', decision: 'Call' },
        { position: 'lj', oppPosition: 'utg1', hand: 'AQo', decision: '3-Bet as a Bluff' },
        { position: 'lj', oppPosition: 'utg1', hand: 'A5s', decision: '3-Bet as a Bluff' },
        { position: 'lj', oppPosition: 'utg2', hand: 'AKo', decision: '3-Bet for Value' },
        { position: 'lj', oppPosition: 'utg2', hand: '72o', decision: 'Fold' },
        { position: 'lj', oppPosition: 'utg2', hand: 'JJ', decision: 'Call' },
        { position: 'lj', oppPosition: 'utg2', hand: '66', decision: 'Call' },
        { position: 'lj', oppPosition: 'utg2', hand: 'AQo', decision: '3-Bet as a Bluff' },
        { position: 'lj', oppPosition: 'utg2', hand: 'A5s', decision: '3-Bet as a Bluff' },
        { position: 'lj', oppPosition: 'utg2', hand: '98s', decision: '3-Bet as a Bluff' },
        { position: 'lj', oppPosition: 'utg2', hand: '87s', decision: '3-Bet as a Bluff' }
    ], function () {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        it('Facing RFI {position} {hand} vs {oppPosition}', (ctx) => __awaiter(this, void 0, void 0, function* () {
            const chart = require('../../facingRfi.json'); // eslint-disable-line @typescript-eslint/no-var-requires
            const len = chart[ctx.position][ctx.oppPosition].length;
            const decision = yield utils.findHandActionComplex(chart, ctx.position, ctx.oppPosition, len, ctx.hand);
            if (ctx.decision === 'Fold') {
                chai_1.expect(decision).to.eql(undefined);
            }
            else {
                chai_1.expect(decision).to.eql(ctx.decision);
            }
        }));
    });
});