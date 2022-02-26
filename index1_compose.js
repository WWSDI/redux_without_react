const { compose } = require("redux");

const makeLouder = (string) => string.toUpperCase();
const repeatThreeTimes = (string) => string.repeat(3);
const embolden = (string) => string.bold();

// This is done without using compose
const louderRepeatEmbolden1 = (string) =>
  embolden(repeatThreeTimes(makeLouder(string)));
const louderRepeatEmbolden2 = (string) =>
  [makeLouder, repeatThreeTimes, embolden].reduce(
    (resultString, fn) => fn(resultString),
    string,
  );
console.log("without compose 1:", louderRepeatEmbolden1("shawn"));
console.log("without compose 2:", louderRepeatEmbolden2("shawn"));

// This is done using compose from Redux
const louderRepeatEmbolden3_redux = compose(
  embolden,
  repeatThreeTimes,
  makeLouder,
);
console.log("with compose:", louderRepeatEmbolden3_redux("shawn"));
