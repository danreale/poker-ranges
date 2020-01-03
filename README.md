# Poker Ranges

`mkdir poker`

`cd poker`

`npm init` - take all defaults

`npm install poker-ranges`

In `package.json` file, add this to scripts: `"deal": "node ./node_modules/poker-ranges/js/runner.js"`

To run the program - `npm run deal`

## Hand Examples
Poket pairs
* AA
* 77
* 22

Off Suit Hands
* AKo
* 76o
* JTo

Suited Hands
* AQs
* 85s
* 32s
* T9s

RFI - how to play a hand when everyone folds to you
RFI vs 3-bet - how to play when you are the first one to raise and someone who did not act yet, 3 bets you. (not implemented yet)
Facing RFI - how to play when someone raised before you (not implemented yet)