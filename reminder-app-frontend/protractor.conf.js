exports.config = {
    framework: 'jasmine',
    specs: ['./tests/testupdateuser.spec.js'], // Update the path to match your test file location
    capabilities: {
        browserName: 'chrome',
    },
    directConnect: true,
    baseUrl: 'http://localhost:3000', // Update with the base URL of your app
};