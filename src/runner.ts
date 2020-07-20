import * as utils from "./utils";
require("dotenv").config();

const percentageFlag = process.env.PERCENTAGE_FLAG;

async function runAll() {
  const pos = await utils.getPosition("your");
  const hand = await utils.getHand();
  const sitch = await utils.getSituation();
  if (sitch === "Facing RFI" || sitch === "RFI vs 3-bet") {
    const oppPos = await utils.getPosition("opponent's");
    console.log(oppPos);
    const decision = await utils.makeDecisionComplex(sitch, pos, oppPos, hand);
    await utils.showDecision(decision);
    if (percentageFlag === "on") {
      const percentages = await utils.getPercentagesComplex(
        sitch,
        pos,
        oppPos,
        decision
      );
      await utils.showPercentages(percentages);
    }
  } else {
    const decision = await utils.makeDecision(sitch, pos, hand);
    await utils.showDecision(decision);
    if (percentageFlag === "on") {
      const percentages = await utils.getPercentages(sitch, pos, decision);
      await utils.showPercentages(percentages);
    }
  }
}

runAll();
