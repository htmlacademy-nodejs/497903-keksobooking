const packageInfo = require(`../package.json`);

module.exports = {
  name: `version`,
  description: `Shows program version`,
  execute() {
    console.log(`v${packageInfo.version}`);
  }
};
