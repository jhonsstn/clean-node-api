module.exports = {
  roots: ['<rootDir>/src'],
  clearMocks: true,
  coverageDirectory: 'coverage',
  transform: {
    '.+\\.ts$': 'ts-jest'
  }
}
