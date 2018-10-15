const packageInfo = require(`../package.json`);

module.exports = {
  name: `license`,
  description: `Shows program license`,
  execute() {
    console.log(`${packageInfo.license}`);
  }
};
