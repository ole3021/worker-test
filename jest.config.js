module.exports = {
  displayName: "ALL",
  preset: "ts-jest",
  testRegex: ".*/src/.*\\.(spec|intg|e2e)\\.ts$",
  transformIgnorePatterns: ["/node_modules"],
  modulePathIgnorePatterns: ["dist"],
};
