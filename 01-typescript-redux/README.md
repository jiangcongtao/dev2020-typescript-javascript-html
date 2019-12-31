# Run and Debug TypeScript program

## 1. Without tsconfig.json
### 1.1 Compile src\HelloWorld.ts to plain javascript file
tsc src\HelloWorld.ts --outFile dist\HelloWorld.js

### 1.2 Run HelloWorld.js
node dist\HelloWorld.js

## 2. With tsconfig.json
### 2.1 Create tsconfig.josn and customize it properly (source and out folders)
tsc --init

### 2.2 Compile and run
- Compile 
tsc  

- Run
node dist\HelloWorld.js

- Debug 
configure the following property in tsconfig.json

 "sourceMap": true

 then use VS Code debug  to debug the editting file
 
