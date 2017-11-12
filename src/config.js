const convict = require('convict');

// Define a schema
const config = convict({
  env: {
    doc: "The application environment.",
    format: ["production", "development", "test"],
    default: "development",
    env: "NODE_ENV"
  },
  openweather: {
    doc: "Open Weather API Key",
    format: String,
    default: null,
    env: "OPEN_WEATHER_API_KEY",
  }
});

// Load environment dependent configuration
const env = config.get('env');
config.loadFile('./config/' + env + '.json');

// Perform validation
config.validate({allowed: 'strict'});

module.exports = config;
