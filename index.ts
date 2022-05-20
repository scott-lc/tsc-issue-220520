import clsx from "clsx";
import classNames from "classnames";

/*
  index.ts:8:13 - error TS2349: This expression is not callable.
  Type 'typeof import(".../tsc-issue-220520/node_modules/clsx/clsx")' has no call signatures.
*/
console.log(clsx("a", "b", "c"));

/*
  index.ts:14:13 - error TS2349: This expression is not callable.
  Type 'typeof import(".../tsc-issue-220520/node_modules/classnames/index")' has no call signatures.
*/
console.log(classNames("a", "b", "c"));
