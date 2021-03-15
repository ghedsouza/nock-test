const fetch = require("node-fetch");

const main = async () => {
  console.log("test");
  const response = await fetch("http://example.edu/");
  console.log(response);
  return 0;
};
module.exports = main;
