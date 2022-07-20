module.exports = {
  roots: ['<rootDir>/src'],
  clearMocks: true,
  coverageDirectory: 'coverage',
  preset: '@shelf/jest-mongodb',
  transform: {
    '.+\\.ts$': 'ts-jest'
  }
}
