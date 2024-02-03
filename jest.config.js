module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  moduleFileExtensions: ["js", "jsx", "json", "vue"],
  transform: {
    "^.+\\.js$": "babel-jest",
    ".*\\.(vue)$": "vue-jest",
  },
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  snapshotSerializers: ["jest-serializer-vue"],
  testMatch: ["**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx)"],
  testEnvironmentOptions: {
    url: "http://localhost/",
  },
};
