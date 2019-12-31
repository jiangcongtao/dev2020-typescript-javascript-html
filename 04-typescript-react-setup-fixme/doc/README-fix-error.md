## 1. Error
```
> tsc
src/App.tsx:2:18 - error TS2307: Cannot find module './logo.svg'.

2 import logo from './logo.svg';
                   ~~~~~~~~~~~~


Found 1 error.
```

### Solution
create custom.d.ts under project root with the following content

```
declare module '*.svg' {
    const content: any;
    export default content;
}
```