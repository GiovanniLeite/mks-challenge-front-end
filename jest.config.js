module.exports = {
  testEnvironment: 'jsdom',
  testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[tj]s?(x)'],
  testPathIgnorePatterns: ['/node_modules/', '/.next/', '/out/', '/public/'],

  setupFilesAfterEnv: ['<rootDir>/.jest/jest-setup.ts'],
};
