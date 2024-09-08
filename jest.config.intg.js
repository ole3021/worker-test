module.exports = {
  displayName: "INTG",
  preset: "ts-jest",
  testRegex: ".*/test/.*\\.intg\\.ts$",
  transformIgnorePatterns: ["/node_modules"],
  modulePathIgnorePatterns: ["dist"],
};
