module.exports = {
  displayName: 'UNIT',
  preset: "ts-jest",
  testRegex: ".*/src/.*\\.spec\\.ts$",
  transformIgnorePatterns: ["/node_modules"],
  modulePathIgnorePatterns: ["dist"],
};
