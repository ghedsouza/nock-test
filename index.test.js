const nock = require("nock");
nock.recorder.rec();

const main = require("./index.js");

test("main", async () => {
  const result = await main();
  expect(result).toBe(0);
});
