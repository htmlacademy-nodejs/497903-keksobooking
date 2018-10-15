const packageInfo = require(`../package.json`);
require(`colors`);

module.exports = {
  name: `version`,
  description: `Shows program version`,
  execute() {
    const majorVesionr = packageInfo.version.split(`.`)[0];
    const minorVersion = packageInfo.version.split(`.`)[1];
    const patchVersion = packageInfo.version.split(`.`)[2];
    console.log(`v${majorVesionr.red}.${minorVersion.green}.${patchVersion.blue}`);
  }
};
