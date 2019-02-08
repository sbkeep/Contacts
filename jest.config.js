module.exports = {
  setupFiles: ['<rootDir>/testSetup/jestSetup.js'],
  moduleNameMapper: {
    '\\.(png|svg)$': '<rootDir>/testSetup/mock.js',
  },
  transformIgnorePatterns: ['<rootDir>/node_modules'],
};
