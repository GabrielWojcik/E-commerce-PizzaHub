/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    "jest": {
      "transform": {
        "^.+\\.jsx?$": "babel-jest"
      }
    }
  };