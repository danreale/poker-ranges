import { expect } from 'chai';
import * as utils from "../utils";
require('dotenv').config(); // eslint-disable-line @typescript-eslint/no-var-requires

const data_driven = require('data-driven'); // eslint-disable-line @typescript-eslint/no-var-requires
const percentageFlag = process.env.PERCENTAGE_FLAG;


describe('RFI Facing 3-Bet', () => {
  data_driven(
      [
          {position: 'utg', oppPosition: 'utg1', hand: 'AKo', decision: '4-Bet for Value', percentage: '2.1'},
          {position: 'utg', oppPosition: 'utg1', hand: '72o', decision: 'Fold', percentage: '93.4'},
          {position: 'utg', oppPosition: 'utg1', hand: 'JJ', decision: 'Call', percentage: '3.3'},
          {position: 'utg', oppPosition: 'utg1', hand: 'AQo', decision: '4-Bet as a Bluff', percentage: '1.2'}
      ],
  function() {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      it('RFI Facing 3-Bet {position} {hand} vs {oppPosition}', async(ctx: any) => {
          const chart = require('../../rfiFacingThreeBet.json'); // eslint-disable-line @typescript-eslint/no-var-requires
          const len = chart[ctx.position][ctx.oppPosition].length;
          const decision = await utils.findHandActionComplex(chart, ctx.position, ctx.oppPosition, len, ctx.hand);
          const perc = await utils.getPercentagesComplex('RFI vs 3-bet', ctx.position, ctx.oppPosition, decision);
          if (ctx.decision === 'Fold') {
              expect(decision).to.eql(undefined);
          } else {
              expect(decision).to.eql(ctx.decision);
          }
          if (percentageFlag === 'on') {
              expect(perc).to.eql(`${ctx.percentage}% of hands`);
          }
      });
  });
});