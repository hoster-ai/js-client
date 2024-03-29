/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  verbose: true,
  rootDir: '.',
  testRegex: '.spec.ts$',
  // "transform": {
  //   "^.+\\.(t|j)s$": "ts-jest"
  // },
  // "moduleFileExtensions": ["js", "json", "ts"],
};