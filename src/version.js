const packageInfo = require(`../package.json`);
require(`colors`);

module.exports = {
  name: `version`,
  description: `Shows program version`,
  execute() {
    console.log(`
      v${packageInfo.version.split(`.`) [0].red}.${packageInfo.version.split(`.`) [1].green}.${packageInfo.version.split(`.`) [2].blue}
    `);
  }
};
