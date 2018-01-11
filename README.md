# Concentration Game

**Concentration**: is **JetRuby** test task which performs Concentration web game: there's a board of tils
(4*4 by default), every two tils have same color. The game is played due to traditional rules: there's a sequence of
rounds, in eahc round player should select 2 tiles with the same color to remove them from the board. If player selects
2 tiles with different colors than they are flipped to the "closed" state, and player proceeds with the next round. The
game is considered to be over when all the tiles are opened.

Game is created with the help of React and Redux.

## Development Environment

*Create React App* package is used for development environment and in order to deploy the game on GitHub Pages.
*ESLint* is used as a linter.
*Redux Dev Tools Extension* is used for store monitoring.

## Running

Pull master branch and run *npm install* to install all dependencies.
To launch the app run *npm start* and go to http://localhost:3000/.

## Production

Run *npm run deploy* to create production build & deploy new version of the site:
https://NtonBala.github.io./concentration.
