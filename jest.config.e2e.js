module.exports = {
  displayName: "E2E",
  preset: "ts-jest",
  testRegex: ".*/test/.*\\.e2e\\.ts$",
  transformIgnorePatterns: ["/node_modules"],
  modulePathIgnorePatterns: ["dist"],
};
