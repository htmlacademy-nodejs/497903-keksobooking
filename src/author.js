const packageInfo = require(`../package.json`);

module.exports = {
  name: `author`,
  description: `Shows program author`,
  execute() {
    console.log(`${packageInfo.author}`);
  }
};
