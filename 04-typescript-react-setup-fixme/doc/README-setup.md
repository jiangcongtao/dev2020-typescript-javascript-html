# Integrate React.js with TypeScript

## 1. create react project using `create-react-app` npx command
npx create-react-app 04-typescript-react-setup --template typescript

## 2. add typescript to react project
cd 04-typescript-react-setup
npm install --save typescript @types/node @types/react @types/react-dom @types/jest

tsc --init

## 3. rename all .js to .tsx
## 4. test by running

npm start

or

npm run build
npm install -g serve
serve -s build


npm install webpack webpack-cli --save-dev
npx webpack
