## Setup a TypeScript project for unit testing

npm init -y

npm install --save-dev mocha @types/mocha chai @types/chai ts-node typescript

## Run the tests use the following command

mocha --reporter spec --compilers ts:ts-node/register test/**/*.test.ts

## or add above command into package.json
npm test